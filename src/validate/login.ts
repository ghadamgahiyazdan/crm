import z from "zod"

export const loginSchema = z.object({
  phone: z
    .string()
    .min(10, "شماره موبایل معتبر نیست")
    .max(12, "شماره موبایل معتبر نیست")
    .regex(/^9\d{9}$/, "شماره موبایل معتبر نیست"),
  password: z.string().min(6, "کلمه عبور باید حداقل ۶ کاراکتر باشد"),
})