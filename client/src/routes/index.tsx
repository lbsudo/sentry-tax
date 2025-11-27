import { Link } from '@tanstack/react-router'
import Office from '/images/OfficeTeam.jpg'
import Carousel from "@/components/homepage/Carousel.tsx";
import Certs from "@/components/homepage/Certs.tsx";
import Portals from "@/components/homepage/Portals.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/')({
    component: Index,
})

export default function Index() {
    return (
        <>
            <Carousel
                images={[
                    { src: "/images/tax-form-2.jpg", caption: "Expert Tax Planning for Individuals & Businesses" },
                    { src: "/images/growth-2.jpg", caption: "Professional Accounting Services You Can Trust" },
                    { src: "/images/cash.jpg", caption: "Real Support. Real People. Real Results." },
                ]}
            />

            {/* Office Section */}
            <div
                className="
                    w-full flex flex-col lg:flex-row
                    items-center lg:items-stretch justify-center gap-0
                "
            >
                {/* Office Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={Office}
                        alt="Office team working"
                        className="
                            w-full h-full object-cover rounded-none
                            shadow-[0_4px_30px_rgba(0,0,0,0.25)]
                            border-b border-white/10 lg:border-b-0 lg:border-r border-white/10
                            transition-transform duration-500 hover:scale-[1.01]
                        "
                    />
                </div>

                {/* Intro Text */}
                <div
                    className="
                        w-full lg:w-1/2
                        flex flex-col justify-center
                        text-center lg:text-left
                        p-6 md:p-12
                        bg-white/5 backdrop-blur-md
                        border-t border-white/10 lg:border-t-0 lg:border-l border-white/10
                        shadow-xl
                        animate-[fadeIn_0.6s_ease-out]
                    "
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Your Trusted Financial & Tax Professionals
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        Looking for high-quality financial and tax advice at a reasonable price?
                        Welcome to <span className="text-[#3DA02C] font-semibold">Sentry Accounting & Income Tax Planning Inc.</span>,
                        offering accounting, taxation, and small business consulting services at affordable fees.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                        We're flexible. We're friendly. And above all — we listen.
                        Call us for a complimentary, no-cost, no-obligation initial consultation.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                        Our website details a full range of services, helpful resources,
                        contact information, and a company profile — so click around and stay awhile!
                    </p>
                </div>
            </div>

            {/* 🔥 Full CTA Section */}
            <section
                className="
                    w-full py-20 mt-20
                    bg-gradient-to-b from-[#111] to-[#0d0d0d]
                    border-y border-white/10
                "
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Ready to Get Started?
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                        Your first one-hour consultation is absolutely FREE.
                        Let us help you take control of your financial future.
                    </p>

                    <Link
                        to="/contact"
                        className="
                            group relative inline-block px-10 py-4
                            text-xl font-semibold text-white
                            rounded-xl overflow-hidden
                            bg-[#27651c]
                            shadow-[0_0_20px_rgba(39,101,28,0.6)]
                            hover:bg-[#1f5317]
                            transition-all duration-300
                        "
                    >
                        {/* Shine Animation */}
                        <span
                            className="
                                absolute inset-0 -translate-x-full
                                bg-gradient-to-r from-transparent via-white/30 to-transparent
                                group-hover:translate-x-full
                                transition-transform duration-700
                            "
                        />
                        Schedule Your Free Consultation
                    </Link>
                </div>
            </section>

            {/* Portals Section */}
            <Portals />

            {/* Certifications */}
            <Certs />

            <br />
        </>
    )
}
