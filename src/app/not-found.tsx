import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Notfound from "../../public/404.svg"
import Img from '@/components/custom/LazyLoadImg';
const NotFound = () => {
    return (
        <section className='bg-primary h-screen flex justify-between lg:justify-center items-center flex-col'>
            <div className='h-10'></div>
            <h1 className='text-2xl lg:text-5xl'>صفحه مورد نظر پیدا نشد</h1>
            <div className='h-10'></div>
            <Link href={'/'}>
                <Img
                    src={Notfound}
                    alt='NotFound'
                    width={1288}
                    height={655}
                />
            </Link>
            <div className='h-10'></div>
            <Link href={'/'}>
                <Button
                    className='border-2 border-black text-2xl bg-secondary'
                    variant={'bold'}
                >
                    بازگشت به خانه
                </Button>
            </Link>
            <div className='h-10'></div>
        </section>
    );
};

export default NotFound;