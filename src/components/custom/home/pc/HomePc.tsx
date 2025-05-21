import HeroSection from "./Hero";
import CrmDefinitionSection from "./Definition";
import AdvantagesSection from "./Advantage";
import CtaSection from "./Cta";

const HomePc = () => {
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

export default HomePc;