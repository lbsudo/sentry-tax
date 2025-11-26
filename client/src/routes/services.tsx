import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
    component: ServicesPage,
});

function ServicesPage() {
    return (
        <div className="text-white px-4 py-12">
            {/* PAGE TITLE */}
            <div className="flex justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-center tracking-wide">
                    Our Services
                </h1>
            </div>

            {/* FROSTED WRAPPER */}
            <div
                className="
                max-w-5xl mx-auto mt-10
                bg-white/5 backdrop-blur-lg
                border border-white/10
                rounded-2xl shadow-2xl
                p-6 md:p-10
                space-y-10
                animate-[fadeIn_0.6s_ease-out]
            "
            >
                {/* --- SERVICE ITEM --- */}
                <Section
                    title="Tax Services"
                    text="Our firm offers a full range of tax planning and compliance services.
                    We work with you year-round to minimize your total tax burden.
                    We prepare all federal, state, and local tax returns for individuals and businesses."
                />

                <Section
                    title="Accounting Services"
                    text="We provide receivables, payables, payroll management, and full
                    GAAP-compliant financial statements. Custom managerial reports are also available."
                />

                <Section
                    title="Bookkeeping / Write-Up"
                    text="Our bookkeeping services include general journal maintenance,
                    subsidiary ledgers, bank reconciliation, and detailed tracking of receivables
                    and payables."
                />

                <Section
                    title="Cash Flow & Budgeting Analysis"
                    text="Our cash flow and budgeting analysis helps you reduce cost overruns,
                    avoid lost discounts, and decrease uncollectable receivables."
                />

                <Section
                    title="Financial Statements"
                    text="We prepare professional, GAAP-compliant financial statements and
                    performance analyses that help owners optimize efficiency and potential profit."
                />

                <Section
                    title="Accounting Software Selection & Implementation"
                    text="We evaluate and recommend the best accounting software for your needs
                    and guide you through the setup and effective use of your system."
                />

                <Section
                    title="Financial Planning"
                    text="We work closely with you to develop comprehensive financial plans
                    aimed at helping you meet both short- and long-term goals."
                />

                <Section
                    title="Retirement Planning"
                    text="It’s never too early to plan for retirement. We analyze projected income,
                    expenses, and investments so your retirement aligns with your lifestyle goals."
                />

                <Section
                    title="Professional Payroll Service"
                    text="We offer a fully personalized payroll service designed for your business,
                    providing accuracy, consistency, and seamless integration with your finances."
                />

                <Section
                    title="Custom Payroll Service"
                    text="Our flexible, fully customized payroll systems are designed around your
                    business’s needs—not a one-size-fits-all template used by service bureaus."
                />

                <Section
                    title="Trusted Payroll Service"
                    text="Our complete payroll services include check printing, direct deposit, tax
                    filings, compliance support, and professional guidance on payroll matters."
                />
            </div>
        </div>
    );
}

/* ===========================
   SECTION COMPONENT
   (FROSTED CARDS + HEADERS)
=========================== */
function Section({ title, text }: { title: string; text: string }) {
    return (
        <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-[#27651c] underline underline-offset-4">
                {title}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
                {text}
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-white/10 mt-4"></div>
        </div>
    );
}
