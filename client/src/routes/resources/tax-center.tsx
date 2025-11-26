import { createFileRoute, Link } from "@tanstack/react-router";

// Static images via Vite
import Calc from "/images/calc-1.jpg";
import Thumb from "/images/cthumb.jpg";
import Tablet from "/images/tablettmb.jpg";

export const Route = createFileRoute("/resources/tax-center")({
    component: TaxCenterPage,
});

function TaxCenterPage() {
    return (
        <main className="text-white">

            {/* HERO SECTION */}
            <div className="
        w-full py-20 px-6 text-center
        bg-gradient-to-b from-black via-[#0b0b0b] to-transparent
      ">
                <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl">
                    Tax Resource Center
                </h1>

                <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mt-4 leading-relaxed">
                    Tools, references, and IRS resources to help guide you through
                    important tax decisions — all in one place.
                </p>

                <div className="mt-8">
                    <div className="
            inline-block px-8 py-3 text-lg font-semibold rounded-xl
            bg-[#27651c] text-white shadow-[0_0_20px_rgba(39,101,28,0.6)]
            hover:bg-[#1e4f16] hover:shadow-[0_0_28px_rgba(39,101,28,0.8)]
            transition-all duration-300 cursor-pointer
          ">
                        Tools & Resources Below
                    </div>
                </div>
            </div>

            {/* SECTION HEADER */}
            <SectionHeader title="Explore Tax Tools & IRS Resources" />

            {/* GRID SECTION */}
            <div
                className="
          max-w-7xl mx-auto px-6
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
          pb-20
        "
            >
                <ResourceCard
                    title="Track Refunds & Due Dates"
                    image={Calc}
                    links={[
                        {
                            label: "Federal Refund Status",
                            href: "https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp",
                            external: true,
                        },
                        {
                            label: "State Refund Lookup",
                            to: "/resources/check-tax-refund",
                        },
                        {
                            label: "Tax Due Dates",
                            href: "https://www.tax.gov/calendar/",
                            external: true,
                        },
                    ]}
                />

                <ResourceCard
                    title="IRS Calculators"
                    image={Thumb}
                    links={[
                        {
                            label: "IRS Withholding Calculator",
                            href: "https://www.irs.gov/refunds",
                            external: true,
                        },
                        { label: "Sales Tax Deduction Calculator", to: "/" },
                        { label: "Alternative Minimum Tax (AMT)", to: "/" },
                    ]}
                />

                <ResourceCard
                    title="IRS Resource Library"
                    image={Tablet}
                    links={[
                        {
                            label: "Business & Self-Employed Center",
                            href: "https://www.irs.gov/businesses/small-businesses-self-employed",
                            external: true,
                        },
                        { label: "Form SS-4 (EIN) Online", to: "/" },
                        {
                            label: "IRS Forms & Publications",
                            href: "https://www.irs.gov/forms-instructions",
                            external: true,
                        },
                        {
                            label: "Partnership Tax Information",
                            href: "https://www.irs.gov/businesses/partnerships",
                            external: true,
                        },
                        {
                            label: "Corporation Tax Information",
                            href: "https://www.irs.gov/corporations",
                            external: true,
                        },
                    ]}
                />
            </div>
        </main>
    );
}

/* ─────────────────────────────────────────────────────────────── */
/* SECTION HEADER */
/* ─────────────────────────────────────────────────────────────── */

function SectionHeader({ title }: { title: string }) {
    return (
        <div className="w-full text-center py-10">
            <h2
                className="
          text-3xl md:text-4xl font-bold text-white
          drop-shadow-lg relative inline-block
        "
            >
                {title}
                <span
                    className="
            absolute left-1/2 -bottom-2
            w-24 h-1 bg-[#27651c]
            -translate-x-1/2 rounded-full
            shadow-[0_0_14px_#27651c]
          "
                ></span>
            </h2>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────── */
/* RESOURCE CARD */
/* ─────────────────────────────────────────────────────────────── */

function ResourceCard({
                          title,
                          image,
                          links,
                      }: {
    title: string;
    image: string;
    links: {
        label: string;
        href?: string;
        to?: string;
        external?: boolean;
    }[];
}) {
    return (
        <div
            className="
        group
        bg-white/5 backdrop-blur-xl
        border border-white/10 rounded-2xl
        shadow-[0_8px_30px_rgba(0,0,0,0.4)]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]
        transition-all duration-500
        overflow-hidden
        hover:scale-[1.03]
      "
        >
            {/* IMAGE */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="
            w-full h-56 object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
                />
            </div>

            {/* CONTENT */}
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>

                <ul className="space-y-2 text-lg">
                    {links.map((link, idx) => (
                        <li key={idx}>
                            {link.external ? (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    className="
                    text-white
                    hover:text-[#27651c]
                    hover:underline hover:underline-offset-2
                    transition-colors duration-300
                  "
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    to={link.to!}
                                    className="
                    text-white
                    hover:text-[#27651c]
                    hover:underline hover:underline-offset-2
                    transition-colors duration-300
                  "
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
