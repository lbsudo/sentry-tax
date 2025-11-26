import { useState, useEffect } from "react";

type Props = {
    images: { src: string; caption?: string }[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
};

export default function Carousel({
                                     images,
                                     autoSlide = true,
                                     autoSlideInterval = 5000,
                                 }: Props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigate = (direction: number) => {
        setCurrentImageIndex(
            (index) => (index + direction + images.length) % images.length
        );
    };

    // Auto-slide
    useEffect(() => {
        if (!autoSlide) return;
        const interval = setInterval(() => navigate(1), autoSlideInterval);
        return () => clearInterval(interval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <>
            {/* ⭐ MOBILE VERSION ⭐ */}
            <div
                className="
          lg:hidden relative w-full h-[300px]
          overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        "
            >
                {images.map((img, index) => (
                    <div
                        key={img.src}
                        className={`
              absolute inset-0 transition-all duration-[900ms] ease-out
              ${
                            index === currentImageIndex
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-105"
                        }
            `}
                    >
                        <img
                            src={img.src}
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* ⭐ MOBILE — Centered Caption */}
                        {img.caption && (
                            <div
                                className={`
                  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                  px-5 py-3 max-w-[90%]
                  text-white text-2xl font-semibold text-center leading-snug
                  backdrop-blur-md bg-black/30 border border-white/10
                  shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                  transition-all duration-[900ms]
                  ${
                                    index === currentImageIndex
                                        ? "opacity-100 translate-y-[-50%]"
                                        : "opacity-0 translate-y-[calc(-50%+12px)]"
                                }
                `}
                            >
                                {img.caption}
                            </div>
                        )}
                    </div>
                ))}

                {/* MOBILE Arrows */}
                <button
                    onClick={() => navigate(-1)}
                    className="
            absolute left-3 top-1/2 -translate-y-1/2
            bg-white/20 backdrop-blur-xl text-white
            rounded-full p-2 shadow-lg
            hover:bg-white/30 transition active:scale-95
          "
                >
                    <span className="text-xl font-bold">&lt;</span>
                </button>

                <button
                    onClick={() => navigate(1)}
                    className="
            absolute right-3 top-1/2 -translate-y-1/2
            bg-white/20 backdrop-blur-xl text-white
            rounded-full p-2 shadow-lg
            hover:bg-white/30 transition active:scale-95
          "
                >
                    <span className="text-xl font-bold">&gt;</span>
                </button>

                {/* MOBILE Dots */}
                <div className="absolute bottom-4 w-full flex justify-center gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`
                h-2 rounded-full transition-all duration-300
                ${
                                idx === currentImageIndex
                                    ? "w-6 bg-[#27651c] shadow-[0_0_6px_#27651c]"
                                    : "w-2 bg-white/50 hover:bg-white"
                            }
              `}
                        ></button>
                    ))}
                </div>
            </div>

            {/* ⭐ DESKTOP VERSION ⭐ */}
            <div
                className="
          hidden lg:block relative w-full h-[550px]
          overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
            >
                {images.map((img, index) => (
                    <div
                        key={img.src}
                        className={`
              absolute inset-0 transition-all duration-[1200ms] ease-out
              ${
                            index === currentImageIndex
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-[1.05]"
                        }
            `}
                    >
                        <img
                            src={img.src}
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                        {/* ⭐ DESKTOP — Centered Caption */}
                        {img.caption && (
                            <div
                                className={`
                  absolute left-1/2 top-1/2
                  -translate-x-1/2 -translate-y-1/2
                  px-10 py-6 max-w-5xl w-[85%]
                  text-white text-4xl font-semibold text-center leading-snug
                  backdrop-blur-xl bg-black/30 border border-white/10
                  shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                  transition-all duration-[1200ms]
                  ${
                                    index === currentImageIndex
                                        ? "opacity-100 translate-y-[-50%]"
                                        : "opacity-0 translate-y-[calc(-50%+20px)]"
                                }
                `}
                            >
                                {img.caption}
                            </div>
                        )}
                    </div>
                ))}

                {/* Desktop Arrows */}
                <button
                    onClick={() => navigate(-1)}
                    className="
            absolute left-5 top-1/2 -translate-y-1/2
            bg-white/20 backdrop-blur-xl text-white
            rounded-full p-3 shadow-xl
            hover:bg-white/30 transition active:scale-95
          "
                >
                    <span className="text-2xl font-bold drop-shadow-lg">&lt;</span>
                </button>

                <button
                    onClick={() => navigate(1)}
                    className="
            absolute right-5 top-1/2 -translate-y-1/2
            bg-white/20 backdrop-blur-xl text-white
            rounded-full p-3 shadow-xl
            hover:bg-white/30 transition active:scale-95
          "
                >
                    <span className="text-2xl font-bold drop-shadow-lg">&gt;</span>
                </button>

                {/* Desktop Dots */}
                <div className="absolute bottom-6 w-full flex justify-center gap-3">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`
                h-3 rounded-full transition-all duration-300
                ${
                                idx === currentImageIndex
                                    ? "w-8 bg-[#27651c] shadow-[0_0_10px_#27651c]"
                                    : "w-3 bg-white/50 hover:bg-white"
                            }
              `}
                        ></button>
                    ))}
                </div>

                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/30 to-transparent pointer-events-none"></div>
            </div>
        </>
    );
}
