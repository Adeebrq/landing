'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/logo.png';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}
const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer UI/UX designing & its development for both websites & web applications tailored to your business needs."
  },
  {
    id: 2,
    question: "How long does delivery take?",
    answer: "Project timelines vary based on complexity, but most websites take 2-8 weeks from start to launch."
  },
  {
    id: 3,
    question: "Can I get a refund?",
    answer: "We offer refunds as long as our dedicated team has not started work on your project."
  },
  {
    id: 4,
    question: "What if I don't like the design?",
    answer: "We include revision rounds in our process to ensure the design meets your expectations. Your satisfaction is our priority."
  },
  {
    id: 5,
    question: "How can I communicate with the team?",
    answer: "We communicate through your preferred channels - email, WhatsApp, or Telegram with 24/7 availability."
  },
  {
    id: 6,
    question: "What if I require a website delivered immediately?",
    answer: "We offer expedited delivery options for urgent projects. Contact us to discuss your timeline and we'll create a custom plan."
  }
];

export default function ChatFAQ() {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    setOpenIds(prev => 
      prev.includes(id) 
        ? prev.filter(openId => openId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="bg-[#0A0A0A] text-white py-20  pt-0 px-6 md:px-16 font-lt-cushion">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800/80 bg-black/40">
            <span className="w-2 h-2 rounded-full bg-[#3186ff]"></span>
            <span className="text-sm text-white/80">We’ve got answers</span>
          </div>
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-t from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our process, timelines, and support.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="space-y-3">
              {/* Question - Right Side */}
              <div className="flex justify-end items-start gap-3">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex items-center gap-3 max-w-[50%] group"
                >
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-black bg-gray-600 transition-all duration-200">
                    {openIds.includes(faq.id) ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>

                  <div className="rounded-2xl rounded-tr-sm px-5 py-3 shadow-md transition-all duration-200 border border-gray-800 bg-[#141414] group-hover:border-gray-700">
                    <p className="text-sm md:text-base text-left text-gray-100">
                      {faq.question}
                    </p>
                  </div>
                </button>

                <div className="w-8 h-8 rounded-full bg-[#0f0f0f] border border-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      WebkitMaskImage: "url('/user.svg')",
                      maskImage: "url('/user.svg')",
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: '90%',
                      maskSize: '90%',
                      background: 'linear-gradient(135deg, #1d1fbf, #2b5fbf)'
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Answer - Left Side (animated) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIds.includes(faq.id)
                    ? 'max-h-96 opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-2'
                }`}
              >
                <div className="flex justify-start items-start gap-3 pt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 overflow-hidden">
                    <Image src={logo} alt="Logo" width={20} height={20} className="w-5 h-5" />
                  </div>
                  
                  <div className="rounded-2xl rounded-tl-sm px-5 py-3 shadow-md max-w-[50%] border border-gray-800 bg-[#141414] text-gray-100">
                    <p className="text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
    