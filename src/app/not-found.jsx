'use client';

import React from 'react';
import { House } from 'lucide-react';
import {
    motion,
    useMotionValue,
    useTransform,
} from 'framer-motion';
import Link from 'next/link';

export default function Page() {
    // Mouse-based tilt values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            className="relative min-h-screen overflow-hidden flex items-center justify-center text-white bg-slate-900 contrast-145"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 from-violet-400/10 via-cyan-800/10 to-red-300/10 contrast-145" />

            {/* Card */}
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-xl text-center p-12 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.06)]"
            >
                {/* 404 Letters */}
                <div className="flex justify-center gap-4 mb-4 perspective-[1000px]">
                    {['4', '0', '4'].map((digit, index) => (
                        <motion.span
                            key={index}
                            whileHover={{
                                y: -20,
                                scale: 1.2,
                                textShadow: '0 0 25px rgba(34,211,238,0.8)',
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 cursor-pointer"
                        >
                            {digit}
                        </motion.span>
                    ))}
                </div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-2xl font-semibold mb-3"
                >
                    Page Not Found
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 mb-8"
                >
                    The page you are looking for doesn’t exist or has been moved.
                </motion.p>

                {/* Button */}
                <Link href="/">
                    <motion.button
                        whileHover={{
                            scale: 1.08,
                            boxShadow: '0 0 18px rgba(34,211,238,0.6)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-3 rounded-full font-semibold tracking-wide bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 "
                    >
                       <div className='flex gap-2 items-center justify-center '>
                       <House /> Go Home
                       </div>
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    );
}
