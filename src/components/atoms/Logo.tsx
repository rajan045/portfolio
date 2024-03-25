import Image from "next/image";
import { Frijole } from 'next/font/google'

const frijole = Frijole({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

import stars from "icon/stars.gif"

export default function Logo() {
    return (
        <div className="flex items-center hover:cursor-pointer animate-bounce hover:animate-none">
            <Image
                src={stars}
                alt='rightArrow'
                className='w-16 max-lg:w-12 max-xs:w-8 h-16 max-lg:h-12 max-xs:h-8 rounded-md mr-4'
            />
            <p className={`text-white ${frijole.className} text-[2.4rem] max-lg:text-[2rem] max-xs:text-[1.2rem] whitespace-nowrap `}>
                Rajan <span>Singh</span>
            </p>
        </div>
    );
}
