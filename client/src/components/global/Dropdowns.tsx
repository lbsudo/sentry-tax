import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FaChevronDown } from "react-icons/fa";

type DropdownProps = {
    mobile?: boolean;
    onNavigate?: () => void;
};

export default function Dropdowns({ mobile = false, onNavigate }: DropdownProps) {
    const [showResources, setShowResources] = useState(false);

    const resourcesRef = useRef<HTMLDivElement | null>(null);

    // DESKTOP: click outside to close
    useEffect(() => {
        if (mobile) return;

        const handler = (e: MouseEvent) => {
            if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node))
                setShowResources(false);
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [mobile]);

    return (
        <>

            {/* RESOURCES */}
            <div className={`${mobile ? "space-y-1" : "relative"}`} ref={resourcesRef}>
                <DropdownToggle
                    label="RESOURCES"
                    open={showResources}
                    onClick={() => {
                        setShowResources(!showResources);
                    }}
                />

                {showResources && (
                    <DropdownList mobile={mobile}>
                        <DropdownItem to="/resources/tax-center" label="TAX CENTER" onNavigate={onNavigate} />
                        <DropdownItem to="/resources/financial-calculators" label="FIN. CALCULATORS" onNavigate={onNavigate} />
                        <DropdownItem to="/resources/faq" label="FAQ" onNavigate={onNavigate} />
                    </DropdownList>
                )}
            </div>
        </>
    );
}

function DropdownToggle({ label, open, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className="
                flex items-center text-white text-lg font-medium
                hover:text-[#27651c] transition
            "
        >
            {label}
            <FaChevronDown
                className={`
                    ml-2 transition-transform duration-300
                    ${open ? "rotate-180" : ""}
                `}
            />
        </button>
    );
}

function DropdownList({ children, mobile }: any) {
    return (
        <div
            className={`
                ${mobile ? "ml-4" : "absolute top-full right-0"}
                bg-[#0d0d0d] p-3 w-56 space-y-1
                border border-gray-700 shadow-xl rounded-md
            `}
        >
            {children}
        </div>
    );
}

function DropdownItem({ to, label, onNavigate }: any) {
    return (
        <Link
            to={to}
            onClick={onNavigate}
            className="
                block px-3 py-2 rounded-md text-gray-200
                hover:bg-gray-800 hover:text-[#27651c]
                transition
            "
        >
            {label}
        </Link>
    );
}
