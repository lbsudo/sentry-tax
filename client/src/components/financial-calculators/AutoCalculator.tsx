import { useState } from "react";

export default function AutoCalculator() {
    const [isModuleOpen, setIsModuleOpen] = useState(false);

    return (
        <>
            {/* MAIN CARD */}
            <div
                className="
          max-w-4xl mx-auto my-10
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-2xl p-6 sm:p-8
          shadow-[0_8px_30px_rgba(0,0,0,0.4)]
          transition-all duration-500
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)]
        "
            >
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                    Auto Calculator
                </h2>

                <div className="flex flex-col lg:flex-row items-start gap-8">

                    {/* BUTTON */}
                    <button
                        onClick={() => setIsModuleOpen(true)}
                        className="
              px-6 py-3 rounded-lg text-lg font-medium
              border border-[#27651c]/60
              text-white
              hover:bg-[#27651c] hover:text-white
              shadow-[0_0_15px_rgba(255,255,255,0.4)]
              hover:shadow-[0_0_20px_rgba(39,101,28,0.7)]
              transition-all duration-300
              w-full lg:w-auto
            "
                    >
                        Run Auto Calculator
                    </button>

                    {/* Auto Calculator Options */}
                    <div className="text-gray-300 text-lg">
                        <ul className="space-y-2 list-disc ml-5">
                            <li>Should I finance or pay cash?</li>
                            <li>How much will my payments be?</li>
                            <li>Should I purchase or lease?</li>
                            <li>How much should I put down?</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* MODAL OVERLAY */}
            {isModuleOpen && (
                <div
                    className="
            fixed inset-0 z-50
            bg-black/70 backdrop-blur-sm
            flex justify-center items-center p-4
            animate-[fadeIn_0.3s_ease-out]
          "
                    onClick={() => setIsModuleOpen(false)}
                >

                    {/* MODAL */}
                    <div
                        className="
              bg-[#0d0d0d] text-white rounded-xl
              border border-white/10
              shadow-[0_0_40px_rgba(0,0,0,0.6)]
              w-full max-w-4xl h-[85vh]
              flex flex-col overflow-hidden
              transform transition-all duration-300
              scale-100 animate-[scaleFadeIn_0.25s_ease-out]
            "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div
                            className="
                bg-[#27651c]
                px-5 py-4 text-xl font-semibold
                flex justify-between items-center
                shadow-[0_4px_20px_rgba(39,101,28,0.5)]
              "
                        >
                            <span>Auto Calculator</span>
                            <button
                                onClick={() => setIsModuleOpen(false)}
                                className="text-white text-3xl leading-none hover:opacity-70 transition"
                            >
                                ×
                            </button>
                        </div>

                        {/* iFrame */}
                        <iframe
                            src="https://www.calculator.net/auto-loan-calculator.html"
                            className="w-full h-full bg-white"
                            title="Auto Calculator"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
