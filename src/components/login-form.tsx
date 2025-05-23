"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { loginSchema } from "@/validate/login"

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (data: LoginFormValues) => {
    console.log("ورود موفق:", data)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">
                  به{" "}
                  <span className="text-secondary [text-shadow:1px_2px_3px_rgba(0,0,0,0.5)]">
                    همراه کارفرما
                  </span>{" "}
                  خوش آمدید
                </h1>
                <p>به حساب کاربری خود وارد شوید</p>
              </div>

              {/* Phone Field */}
              <div className="grid gap-2">
                <Label dir="rtl" htmlFor="phone">شماره موبایل</Label>
                <Input
                  id="phone"
                  type="text"
                  placeholder="9*********"
                  className="bg-primary"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Password Field with show/hide toggle */}
              <div className="grid gap-2">
                <Label dir="rtl" htmlFor="password">کلمه عبور</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="bg-primary pr-10"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-2 flex items-center text-muted-foreground"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm text-right">{errors.password.message}</p>
                )}
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm underline-offset-2 hover:underline text-blue-500"
                  >
                    رمز عبور خود را فراموش کرده‌اید؟
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-chart-6 border-black rounded-md"
              >
                ورود
              </Button>

              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-black relative z-10 px-2">یا</span>
              </div>

              <div className="text-center text-sm">
                حساب کاربری ندارید؟{" "}
                <Link
                  href="/register"
                  className="underline underline-offset-4 text-blue-500 hover:font-bold"
                >
                  ثبت‌نام کنید
                </Link>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="login.svg"
              alt="تصویر"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-muted-foreground *:[a]:hover:font-bold text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        با کلیک روی ادامه، شما با{" "}
        <Link href="/term" className="text-blue-500">شرایط استفاده</Link> و{" "}
        <Link href="/term" className="text-blue-500">سیاست حفظ حریم خصوصی</Link> ما موافقت می‌کنید.
      </div>
    </div>
  )
}
