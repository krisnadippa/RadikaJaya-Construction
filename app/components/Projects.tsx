'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectDetails {
    landArea: string;
    buildingArea: string;
    bedrooms: number;
    bathrooms: number;
    livingRoom: string;
    garage: string;
    description: string;
}

interface Project {
    src: string;
    title: string;
    category: string;
    details: ProjectDetails;
}

const projects: Project[] = [
    { 
        src: '/images/rumah1.jpeg', 
        title: 'Modern Residence', 
        category: 'Residential',
        details: {
            landArea: '200 m²',
            buildingArea: '250 m²',
            bedrooms: 4,
            bathrooms: 3,
            livingRoom: 'Open Plan',
            garage: '2 Cars',
            description: 'A stunning modern residence designed for comfort and style, featuring high ceilings and premium finishes throughout.'
        }
    },
    { 
        src: '/images/rumah2.webp', 
        title: 'Luxury Villa', 
        category: 'Residential',
        details: {
            landArea: '500 m²',
            buildingArea: '350 m²',
            bedrooms: 5,
            bathrooms: 5,
            livingRoom: 'Double Void',
            garage: '3 Cars',
            description: 'An expansive luxury villa with a private pool, landscaped gardens, and state-of-the-art smart home integration.'
        }
    },
    { 
        src: '/images/rumah3.jpg', 
        title: 'Urban Living', 
        category: 'Apartment',
        details: {
            landArea: 'N/A',
            buildingArea: '120 m²',
            bedrooms: 2,
            bathrooms: 2,
            livingRoom: 'Modern Minimalist',
            garage: '1 Basement Slot',
            description: 'Compact yet luxurious urban apartment living with maximized space efficiency and city views.'
        }
    },
    { 
        src: '/images/rumah4.webp', 
        title: 'Minimalist Home', 
        category: 'Residential',
         details: {
            landArea: '120 m²',
            buildingArea: '90 m²',
            bedrooms: 3,
            bathrooms: 2,
            livingRoom: 'Cozy',
            garage: '1 Car',
            description: 'A perfect blend of function and form, this minimalist home offers a serene living environment.'
        }
    },
    { 
        src: '/images/rumah5.jpg', 
        title: 'Industrial Office', 
        category: 'Commercial',
         details: {
            landArea: '300 m²',
            buildingArea: '400 m²',
            bedrooms: 0,
            bathrooms: 4,
            livingRoom: 'Lobby & Lounge',
            garage: '10 Cars',
            description: 'A modern industrial office space designed to foster creativity and collaboration.'
        }
    },
    { 
        src: '/images/rumah6.jpg', 
        title: 'Family Estate', 
        category: 'Residential',
         details: {
            landArea: '600 m²',
            buildingArea: '450 m²',
            bedrooms: 6,
            bathrooms: 5,
            livingRoom: 'Grand Hall',
            garage: '4 Cars',
            description: 'A grand family estate built for generations, featuring classic architecture with modern amenities.'
        }
    },
    { 
        src: '/images/rumah7.jpg', 
        title: 'Cozy Retreat', 
        category: 'Renovation',
         details: {
            landArea: '150 m²',
            buildingArea: '100 m²',
            bedrooms: 2,
            bathrooms: 1,
            livingRoom: 'Rustic',
            garage: '1 Car',
            description: 'A charming renovation project that restored this cozy retreat to its former glory with a modern twist.'
        }
    },
    { 
        src: '/images/rumah8.jpg', 
        title: 'Executive Suite', 
        category: 'Interior',
         details: {
            landArea: 'N/A',
            buildingArea: '80 m²',
            bedrooms: 1,
            bathrooms: 1,
            livingRoom: 'Luxury Lounge',
            garage: 'Valet',
            description: 'Top-tier interior design for an executive suite, focusing on elegance and productivity.'
        }
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 bg-zinc-900 text-white relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">
                        Our Portfolio
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-sm h-64 md:h-80 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-orange-500 uppercase text-xs font-bold tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.category}
                                </p>
                                <span className="mt-4 text-xs tracking-wider border-b border-orange-500 text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    View Details
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up">
                    <div className="bg-zinc-800 rounded-sm overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button 
                            className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-orange-600 rounded-full p-2 transition-colors"
                            onClick={() => setSelectedProject(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                            <Image 
                                src={selectedProject.src} 
                                alt={selectedProject.title} 
                                fill 
                                className="object-cover"
                            />
                        </div>

                        {/* Details Side */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-auto">
                            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">
                                {selectedProject.category}
                            </h4>
                            <h3 className="text-3xl font-bold text-white mb-6">
                                {selectedProject.title}
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {selectedProject.details.description}
                            </p>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-1">Land Area</h5>
                                    <p className="text-white">{selectedProject.details.landArea}</p>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-1">Building Area</h5>
                                    <p className="text-white">{selectedProject.details.buildingArea}</p>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-1">Bedrooms</h5>
                                    <p className="text-white flex items-center gap-2">
                                         <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                        {selectedProject.details.bedrooms}
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-1">Bathrooms</h5>
                                    <p className="text-white flex items-center gap-2">
                                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                        {selectedProject.details.bathrooms}
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-1">Living Room</h5>
                                    <p className="text-white">{selectedProject.details.livingRoom}</p>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-1">Garage</h5>
                                    <p className="text-white">{selectedProject.details.garage}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
