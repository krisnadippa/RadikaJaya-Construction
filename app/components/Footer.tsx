'use client';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-gray-400 py-12 border-t border-zinc-800">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white block mb-4">
                            RADIKA<span className="text-orange-500">JAYA</span>
                        </Link>
                        <p className="text-sm max-w-sm mb-6">
                            Constructing excellence with industrial precision. We are dedicated to delivering high-quality residential and commercial projects that stand the test of time.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-orange-500 transition-colors">Services</Link></li>
                            <li><Link href="#projects" className="hover:text-orange-500 transition-colors">Projects</Link></li>
                            <li><Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Socials / Contact */}
                    <div>
                         <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Connect</h4>
                         <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Instagram</a></li>
                             <li><a href="#" className="hover:text-orange-500 transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Radika Jaya Construction. All rights reserved.</p>
                     <p>Made with <span className="text-orange-500">♥</span> by CREATIFIN</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
