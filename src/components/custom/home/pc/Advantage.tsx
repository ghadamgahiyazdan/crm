import React from "react";
import Container from "../../Container";
import Img from "../../LazyLoadImg";

export const Advantages = [
  {
    id: 1,
    title: "مدیریت متمرکز مشتری ها",
    description: "همه اطلاعات مشتریان در یک مکان، همیشه در دسترس",
  },
  {
    id: 2,
    title: "افزایش بهره ‌وری تیم فروش",
    description: "کارها سریع ‌تر و هدفمند تر انجام می‌شوند",
  },
  {
    id: 3,
    title: "پیگیری خودکار سرنخ ها",
    description: "هیچ مشتری احتمالی از دست نمی‌رود",
  },
  {
    id: 4,
    title: "یادآوری و پیگیری خودکار کارها",
    description: "بدون فراموشی و با نظم پیش برو",
  },
  {
    id: 5,
    title: "گزارش ‌گیری دقیق و فوری",
    description: "تصمیم ‌گیری با داده ‌های واقعی",
  },
  {
    id: 6,
    title: "اتوماسیون بازاریابی",
    description: "ارسال پیام ‌ها و ایمیل‌ ها به ‌صورت زمان‌بندی‌شده",
  },
  {
    id: 7,
    title: "دسترسی آسان از هر جا",
    description: "فقط با اینترنت، روی هر دستگاهی",
  },
  {
    id: 8,
    title: "بهبود تجربه مشتری",
    description: "پاسخ ‌دهی سریع‌ تر، ارتباط بهتر اعتماد بیشتر",
  },
  {
    id: 9,
    title: "یکپارچگی با ابزارهای دیگر",
    description: "اتصال با واتساپ، ایمیل، فرم ‌ها",
  },
];

const AdvantagesGrid = () => (
  <div className="h-full grid grid-cols-3 grid-rows-3 gap-10">
    {Advantages.map((advantage) => (
      <div
        key={advantage.id}
        className={`flex flex-col items-center justify-center border-2 border-black rounded-lg p-4 gap-4 shadow-xl ${advantage.id % 2 === 0 ? "bg-secondary" : "bg-white"
          }`}
      >
        <Img
          src={`./section3/${advantage.id}.svg`}
          alt={advantage.title} 
          width={98}
          height={98}
        />
        <h1 className="text-2xl text-center font-bold [text-shadow:1px_2px_3px_rgba(0,0,0,0.5)]">
          {advantage.title}
        </h1>
        <p className="text-xl font-bold text-center">{advantage.description}</p>
      </div>
    ))}
  </div>
);

const AdvantagesSection = () => (
  <section className="border-b border-dashed border-black bg-gradient-to-t from-white via-amber-100 to-white">
    <Container>
      <div className="h-fit">
        <div className="h-20" />
        <div className="h-full flex flex-col items-center">
          <h1
            className="relative text-6xl text-secondary font-bold
          [--text-stroke:3px]
          [--text-stroke-color:black]
          [paint-order:stroke_fill]
          [-webkit-text-stroke:var(--text-stroke)_var(--text-stroke-color)]"
          >
            مزیت های کلیدی همراه کارفرما چیست؟
          </h1>
          <div className="h-10" />
          <AdvantagesGrid />
        </div>
        <div className="h-10" />
      </div>
    </Container>
  </section>
);

export default AdvantagesSection;
