import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { registerSchema } from "@/validate/register";
import jalaali from "jalaali-js";

const prisma = new PrismaClient();

const BCRYPT_SALT_ROUNDS = 10;

const MESSAGES = {
  USER_EXISTS: "User already exists",
  REGISTER_SUCCESS: "Registration successful",
  SERVER_ERROR: "An error occurred during registration",
  VALIDATION_ERROR: "Invalid input data",
};

const STATUS_CODES = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  SUCCESS: 200,
  SERVER_ERROR: 500,
};

function toJalaliString(date: Date) {
  const { jy, jm, jd } = jalaali.toJalaali(date);
  // Format as YYYY/MM/DD (zero-pad month and day)
  return `${jy}/${String(jm).padStart(2, "0")}/${String(jd).padStart(2, "0")}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input using Zod schema
    const result = registerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0]?.message || MESSAGES.VALIDATION_ERROR },
        { status: STATUS_CODES.BAD_REQUEST }
      );
    }

    const { phone, password, name } = result.data;

    // Check if user already exists by phone
    const existingUser = await prisma.user.findUnique({
      where: { phone },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: MESSAGES.USER_EXISTS },
        { status: STATUS_CODES.CONFLICT }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        phone,
        password: hashedPassword,
        name: name.trim(),
        is_validate: false,
        create_date: new Date(),
      },
    });

    // Check JWT secret
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT secret is not configured");
    }

    // Generate JWT token
    const tokenData = {
      id: newUser.id,
      phone: newUser.phone,
      create_date: newUser.create_date,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
      algorithm: "HS256",
    });

    // Prepare response with Jalali date string
    const response = NextResponse.json(
      {
        message: MESSAGES.REGISTER_SUCCESS,
        user: {
          phone: newUser.phone,
          name: newUser.name,
          create_date: toJalaliString(newUser.create_date),
        },
      },
      { status: STATUS_CODES.SUCCESS }
    );

    // Set secure cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 86400,
    });

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: MESSAGES.SERVER_ERROR },
      { status: STATUS_CODES.SERVER_ERROR }
    );
  }
}
