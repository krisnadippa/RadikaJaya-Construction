'use client';

import Image from 'next/image';

const OwnerProfile = () => {
    return (
        <section id="owner" className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden shadow-2xl group order-2 md:order-1">
                        <Image
                            src="/images/profile (2).png" 
                            alt="Owner of Radika Jaya Construction"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center order-1 md:order-2">
                        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">
                            Leadership
                        </h4>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Meet the Founder
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                            INAANA
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            With over 15 years of experience in the construction industry, INAANA founded Radika Jaya Construction with a vision to build not just structures, but lasting relationships. His passion for industrial precision and modern aesthetics drives the company's commitment to excellence.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            "We believe that every project is a testament to our dedication. Our goal is to exceed expectations and deliver spaces that inspire."
                        </p>
                        
                        <div className="flex items-center space-x-4">
                            <div className="h-1 w-12 bg-orange-500"></div>
                            <span className="text-white font-bold uppercase tracking-wider text-sm">CEO & Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OwnerProfile;
