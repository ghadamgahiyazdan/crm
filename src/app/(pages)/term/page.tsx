import Container from "@/components/custom/Container";
import React from "react";

const TermsPage = () => {
    return (
        <div className="rtl text-center text-gray-800 font-medium bg-primary">
                  <div className="h-20" />
            <Container>
                <h1 className="text-2xl font-bold mb-6 text-center">شرایط استفاده از همراه کارفرما</h1>
                <p className="mb-6">
                    به سامانه همراه کارفرما خوش آمدید. با استفاده از این سامانه شما با شرایط زیر موافقت می‌کنید، لطفاً با دقت شرایط را مطالعه نمایید.
                </p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-3">1. شرایط</h2>
                        <p>
                            با استفاده از سامانه شما به صورت کامل و بدون قید و شرط با این شرایط موافقت می‌کنید.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">2. استفاده مجاز</h2>
                        <p>
                            شما متعهد می‌شوید مطابق با قوانین کشور و مقررات جاری از سامانه استفاده کنید. هرگونه تخلف و سوء استفاده پیگرد قانونی دارد و ممکن است باعث تعلیق حساب کاربری شما شود.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">3. محتوای محیط</h2>
                        <p>
                            کلیه حقوق مادی و معنوی متعلق به شرکت بوده و بدون اجازه کتبی، استفاده یا انتشار آن‌ها ممنوع و پیگرد قانونی دارد.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">4. مدیریت حساب</h2>
                        <p>
                            در صورت تخلف از قوانین یا ایجاد اختلال در عملکرد سامانه، دسترسی شما می‌تواند به صورت موقت یا دائم مسدود شود.
                        </p>
                    </section>
                </div>

                <h1 className="text-2xl font-bold mt-10 mb-6">سیاست حفظ حریم خصوصی</h1>
                <p className="mb-6">
                    ما به حفظ حریم شخصی شما متعهد هستیم. اطلاعات شما با دقت پردازش شده و صرفاً برای ارائه خدمات بهتر استفاده می‌شود.
                </p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-3">1. جمع‌آوری اطلاعات</h2>
                        <p>
                            اطلاعاتی مانند نام، شماره تماس و مشخصات شما توسط سامانه جمع‌آوری می‌شود.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">2. استفاده از اطلاعات</h2>
                        <p>
                            این اطلاعات صرفاً برای موارد زیر استفاده می‌شود:
                        </p>
                        <ul className="list-disc pr-6 mt-2 space-y-1">
                            <li className="list-none">ارائه خدمات بهتر به شما</li>
                            <li className="list-none">بهبود کیفیت خدمات</li>
                            <li className="list-none">ارسال اطلاعیه‌های ضروری</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">3. حفظ و امنیت اطلاعات</h2>
                        <p>
                            اطلاعات شما در محیطی امن ذخیره شده و از روش‌های استاندارد و مناسب برای محافظت از آن‌ها استفاده می‌شود.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">4. اشتراک‌گذاری با اشخاص ثالث</h2>
                        <p>
                            اطلاعات شما صرفاً با رضایت شما یا در موارد قانونی می‌تواند با نهادهای ذی‌صلاح به اشتراک گذاشته شود.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">تغییرات شرایط</h2>
                        <p>
                            این شرایط ممکن است در آینده تغییر یابد. ادامه استفاده از سامانه به معنی پذیرش شرایط جدید خواهد بود.
                        </p>
                    </section>
                  <div className="h-20" />

                </div>

            </Container>
        </div>
    );
};

export default TermsPage;