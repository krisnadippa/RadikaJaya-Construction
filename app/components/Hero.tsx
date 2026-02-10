'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                 <Image
                    src="/images/rumah5.jpg" // Using one of the provided images
                    alt="Radika Jaya Construction Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <h2 className="text-orange-500 font-bold tracking-widest text-sm md:text-base mb-4 uppercase animate-fade-in-up">
                    Welcome to Radika Jaya Construction
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                    Building Visions with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                        Industrial Precision
                    </span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
                    We specialize in delivering high-quality construction services with a focus on durability, aesthetics, and modern industrial design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                    <Link
                        href="#projects"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
