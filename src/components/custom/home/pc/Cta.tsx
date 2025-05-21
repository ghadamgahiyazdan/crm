import Container from "../../Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Img from "../../LazyLoadImg";

const CtaSection = () => (
  <section>
    <div className="h-10" />
    <Container>
      <CtaText />
    </Container>
    <div className="h-10" />
    <AnimatedArrow />
    <CtaFinalSection />
  </section>
);

const CtaText = () => (
  <div className="flex flex-col justify-center gap-4">
    <h1 className="font-bold text-3xl text-center">
      با ابزارهایی که دیدی، می‌تونی ارتباطاتت رو هدفمندتر و مدیریت کسب‌وکار رو هوشمندتر کنی
    </h1>
    <h1 className="font-bold text-3xl text-center">
      .حالا نوبت توئه که وارد مسیر رشد بشی
    </h1>
  </div>
);

const AnimatedArrow = () => (
  <div className="flex flex-col justify-center items-center">
    {[...Array(7)].map((_, i) => (
      <p key={i} className="text-3xl animate-bounce">|</p>
    ))}
    <p className="text-3xl animate-bounce">۷</p>
  </div>
);

const CtaFinalSection = () => (
  <div className="bg-gradient-to-r from-white via-amber-100 to-white">
    <div className="h-5" />
    <Container>
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <Img
            src="section4.svg"
            alt="hamrah crm"
            width={625}
            height={425}
          />
        </div>
        <CtaButton />
        <CtaFinalText />
      </div>
    </Container>
    <div className="h-5" />
  </div>
);

const CtaButton = () => (
  <div className="w-full flex justify-center items-center">
    <Link href="/services">
      <Button
        variant="bold"
        className="bg-chart-6 shadow-xl rounded-2xl animate-bounce"
      >
        بزن بریم
      </Button>
    </Link>
  </div>
);

const CtaFinalText = () => (
  <div className="flex flex-col items-end">
    <h1 className="text-6xl font-medium [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
      !شروع کنید
    </h1>
    <div className="h-20" />
    <div className="flex flex-col items-end gap-4">
      <p className="text-3xl">مشتری‌ هات رو بهتر بشناس، سریع‌ تر پاسخ</p>
      <p className="text-3xl">.بده، هوشمندانه‌ تر رشد کن</p>
      <p className="text-3xl">همه این‌ها از اینجا شروع می‌شه</p>
      <p className="text-3xl">.شروع کن و آینده کسب و کارِت رو بساز</p>
    </div>
    <div className="h-10" />
  </div>

);
export default CtaSection;