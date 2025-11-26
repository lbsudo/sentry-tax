import { Link } from '@tanstack/react-router'
import { FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

export default function ContactBar() {
    return (
        <div className="bg-gray-400/10 flex justify-end px-6 drop-shadow-lg">
            <Link
                to="/"
                className="text-Sentry-green hover:underline flex justify-center items-center mr-9 text-sm lg:text-xl"
            >
                <FaPhone className="mr-2" />
                (888)-406-7771
            </Link>

            <Link
                to="/"
                className="text-Sentry-green hover:underline flex justify-center items-center text-sm lg:text-xl"
            >
                <AiOutlineMail className="mr-2" />
                contact@sentrytax.com
            </Link>
        </div>
    )
}
