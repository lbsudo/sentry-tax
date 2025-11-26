import NACPB from "/images/NACPB-3.webp";
import CTEC from "/images/ctec.png";

export default function Certs() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 py-12 px-4">
            {/* NACPB Card */}
            <div className="
                group
                bg-white/5 backdrop-blur-md
                p-4 rounded-2xl
                border border-white/10
                shadow-xl
                transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_28px_rgba(39,101,28,0.45)]
                flex justify-center items-center
                w-full md:w-[460px] h-[200px]
            ">
                <img
                    src={NACPB}
                    alt="NACPB Certification"
                    className="
                        h-full object-cover
                        transition-transform duration-300
                        group-hover:scale-[1.05]
                    "
                />
            </div>

            {/* CTEC Card */}
            <div className="
                group
                bg-white/5 backdrop-blur-md
                p-6 rounded-2xl
                border border-white/10
                shadow-xl
                transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_28px_rgba(39,101,28,0.45)]
                flex justify-center items-center
                w-full md:w-[260px] h-[200px]
            ">
                <img
                    src={CTEC}
                    alt="CTEC Certification"
                    className="
                        h-full object-contain
                        transition-transform duration-300
                        group-hover:scale-[1.05]
                    "
                />
            </div>
        </div>
    );
}
