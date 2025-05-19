import React from 'react';
import Container from '@/components/custom/Container';
import Img from '@/components/custom/LazyLoadImg';

const contacts = [
    {
        icon: "footer/media/telephone-svgrepo-com 1.svg",
        title: "تلفن پشتیبانی",
        desc: "هر روز هفته، از ساعت ۹ صبح تا ۹ عصر",
        link: "tel:051-44444444",
        display: "051-44444444",
    },
    {
        icon: "footer/media/telegram-svgrepo-com 1.svg",
        title: "تلگرام",
        desc: "پاسخ سریع در کانال یا ارتباط مستقیم با پشتیبانی",
        link: "https://t.me/sajooloi0",
        display: "@sajooloi0",
    },
    {
        icon: "footer/media/social-whats-app-svgrepo-com 1.svg",
        title: "واتساپ پشتیبانی",
        desc: "پاسخ سریع پشتیبانی در واتساپ",
        link: "https://wa.me/989123456789",
        display: "ارسال پیام",
    },
    {
        icon: "footer/media/gmail-svgrepo-com 1.svg",
        title: "ایمیل",
        desc: "برای انتقادات، پیشنهادات و ارسال فایل",
        link: "mailto:support@gmail.com",
        display: "support@gmail.com",
    },
];

const page = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center bg-gradient-to-t from-amber-100 via-white to-amber-100 text-right'>
            <Container>
                <div className='lg:h-10 h-5' />
                <div className="max-w-2xl mx-auto">
                    <h1 className='text-center lg:text-2xl text-base font-bold mb-8 leading-relaxed'>
                        ما همیشه کنار شما هستیم، چون پشتیبانی واقعی فقط یک شعار نیست.<br />
                        اگه سوالی دارید، به مشکلی برخوردید، یا فقط می‌خواید یه «سلام» بهمون بدید، از راه‌های زیر می‌تونید با ما در تماس باشید.<br />
                        تیم پشتیبانی همراه کارفرما همیشه آماده‌ی پاسخ‌گویی به شماست.
                    </h1>
                    <div className='grid grid-cols-1 gap-6 pb-4 mb-2 border-b-1 border-black '>
                        {contacts.map((c, idx) => (
                            <div key={idx} className='flex justify-between items-center bg-white rounded-lg shadow p-4'>
                                <div className='flex flex-row w-12 h-12 items-center justify-center bg-black rounded-lg mr-4'>
                                    <Img src={c.icon} alt={c.title} width={40} height={40} />
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <span className='font-semibold text-lg'>{c.title}</span>
                                    <span className='text-gray-500 text-sm'>{c.desc}</span>
                                    <a href={c.link} className='text-blue-600 hover:underline mt-1 text-sm'>
                                        {c.display}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className='text-center lg:text-2xl text-base font-bold mb-8 leading-relaxed'>
                        منتظر شنیدن صدای شما هستیم :) هر نظر، پیشنهاد یا انتقاد شما برامون ارزشمنده. ما با گوش دادن به شما رشد می‌کنیم، چون شما دلیل بودن ما هستید.
                    </h1>
                </div>
            </Container>
        </div>
    );
};

export default page;
