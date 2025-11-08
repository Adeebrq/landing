import Image from "next/image"
import logo from "@/public/logo.png"

export default function Footer() {
    return (
      <div className="bg-[#0A0A0A] border border-gray-900 rounded-3xl text-white flex items-center justify-center p-4 sm:p-8 font-lt-cushion">
        <div className="w-full max-w-7xl">
          {/* Main Footer Card */}
          <div className="bg-[#141414] border border-gray-900 rounded-2xl sm:rounded-3xl shadow-sm p-6 sm:p-8 lg:p-12 mb-4 sm:mb-12 lg:mb-8">
            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
              {/* Brand Section */}
              <div className="lg:max-w-2xl">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    <Image src={logo} alt="4mulate logo" width={34} height={34} className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <span className="text-xl sm:text-2xl font-semibold text-white">4mulate</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                We build modern, results-driven websites that merge creative design with powerful performance, helping brands stand out and convert visitors into results.
                </p>
              </div>

              {/* Navigation Links Row */}
              <div>
                <ul className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
                  <li>
                    <a href="#about" className="text-sm sm:text-base text-gray-400 hover:text-[#3186ff] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#process" className="text-sm sm:text-base text-gray-400 hover:text-[#3186ff] transition-colors">
                      Process
                    </a>
                  </li>
                  <li>
                    <a href="#offer" className="text-sm sm:text-base text-gray-400 hover:text-[#3186ff] transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-sm sm:text-base text-gray-400 hover:text-[#3186ff] transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-sm sm:text-base text-gray-400 hover:text-[#3186ff] transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm sm:text-base text-gray-400 hover:text-[#3186ff] transition-colors">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs sm:text-sm">© 2025 4mulate. All rights reserved</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
                {/* <a href="#" className="text-gray-500 hover:text-[#3186ff] text-xs sm:text-sm transition-colors underline">
                  Terms of Service
                </a> */}
                <a href="mailto:4mulate.dev@gmail.com" className="text-gray-500 hover:text-[#3186ff] text-xs sm:text-sm transition-colors underline break-all">
                  4mulate.dev@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Large Background Text */}
          <div className="text-[4rem] max-md:mb-20 text-center sm:text-[16rem] lg:text-[20rem] font-bold text-transparent bg-gradient-to-b from-[#141414] via-[#141414] to-[#0b0a0b] bg-clip-text leading-none select-none pointer-events-none overflow-hidden font-happy">
            4mulate
          </div>
        </div>
      </div>
    );
  }