import Container from "../../Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Img from "../../LazyLoadImg";

const HeroSection = () => (
  <section className="border-b border-dashed border-black">
    <div className="h-20" />
    <div className="h-[30%]">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1 className="text-5xl font-bold">به دنیای مدیریت هوشمند مشتریان</h1>
        <h1 className="text-5xl font-bold">
          <span className="text-secondary">! 👋همراه کارفرما</span> خوش اومدی
        </h1>
      </div>
    </div>
    <div className="h-[60%] bg-gradient-to-t from-white via-amber-100 to-white">
      <div className="h-full">
        <Container>
          <div className="grid grid-cols-3 mt-10">
            <div className="col-span-1 flex flex-col items-center">
              <Img
                src="section1.svg"
                alt="hamrah crm"
                width={483}
                height={435}
              />
            </div>
            <HeroContent />
          </div>
        </Container>
        <div className="h-20" />
      </div>
    </div>
  </section>
);

const HeroContent = () => (
  <div className="col-span-2 flex flex-col items-end justify-end gap-5 mt-4">
    <h1 className="text-2xl font-bold">اینجا جاییه که ارتباط با مشتری، پیگیری سرنخ‌ها و رشد فروش</h1>
    <h1 className="text-2xl font-bold">.خیلی ساده ‌تر از همیشه می‌شه</h1>
    <h1 className="text-2xl font-bold">ما طراحی شده تا کسب‌وکار تو رو منظم‌ تر، سریع ‌تر و حرفه‌ای ‌تر کنه؛ CRM🔹</h1>
    <h1 className="text-2xl font-bold">.بدون نیاز به پیچیدگی یا آموزش طولانی</h1>
    <h1 className="text-2xl font-bold">از همین الان می‌تونی حساب رایگان بسازی، امکانات رو ببینی و با چند کلیک🔹</h1>
    <h1 className="text-2xl font-bold">.ساده شروع کنی</h1>
    <h1 className="text-2xl font-bold">.برای شروع، فقط دکمه زیر رو بزن یا از راهنمای قدم‌به‌قدم ما کمک بگیر</h1>
    <HeroButtons />
  </div>
);

const HeroButtons = () => (
  <div className="flex flex-end gap-2 w-full mt-10">
    <Link href="/services">
      <Button variant="bold" className="bg-chart-6 shadow-xl">
        شروع کنید
      </Button>
    </Link>
    <Link href="/guide">
      <Button variant="bold" className="bg-secondary shadow-xl">
        راهنمای استفاده
      </Button>
    </Link>
  </div>
);

export default HeroSection;
