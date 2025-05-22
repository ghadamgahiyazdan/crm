"use client";

import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";

const OTP_LENGTH = 6;
const TIMER_SECONDS = 120;

const OtpPage: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
    const [timer, setTimer] = useState<number>(TIMER_SECONDS);
    const [expired, setExpired] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        if (timer === 0) {
            setExpired(true);
            return;
        }
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const formatTime = (sec: number) => {
        const minutes = String(Math.floor(sec / 60)).padStart(2, "0");
        const seconds = String(sec % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    // اصلاح شده برای دریافت چند کاراکتر و پر کردن inputهای بعدی
    const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
        let val = e.target.value.toUpperCase();

        // فقط اعداد (0-9) مجاز است، اگر بخواهید حروف هم اضافه کنید می‌توانید regex را تغییر دهید
        val = val.replace(/[^0-9]/g, "");

        if (!val) {
            // اگر خالی شد، مقدار آن خانه را پاک کن
            const newOtp = [...otp];
            newOtp[idx] = "";
            setOtp(newOtp);
            setError("");
            return;
        }

        // اگر چند کاراکتر وارد شده (مثلاً Paste)، آن‌ها را به inputهای بعدی اختصاص بده
        const newOtp = [...otp];
        let nextIndex = idx;

        for (let i = 0; i < val.length && nextIndex < OTP_LENGTH; i++) {
            newOtp[nextIndex] = val[i];
            nextIndex++;
        }

        setOtp(newOtp);
        setError("");

        // فوکوس را به اولین input خالی بعدی منتقل کن
        if (nextIndex < OTP_LENGTH) {
            inputRefs.current[nextIndex]?.focus();
        } else {
            // اگر همه پر شدند، فوکوس را روی آخرین input بگذار
            inputRefs.current[OTP_LENGTH - 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            const newOtp = [...otp];
            if (newOtp[idx] !== "") {
                newOtp[idx] = "";
                setOtp(newOtp);
            } else if (idx > 0) {
                inputRefs.current[idx - 1]?.focus();
                const prevOtp = [...otp];
                prevOtp[idx - 1] = "";
                setOtp(prevOtp);
            }
        } else if (e.key === "ArrowLeft" && idx > 0) {
            inputRefs.current[idx - 1]?.focus();
        } else if (e.key === "ArrowRight" && idx < OTP_LENGTH - 1) {
            inputRefs.current[idx + 1]?.focus();
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        if (enteredOtp.length < OTP_LENGTH || otp.includes("")) {
            setError("لطفاً تمام کاراکترها را وارد کنید.");
            return;
        }
        console.log("کد وارد شده:", enteredOtp);
    };

    const handleResend = () => {
        setOtp(Array(OTP_LENGTH).fill(""));
        setTimer(TIMER_SECONDS);
        setExpired(false);
        setError("");
        inputRefs.current[0]?.focus();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary p-6">
            <h1 className="text-3xl font-bold mb-4 text-black">همراه کارفرما</h1>
            <p className="text-black mb-6 font-semibold">رمز یکبارمصرف به تلفن شما ارسال شد.</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="flex gap-2 mb-4">
                    {otp.map((digit, idx) => (
                        <input
                            key={idx}
                            type="text"
                            inputMode="numeric"
                            maxLength={OTP_LENGTH} // maxLength را بزرگتر بگذاریم تا Paste کامل قبول شود
                            value={digit}
                            onChange={(e) => handleChange(e, idx)}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                            disabled={expired}
                            ref={(el) => { inputRefs.current[idx] = el; }}
                            className="w-12 h-12 text-center text-xl rounded border border-gray-900 focus:outline-none"
                            autoComplete="off"
                        />
                    ))}
                </div>

                <div className="mb-4 text-black font-medium">
                    {expired ? (
                        <button
                            type="button"
                            onClick={handleResend}
                            className="underline text-blue-600 hover:text-blue-800"
                        >
                            ارسال مجدد رمز
                        </button>
                    ) : (
                        <p>زمان باقی‌مانده: {formatTime(timer)}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={expired}
                    className={`px-8 py-2 rounded text-white font-semibold ${expired ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 border-1 border-black"
                        }`}
                >
                    تایید
                </button>

                {error && (
                    <p className="mt-3 text-red-500 font-bold text-center" role="alert">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
};

export default OtpPage;
