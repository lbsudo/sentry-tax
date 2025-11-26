import { Link } from '@tanstack/react-router'
import { FaComments, FaUsers, FaServer, FaCreditCard } from "react-icons/fa";

export default function Portals() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center mt-2">

            {/* Testimonials */}
            <div className="flex w-3/4 flex-col items-center p-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-Sentry-green">
                    <FaComments className="h-12 w-12 text-Sentry-green" />
                </div>

                <h1 className="pb-3 pt-6 text-2xl font-bold">Testimonials</h1>

                <p className="text-center w-full">
                    Our clients appreciate that our focus is on them. Here's what{" "}
                    <Link to="/" className="text-Sentry-green underline underline-offset-2">
                        they've said
                    </Link>{" "}
                    about us...
                </p>
            </div>

            {/* Tax Center */}
            <div className="flex w-3/4 flex-col items-center p-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-Sentry-green">
                    <FaServer className="h-12 w-12 text-Sentry-green" />
                </div>

                <h1 className="pb-3 pt-6 text-2xl font-bold">Tax Center</h1>

                <p className="text-center">
                    Our convenient Tax Center provides an array of tax information all in one place.
                    <Link to="/" className="text-Sentry-green underline underline-offset-2">
                        {" "}Click here{" "}
                    </Link>{" "}
                    for more information...
                </p>
            </div>

            {/* Financial Calculators */}
            <div className="flex w-3/4 flex-col items-center p-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-Sentry-green">
                    <FaCreditCard className="h-12 w-12 text-Sentry-green" />
                </div>

                <h1 className="pb-3 pt-6 text-2xl font-bold">Financial Calculators</h1>

                <p className="text-center">
                    Our convenient Financial Calculators can help you plan for your future.{" "}
                    <Link to="/" className="text-Sentry-green underline underline-offset-2">
                        Click here
                    </Link>{" "}
                    for more information...
                </p>
            </div>

            {/* Paycheck Calculators */}
            <div className="flex w-3/4 flex-col items-center p-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-Sentry-green">
                    <FaUsers className="h-12 w-12 text-Sentry-green" />
                </div>

                <h1 className="pb-3 pt-6 text-2xl font-bold">Paycheck Calculators</h1>

                <p className="text-center">
                    <Link to="/" className="text-Sentry-green underline underline-offset-2">
                        Click here
                    </Link>{" "}
                    to use our handy Paycheck Calculators...
                </p>
            </div>

        </div>
    )
}
