import React from 'react';
import Img from '../LazyLoadImg';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-primary">
            <div className='h-5'></div>
            <div className='hidden  lg:container lg:mx-auto lg:px-0 px-2 lg:grid grid-cols-2'>
                <div>
                    <div className='w-full flex flex-col mb-10'>
                        <div className='grid grid-cols-2 w-full'>
                            <div className='flex flex-col items-center'>
                                <h1 className='w-fit text-3xl font-bold border-b-1 py-1 mb-2'>همراه کارفرما</h1>
                                <div className='flex gap-2'>
                                    <Img
                                        src="footer/enamad_icon_text_color_blue_1024 1.svg"
                                        alt="enamad"
                                        width={168}
                                        height={168}
                                    />
                                    <Img
                                        src="footer/samandehi 1.svg"
                                        alt="enamad"
                                        width={168}
                                        height={168}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2'>
                    <div></div>
                    <div className='flex flex-col items-center gap-5 text-2xl'>
                        <div className='flex flex-col items-center'>
                            <p className='text-end'>ارتباط با ما</p>
                            <p className='text-end'>حریم خصوصی و خط مشی</p>
                            <p className='text-end'>سوالات متداول</p>
                            <p className='text-end'>پشتیبانی</p>
                        </div>
                        <div className='flex gap-2 mt-2 '>
                            <Img
                                src="footer/media/gmail-svgrepo-com 1.svg"
                                alt="gmail"
                                width={50}
                                height={50}
                            />
                            <Img
                                src="footer/media/social-whats-app-svgrepo-com 1.svg"
                                alt="whatsapp"
                                width={50}
                                height={50}
                            />
                            <Img
                                src="footer/media/telephone-svgrepo-com 1.svg"
                                alt="telephone"
                                width={50}
                                height={50}
                            />
                            <Img
                                src="footer/media/telegram-svgrepo-com 1.svg"
                                alt="telegram"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center text-center'>
                <p>UI Designer: Sajooli | Frontend Engineer: Yazdan | Backend Engineer: Javad</p>
            </div>
        </footer>
    );
};

export default Footer;