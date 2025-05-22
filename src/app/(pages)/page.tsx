import HomeMobile from "@/components/custom/home/mobile/HomeMobile";
import HomePc from "@/components/custom/home/pc/HomePc";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="hidden lg:block">
        <HomePc/>
      </section>
      <section className="lg:hidden">
        <HomeMobile/>
      </section>
    </main>
  );
};

export default Home;
