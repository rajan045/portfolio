'use client'

import { useEffect, useState } from 'react';

export default function CursorCircle() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                className="absolute w-12 h-12 bg-[#ffffff] rounded-full pointer-events-none opacity-50"
                style={{ left: `${position.x - 4}px`, top: `${position.y - 4}px` }}
            ></div>
        </>
    );
};