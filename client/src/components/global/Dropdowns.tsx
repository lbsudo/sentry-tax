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
            if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
                setShowResources(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [mobile]);

    return (
        <div className={`${mobile ? "space-y-1" : "relative"}`} ref={resourcesRef}>
            {/* Toggle */}
            <DropdownToggle
                label="RESOURCES"
                open={showResources}
                onClick={() => setShowResources(!showResources)}
            />

            {/* Dropdown List */}
            {showResources && (
                <DropdownList mobile={mobile}>
                    <DropdownItem to="/resources/tax-center" label="TAX CENTER" onNavigate={onNavigate} />
                    <DropdownItem to="/resources/financial-calculators" label="FIN. CALCULATORS" onNavigate={onNavigate} />
                    <DropdownItem to="/resources/faq" label="FAQ" onNavigate={onNavigate} />
                </DropdownList>
            )}
        </div>
    );
}

function DropdownToggle({ label, open, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className="
                flex items-center w-full
                text-white text-lg font-medium
                tracking-wide
                hover:text-[#3DA02C] transition
            "
        >
            {label}
            <FaChevronDown
                className={`
                    ml-2 text-sm
                    transition-transform duration-300
                    ${open ? "rotate-180" : ""}
                `}
            />
        </button>
    );
}


function DropdownList({ children, mobile }: any) {
    return (
        <div className={`${mobile ? "ml-2 mt-2 space-y-2" : "absolute top-full right-0"} bg-transparent`}>
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
                block pl-3 py-1.5
                text-gray-300 text-base
                hover:text-[#3DA02C]
                transition-all duration-200
            "
        >
            {label}
        </Link>
    );
}
