import HeroSection from '@/components/custom/home/Hero';
import CrmDefinitionSection from '@/components/custom/home/Definition';
import AdvantagesSection from '@/components/custom/home/Advantage';
import CtaSection from '@/components/custom/home/Cta';

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Section 1*/}
      <HeroSection />

      {/* Section2 */}
      <CrmDefinitionSection />

      {/* Section3 */}
      <AdvantagesSection />

      {/* Section4 */}
      <CtaSection />
      <div className="h-20 flex items-center justify-center">
        
      </div>
    </main>
  );
};

export default Home;
