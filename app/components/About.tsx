'use client';

import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden shadow-2xl group">
                         <div className="absolute inset-0 bg-orange-600/20 z-10 group-hover:bg-transparent transition-all duration-300"></div>
                        <Image
                            src="/images/rumah6.jpg" // Using another provided image
                            alt="About Radika Jaya Construction"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center">
                        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">
                            Who We Are
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Building Trust with Every Project
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Radika Jaya Construction is a premier construction firm dedicated to transforming visions into reality. With a strong foundation in industrial design and engineering excellence, we deliver projects that stand the test of time.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Our team of experienced professionals is committed to quality, safety, and innovation. Whether it's residential, commercial, or industrial construction, we approach every project with the same level of precision and passion.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-orange-500 pl-4">
                                <h3 className="text-xl font-bold text-white mb-1">10+ Years</h3>
                                <p className="text-gray-400 text-sm">Experience</p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-4">
                                <h3 className="text-xl font-bold text-white mb-1">50+ Projects</h3>
                                <p className="text-gray-400 text-sm">Completed</p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-4">
                                <h3 className="text-xl font-bold text-white mb-1">100% Client</h3>
                                <p className="text-gray-400 text-sm">Satisfaction</p>
                            </div>
                             <div className="border-l-4 border-orange-500 pl-4">
                                <h3 className="text-xl font-bold text-white mb-1">Expert Team</h3>
                                <p className="text-gray-400 text-sm">Dedicated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
