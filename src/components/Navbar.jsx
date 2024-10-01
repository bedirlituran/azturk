// Navbar.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Next.js Link bileşenini import et

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <header className="py-4 bg-slate-600 sm:py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between p-4 border-b-2 border-gray-100">
                    <div className="shrink-0">
                        <Link href="/" title="" className='text-white text-3xl font-bold font-serif'>
                            AZTURK.NET
                        </Link>
                    </div>

                    <div className="flex md:hidden">
                        <button 
                            type="button" 
                            className="text-white" 
                            onClick={handleToggle} 
                            aria-expanded={expanded}
                            aria-label="Toggle navigation"
                        >
                            {expanded ? (
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
                        {[
                            { name: 'Ana Səhifə', href: '/' },
                            { name: 'Haqqimizda', href: '/Haqqimizda' },
                            { name: 'Tv Kanallar', href: '/ChannelList' },
                            { name: 'Əlaqə', href: '/Elaqe' },
                            { name: 'Ödəniş et', href: 'https://fpay.az/guest/payments/new-payment/category/undefined/merchant/6143'}
                                ]
                        .map(item => (
                            <Link key={item.name} href={item.href} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="relative hidden md:inline-flex group">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                        <Link href="/#" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-slate-600 border border-transparent rounded-full">
                            Bizimlə əlaqə
                        </Link>
                    </div>
                </div>

                <nav className={`flex-col pt-8 pb-4 space-y-6 ${expanded ? 'flex' : 'hidden'}`}>
                    {[
                        { name: 'Ana Səhifə', href: '/' },
                        { name: 'Haqqimizda', href: '/Haqqimizda' },
                        { name: 'Tv Kanallar', href: '/ChannelList' },
                        { name: 'Əlaqə', href: '/Elaqe' },
                        { name: 'Ödəniş et', href: 'https://fpay.az/guest/payments/new-payment/category/undefined/merchant/6143' }
                    ].map(item => (
                        <Link key={item.name} href={item.href} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                            {item.name}
                        </Link>
                    ))}
                    <div className="relative inline-flex items-center justify-center group">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                        <Link href="/#" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-slate-600 border border-transparent rounded-full">
                            Bizimlə əlaqə
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

