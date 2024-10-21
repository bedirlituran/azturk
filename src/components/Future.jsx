"use client"
import React, { useState } from 'react';

const Future = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 dark:bg-black ">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 dark:text-white">
        <div className="text-center dark:text-white">
            <h2 className="text-3xl font-bold leading-tight dark:text-white text-gray-900 sm:text-4xl xl:text-5xl font-pj">Hər addımda keyfiyyətli və etibarlı xidmət</h2>
            <p className="mt-4 text-base leading-7 dark:text-white text-gray-600 sm:mt-8 font-pj">Azturk.net ilə internet və televiziya təcrübənizi yüksəldin</p>
        </div>

        <div className="grid dark:text-white grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14 bg-indigo-500 dark:text-white">
                <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-white font-pj">Daimi Dəstək</h3>
                <p className="mt-5 text-base text-white font-pj">Azturk.net müştəri xidmətləri hər zaman sizə dəstək verir. Bizimlə əlaqə saxlayın, çətinlikləri həll edin.</p>
            </div>

            <div className=" dark:text-white md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <svg className="mx-auto dark:text-white"  width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 27H19V45H27V27Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 37H1V45H9V37Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 17H37V45H45V17Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 17L15 7L23 15L37 1" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 1H37V10" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 dark:text-white font-pj">Sürətli Satış</h3>
                <p className="mt-5 text-base text-gray-600 font-pj dark:text-white">Ən son texnologiyalar ilə təchiz olunmuş xidmətimizdən faydalanın. Azturk.net ilə onlayn alış-verişinizi sürətləndirin.</p>
            </div>

            <div className=" dark:text-white md:p-8 lg:p-14 md:border-l md:border-gray-200 bg-indigo-500">
                <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41 1H1V41H41V1Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 7H7V20H18V7Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 26H7V35H18V26Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35 7H24V35H35V7Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-white font-pj">Tez Qoşulma</h3>
                <p className="mt-5 text-base text-white font-pj">Azturk.net-in sadə qoşulma prosedurları ilə internet və TV xidmətlərindən tez bir zamanda istifadə edin.</p>
            </div>

            <div className="md:p-8 dark:text-white  lg:p-14 md:border-t md:border-gray-200">
                <svg className="mx-auto dark:text-white" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                        fill="#D4D4D8"
                    />
                    <path d="M9 9H33" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 17H33" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 25H13V31H29V25H41" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl dark:text-white font-bold text-gray-900 font-pj">Məhsul Keyfiyyəti</h3>
                <p className="mt-5 text-base dark:text-white text-gray-600 font-pj">İnternet və televiziya sahəsində keyfiyyətli məhsullar təqdim edirik. Hər zaman ən yaxşısı üçün buradayıq.</p>
            </div>

            <div className="md:p-8 dark:text-white lg:p-14 md:border-l md:border-gray-200 md:border-t bg-indigo-500">
                <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15H27V27H15V15Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 1C10.5066 1 1 10.5066 1 21H21V1Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 41C31.4934 41 41 31.4934 41 21H21V41Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-white font-pj ">Yeniliklər</h3>
                <p className="mt-5 text-base text-whit font-pj">Azturk.net daim yenilənir. Texnologiyaya və xidmətlərə uyğun innovativ həllərlə sizə xidmət edirik.</p>
            </div>

            <div className="md:p-8 dark:text-white lg:p-14 md:border-l md:border-gray-200 md:border-t">
                <svg className="mx-auto dark:text-white" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43 3L23 22.8284L16 15.8284L1 30" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M33 3H43V13" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 41H45" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 dark:text-white text-xl font-bold text-gray-900 font-pj">Əhatə dairəsi</h3>
                <p className="mt-5 dark:text-white text-base text-gray-600 font-pj">Şəhərinizdə ən geniş əhatə dairəsinə sahib internet və televiziya xidməti təqdim edirik. Hər zaman bağlı qalın!</p>
            </div>
        </div>
    </div>
</section>
    )
}

export default Future;
