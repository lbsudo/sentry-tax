import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/resources/faq")({
    component: FAQPage,
});

function FAQPage() {
    return (
        <div className="text-white px-4 py-10 max-w-5xl mx-auto">
            {/* PAGE HEADER */}
            <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-10">
                Frequently Asked Questions
            </h1>

            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
                Below are some of the most common questions we receive about our tax
                preparation, payroll management, bookkeeping, and accounting services.
                If you don't find what you're looking for, feel free to contact us —
                we're happy to help!
            </p>

            {/* FAQ ACCORDION LIST */}
            <div className="space-y-4">
                {faqData.map((item, i) => (
                    <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
}

/* ---------------------------------------------
   FAQ ITEM COMPONENT (Accordion)
---------------------------------------------- */
function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-xl p-5
        shadow-[0_8px_25px_rgba(0,0,0,0.4)]
        transition-all duration-300
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]
      "
        >
            {/* QUESTION */}
            <button
                onClick={() => setOpen(!open)}
                className="
          w-full text-left text-xl font-medium flex justify-between items-center
          text-white
        "
            >
                {question}
                <span
                    className={`text-[#27651c] text-2xl transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                    }`}
                >
          +
        </span>
            </button>

            {/* ANSWER */}
            <div
                className={`
          overflow-hidden transition-all duration-300
          ${open ? "max-h-[300px] mt-3" : "max-h-0"}
        `}
            >
                <p className="text-gray-300 text-lg leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

/* ---------------------------------------------
   FAQ DATA (CUSTOM CONTENT FOR TAX & ACCOUNTING)
---------------------------------------------- */
const faqData = [
    {
        question: "What documents do I need to bring for tax preparation?",
        answer:
            "You should bring W-2s, 1099 forms, prior-year tax returns, mortgage statements, investment income statements, business income/expense records, and any tax notices you received. If you're unsure, we're happy to provide a customized checklist.",
    },
    {
        question: "Do you offer payroll services for small businesses?",
        answer:
            "Yes. We provide fully customizable payroll services including direct deposit, payroll tax filing, W-2/1099 preparation, quarterly reports, and compliance monitoring — tailored to your business needs.",
    },
    {
        question: "How much do your services cost?",
        answer:
            "Pricing depends on the complexity of your tax return or bookkeeping needs. We offer competitive, transparent pricing and provide free consultations to give you an accurate estimate based on your situation.",
    },
    {
        question: "Can you help with IRS notices or audits?",
        answer:
            "Absolutely. We assist with IRS and state notices, audits, payment plans, penalties, and back-tax issues. We handle communication with the IRS on your behalf to reduce stress and ensure proper resolution.",
    },
    {
        question: "Do you work with self-employed individuals and small businesses?",
        answer:
            "Yes — we specialize in self-employed taxpayers, LLCs, partnerships, S-corps, and small businesses. We offer customized bookkeeping, tax planning, payroll, and accounting solutions.",
    },
    {
        question: "How often should I meet with my accountant?",
        answer:
            "At minimum, once per year during tax season. Many clients benefit from quarterly or monthly meetings for tax planning, bookkeeping review, and financial strategy. Scheduling is flexible based on your needs.",
    },
    {
        question: "Do you offer virtual appointments?",
        answer:
            "Yes. We offer secure virtual consultations and digital document submission, making it easy to work with us from anywhere.",
    },
    {
        question: "How can I get started?",
        answer:
            "Simply contact us to schedule a free consultation. We’ll review your needs, answer questions, and outline a service plan tailored to you or your business.",
    },
];
