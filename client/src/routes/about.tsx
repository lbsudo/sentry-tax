import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: AboutPage,
});

function AboutPage() {
    return (
        <div className="text-white px-4 md:px-8 py-16">

            {/* PAGE TITLE */}
            <div className="flex justify-center mb-10">
                <h1
                    className="
            text-4xl md:text-6xl font-bold tracking-tight text-center
            relative
            after:content-['']
            after:block
            after:w-24
            after:h-[3px]
            after:bg-[#27651c]
            after:mx-auto
            after:mt-4
            after:rounded-full
            after:shadow-[0_0_12px_#27651c]
          "
                >
                    About Us
                </h1>
            </div>

            {/* CONTENT CARD */}
            <div
                className="
          max-w-5xl mx-auto
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]
          p-6 md:p-12
          space-y-6
          animate-[fadeIn_0.6s_ease-out]
        "
            >
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    I formed my own accounting firm with a single principle in mind, to
                    provide the highest level of personalized client service possible.
                    Simply put, I care about each and every one of my clients. You will
                    always be served by me, ensuring full privacy, attention, and expert
                    guidance tailored to your needs.
                </p>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    My accounting firm was established to deliver efficient, expert
                    solutions to businesses and individuals. Our primary services include
                    accounting, taxation, and business consulting. We also provide a wide
                    range of niche and specialty services, backed by decades of
                    experience. Our team supports individuals, corporations, partnerships,
                    and nonprofits — all with the highest level of professionalism.
                </p>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    This firm is dedicated to delivering exceptional accounting, tax, and
                    financial services. Our ongoing mission is to serve you with the
                    highest level of expertise, accuracy, and personal attention possible.
                </p>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-semibold">
                    Don’t hesitate to call — your initial one-hour consultation is{" "}
                    <span className="text-[#27651c] font-bold">FREE</span>.
                </p>
            </div>

        </div>
    );
}
