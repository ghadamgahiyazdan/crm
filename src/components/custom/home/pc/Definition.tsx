import Container from "../../Container";
import Img from "../../LazyLoadImg";

const CrmDefinitionSection = () => (
  <section className="border-b border-dashed border-black bg-gradient-to-t from-white via-amber-100 to-white">
    <Container>
      <div className="grid grid-cols-3 h-fit">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <Img
            src="section2.svg"
            alt="hamrah crm"
            width={500}
            height={500}
          />
        </div>
        <CrmDefinitionContent />
      </div>
    </Container>
    <div className="h-20" />
  </section>
);

const CrmDefinitionContent = () => (
  <div className="col-span-2 flex flex-col items-end gap-5 mt-15">
    <h1 className="relative text-6xl text-secondary font-bold [--text-stroke:3px] [--text-stroke-color:black] [paint-order:stroke_fill] [-webkit-text-stroke:var(--text-stroke)_var(--text-stroke-color)]">
      سی آر اِم چیست؟ (CRM)
    </h1>
    <div className="flex flex-col items-end gap-10 mt-10">
      <p className="text-2xl font-bold">سی ار ام مجموعه ای از ابزارهاست که پیاده سازی استراتژی های</p>
      <p className="text-2xl font-bold">بازاریابی، فروش و خدمات پس از فروش و… با محوریت مشتری ممکن می </p>
      <p className="text-2xl font-bold">سازد. تمامی اقدامات صورت گرفته در سازمان باید با هدف ارائه ی راه حل </p>
      <p className="text-2xl font-bold">موثر و حقیقی مشکلات مشتری ها، در کوتاه ترین زمان ممکن، و با بهترین </p>
      <p className="text-2xl font-bold">.نوع برخورد باشد</p>
      <p className="text-2xl font-bold">با استفاده از نرم افزار همراه کارفرما بخش قابل توجهی از فرآیند حفظ مشتری را می</p>
      <p className="text-2xl font-bold">.توانید به صورت خودکار انجام دهید</p>
    </div>
  </div>
);

export default CrmDefinitionSection;