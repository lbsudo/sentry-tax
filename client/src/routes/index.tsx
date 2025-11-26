// import { Link } from '@tanstack/react-router'
import Office from '/images/OfficeTeam.jpg'
import Carousel from "@/components/homepage/Carousel.tsx";
import Certs from "@/components/homepage/Certs.tsx";
import Portals from "@/components/homepage/Portals.tsx";
import {createFileRoute} from "@tanstack/react-router";   // Vite public asset

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

            {/* Office Image + Intro Text */}
            <div className="flex flex-col lg:flex-row sm:max-lg:items-center justify-center">

                {/* Office Image */}
                <div className="w-full h-auto p-3 md:py-3">
                    <img
                        src={Office}
                        alt="Office image"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Description */}
                <div className="w-full p-3 md:py-3">
                    <p className="text-lg">
                        Looking for high-quality financial and tax advice and complete accounting services at
                        a reasonable price? Welcome to Sentry Accounting & Income Tax Planning Inc., offering
                        accounting, taxation, and small business consulting services at affordable fees.
                        We're flexible. We're friendly. And perhaps most of all, we listen. Call us for a
                        complimentary, no cost, no-obligation initial consultation—with the personal touch.
                        Our website details a full range of services, contact information, and a company
                        profile, so click around and stay for a while!
                        <br /><br /><br />
                    </p>
                </div>

            </div>

            {/* Contact CTA */}
            //TO-DO: Change to Link
            <text
                // to="."
                className="flex justify-center items-center font-bold hover:underline underline-offset-2 p-3"
            >
                But don't hesitate to contact us — your initial one-hour consultation is FREE.
            </text>

            {/* Certifications */}
            <Certs />

            <br />

            {/* Memberships */}
            <p className="text-xl font-bold flex justify-center items-center">
                Memberships:
            </p>

            <br />

            <ul className="text-lg flex justify-center items-center flex-col lg:flex-row gap-3 text-center px-4">
                <li>(CRTP) CTEC Registered Tax Preparer, American Institute of CPAs, Charter Member</li>
                <li>Member (NACPB) National Association Of Certified Public Bookkeepers</li>
            </ul>

            <br />

            {/* Portals Section */}
            <Portals />
        </>
    )
}
