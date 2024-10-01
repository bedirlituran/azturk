"use client";
import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Tez-tez müraciət olunan suallar
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {questions.map((question, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">{question.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    activeIndex === index ? 'rotate-0' : 'rotate-180'
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                style={{ display: activeIndex === index ? 'block' : 'none' }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 textbase mt-9">
          Əlavə suallarınız var?{' '}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Bizimlə əlaqəyə keçin
          </span>
        </p>
      </div>
    </section>
  );
};

const questions = [
  {
    question: 'Azturk şirkətinə necə qoşula bilərəm?',
    answer:
      "Bunun üçün sadəcə sağ alt küncdə WHATSAPP iconuna toxunmaq kifayət edər.",
  },
  {
    question: 'Aylıq xidmət haqqını necə ödəyə bilərəm?',
    answer:
      'Xidmət haqqını sizə rahat olan üsulla ödəmək mümkündür: saytımız vasitəsilə onlayn ödəniş; ödəmə terminalları vasitəsilə ödəniş; Fpay tətbiqi ilə ödəniş.',
  },
  {
    question: 'Qoşulma edilən zaman hansısa router vəya tv üçün avadanlıq almalıyam?',
    answer:
      'Roter pulsuz verilir.Tv üçün isə əgər Televizorunuz smartdırsa vəya andoroid tv boxunuz varsa xeyir.',
  },
  {
    question: 'Wifi şifrəmi unutmuşam və ya routeri reset etmişəm. Bunun üçün nə etməliyəm?',
    answer:
      'Bunun üçün texniki dəstəyimiz ilə mütləq əlaqə saxlamalısıniz və ya sadəcə WHATSAPP düyməsinə toxunaraq 24 saat xidmət göstərən xəttimiz ilə əlaqə saxlaya bilərsiniz.',
  },
];

export default Accordion;
