import { createFileRoute } from "@tanstack/react-router";

import Location1 from "/images/Location1.jpg";
import Location2 from "/images/Location2.jpg";

export const Route = createFileRoute("/contact")({
    component: ContactPage,
});

function ContactPage() {
    return (
        <>

            {/* TITLE */}
            <div className="text-center pt-16 pb-6">
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-wide drop-shadow-lg">
                    Contact Us
                </h2>
                <p className="text-gray-400 mt-3 text-lg">
                    We're here to help you — reach out any time.
                </p>
            </div>

            <main
                className="
        max-w-6xl mx-auto px-6
        flex flex-col items-center
        gap-14
      "
            >
                {/* INFO CARD */}
                <div
                    className="
            w-full max-w-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl shadow-2xl
            px-8 py-10
            text-center space-y-4
        "
                >
                    <h3 className="text-2xl font-semibold text-white tracking-wide">
                        Sentry Accounting & Income Tax Planning Inc.
                    </h3>

                    <p className="text-gray-300 text-lg">
                        15000 7th Street Suite 211
                        <br />
                        Victorville, CA 92395
                    </p>

                    <p className="text-gray-300 text-lg">
                        Phone: <span className="font-semibold">(888) 406-7771</span>
                    </p>

                    <p className="text-gray-300 text-lg">
                        Fax: <span className="font-semibold">(760) 493-1986</span>
                    </p>

                    <p className="text-gray-300 text-lg">
                        Email:
                        <a
                            href="mailto:admin@sentrytax.com"
                            className="ml-1 text-[#27651c] font-semibold hover:underline"
                        >
                            admin@sentrytax.com
                        </a>
                    </p>
                </div>

                {/* MAP */}
                <div
                    className="
            w-full max-w-4xl
            rounded-2xl overflow-hidden
            shadow-[0_0_40px_rgba(0,0,0,0.45)]
            border border-white/10
        "
                >
                    <iframe
                        title="Google Maps Location"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.7023415797584!2d-117.3087637!3d34.5237276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c36449d3c550b5%3A0x95373a8d618e0383!2sSentry%20Accounting%20%26%20Income%20Tax%20Planning%20Inc.!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    ></iframe>
                </div>

                {/* IMAGE GRID */}
                <div
                    className="
            grid grid-cols-1 md:grid-cols-2 gap-10
            w-full max-w-5xl
        "
                >
                    <div
                        className="
              rounded-2xl overflow-hidden shadow-2xl
              border border-white/10
              bg-white/5 backdrop-blur-md
              transition-transform duration-300 hover:scale-[1.02]
            "
                    >
                        <img
                            src={Location1}
                            alt="Office interior"
                            className="w-full h-72 md:h-80 object-cover"
                        />
                    </div>

                    <div
                        className="
              rounded-2xl overflow-hidden shadow-2xl
              border border-white/10
              bg-white/5 backdrop-blur-md
              transition-transform duration-300 hover:scale-[1.02]
            "
                    >
                        <img
                            src={Location2}
                            alt="Office exterior"
                            className="w-full h-72 md:h-80 object-cover"
                        />
                    </div>
                </div>

                <div className="h-10" />
            </main>
        </>
    );
}
