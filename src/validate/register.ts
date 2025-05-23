import z from "zod"

export const registerSchema = z
  .object({
    phone: z
      .string()
      .min(11, "شماره موبایل معتبر نیست")
      .regex(/^9\d{9}$/, "شماره موبایل معتبر نیست"), // شروع با 9 و 10 رقم بعدش
    name: z.string().min(2, "نام الزامی است"),
    password: z.string().min(6, "رمز عبور حداقل ۶ کاراکتر است"),
    cpassword: z.string().min(6, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "رمز عبور با تکرار آن مطابقت ندارد",
    path: ["cpassword"],
  })