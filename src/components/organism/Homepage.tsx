'use client'

import Image from "next/image";
import Link from "next/link";
import { greetType } from "@/constants/constants";
import {
    LinkedIn,
    GitHub,
    Instagram
} from '@mui/icons-material';
import rajan from "image/rajan.png"
import { useState, useEffect } from "react";

export default function Homepage() {
    const [greet, setGreet] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setGreet((prev) => (prev + 1) % greetType.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex justify-between max-md:flex-col-reverse bg-black px-10">
            <div>
                <h1 className={`text-white font-semibold pt-20 pb-6`}>
                    {greetType[greet]}, I&apos;m<br /><span className="text-[#e86830]">Rajan Singh</span>,<br />
                    a front-end web developer
                </h1>
                <h5 className="text-white font-semibold pb-10">
                    A code architect for the web, transforming ideas into seamless web experiences
                </h5>
                <div className="flex justify-center gap-10">
                    <Link target="#" href={'https://www.instagram.com/rajan._.singh45/?igsh=MWR2YjQxNWl4Nzh1Zw%3D%3D'} className="rounded-full bg-[#e86830] p-1 flex items-center justify-center relative w-12 h-12">
                        <Instagram className="landscape:text-[2rem] m-1 z-10 hover:text-[#000000]" />
                        <span className="w-full h-full animate-ping absolute top-0 right-0 bg-[#e86830] opacity-50 rounded-full" />
                    </Link>
                    <Link target="#" href={'https://www.linkedin.com/in/rajan-singh-275608219/'} className="rounded-full bg-[#e86830] p-1 flex items-center justify-center relative w-12 h-12">
                        <LinkedIn className="landscape:text-[2rem] m-1 z-10 hover:text-[#000000]" />
                        <span className="w-full h-full animate-ping absolute top-0 right-0 bg-[#e86830] opacity-50 rounded-full" />
                    </Link>
                    <Link target="#" href={'https://github.com/Rajansinghs'} className="rounded-full bg-[#e86830] p-1 flex items-center justify-center relative w-12 h-12">
                        <GitHub className="landscape:text-[2rem] m-1 z-10 hover:text-[#000000]" />
                        <span className="w-full h-full animate-ping absolute top-0 right-0 bg-[#e86830] opacity-50 rounded-full" />
                    </Link>
                </div>
                <button className="text-white bg-[#e86830] px-5 rounded-full max-lg:px-3">
                    <h6 className="py-2">Let&apos;s Talk</h6>
                </button>
            </div>
            <div className="text-end max-lg:flex max-lg:justify-center">
                <Image
                    src={rajan}
                    alt='rightArrow'
                    className='rajan w-auto h-full'
                />
            </div>
            {/* <div className="fixed bottom-28 right-6 z-50 w-20 h-20 rounded-full bg-[#e86830]">
                <button
                    className="flex justify-center items-center w-20 h-20 rounded-full bg-[#e86830]"
                >
                    <BorderColorIcon className='text-4xl text-white' />
                </button>
            </div> */}
        </div>
    );
}
