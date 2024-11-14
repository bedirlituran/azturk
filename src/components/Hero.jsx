// CarouselContent.jsx
"use client";
import React from 'react';

const Hero = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form gönderim mantığını buraya ekleyin
        console.log("Form submitted");
    };

    return (
        <section className="relative py-12 overflow-hidden bg-slate-600 sm:pb-16 lg:pb-20 xl:pb-24">
            <div className="px-4 mx-auto max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                    <div>
                        <h1 className="text-4xl font-normal text-gray-400  sm:text-5xl lg:text-6xl xl:text-7xl">Azturk ilə<br></br> Dünyaya Bağlan!</h1>
                        <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                            Azturk-ə qoşul, internet və televiziya xidmətlərindən faydalan, sürətli və keyfiyyətli bağlantı ilə sevdiklərinlə birgə ol! Limitsiz internet və geniş kanal seçimi ilə dünyaya daha yaxın ol. Azturk-un müştəri dəstəyi ilə hər zaman texniki problemləriniz dərhal həll ediləcək. Daha rahat və xoşbəxt bir həyat üçün Azturk-un üstün xidmətlərindən yararlan!
                        </p>

                        <form onSubmit={handleSubmit} className="relative mt-8 rounded-full sm:mt-12">
                            <div className="relative">
                                <div className="absolute rounded-full -inset-px bg-cyan-600"></div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                                        <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Emailinizi daxil edin"
                                        className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-slate-600 border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                                    />
                                </div>
                            </div>
                            <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                                <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">
                                    Axtar
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 sm:mt-12">
                            <p className="text-lg font-normal text-white">50K+ istifadəçinin güvəndiyi xidmət</p>
                            <div className="flex items-center mt-3">
                                {Array(5).fill(0).map((_, index) => (
                                    <svg key={index} className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.8586 4.71248C11.1745 4.0995 12.8255 4.0995 13.1414 4.71248L14.2857 7.33331L17.2493 8.11748C18.0006 8.35789 18.2007 9.36353 17.6158 10.1429L16.3967 11.4999L16.8634 14.4769C17.0593 15.1856 16.4757 15.7584 15.8545 15.4308L13.9983 14.4554L12.1421 15.4308C11.5208 15.7584 10.9373 15.1856 11.1331 14.4769L11.5999 11.4999L10.3808 10.1429C9.79586 9.36353 9.99593 8.35789 10.7472 8.11748L13.7109 7.33331L10.8586 4.71248Z"
                                            fill="#FBBF24"
                                        />
                                    </svg>
                                ))}
                                <span className="ml-3 text-base font-medium text-white">4.8</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 transform -translate-x-1/2 -translate-y-1/2 bgpurple-500 rounded-3xl blur-3xl"></div>
                        <div className="relative z-10">
                        <img src="/image/hero2.png" alt="Big Image" className="relative z-10 w-full mb-28 h-full rounded-xl shadow-lg" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
