'use client';

import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;
        
        // Construct WhatsApp Message
        const phoneNumber = '6287762635300';
        const text = `Hello Radika Jaya Construction,%0A%0AMy name is ${name}.%0AEmail: ${email}%0A%0AI would like to inquire about: ${message}`;
        
        // Redirect to WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-zinc-800 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">
                            Get In Touch
                        </h4>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Ready to start your next project? Contact Radika Jaya Construction today for a consultation. We look forward to building your vision.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-zinc-900 p-3 rounded-full text-orange-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Phone / WhatsApp</h3>
                                    <p className="text-gray-400 hover:text-orange-500 transition-colors">
                                        <a href="https://wa.me/6287762635300" target="_blank" rel="noopener noreferrer">
                                            +62 877-6263-5300
                                        </a>
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="bg-zinc-900 p-3 rounded-full text-orange-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                                    <p className="text-gray-400">info@radikajaya.com</p>
                                </div>
                            </div>

                             <div className="flex items-start space-x-4">
                                <div className="bg-zinc-900 p-3 rounded-full text-orange-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                                    <p className="text-gray-400">Klungkung Bali, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-900 p-8 rounded-sm shadow-xl border-t-4 border-orange-500">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition-colors" 
                                    placeholder="Your Name" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition-colors" 
                                    placeholder="Your Email" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Message</label>
                                <textarea 
                                    id="message" 
                                    rows={4} 
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 transition-colors" 
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-sm uppercase tracking-widest transition-all">
                                Send Message via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
