import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AiOutlineMenu } from "react-icons/ai";
import Dropdowns from "./Dropdowns";
import Logo from "/Logo.png";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const [shrink, setShrink] = useState(false);

    const { location } = useRouterState();

    const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const indicatorRef = useRef<HTMLDivElement | null>(null);

    const updateIndicator = () => {
        const activeEl = navRefs.current[location.pathname];
        const bar = indicatorRef.current;

        if (activeEl && bar && activeEl.parentElement) {
            const rect = activeEl.getBoundingClientRect();
            const parentRect = activeEl.parentElement.getBoundingClientRect();
            bar.style.width = `${rect.width}px`;
            bar.style.left = `${rect.left - parentRect.left}px`;
            bar.style.opacity = "1";
        } else if (bar) bar.style.opacity = "0";
    };

    useEffect(() => {
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setShrink(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* DESKTOP NAVBAR */}
            <nav
                className={`
                    hidden lg:block w-full sticky top-0 z-50
                    bg-[#0d0d0d]/60 backdrop-blur-2xl
                    border-b border-white/10
                    shadow-[0_4px_30px_rgba(0,0,0,0.5)]
                    transition-all duration-300
                    ${shrink ? "py-1" : "py-3"}
                `}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

                    {/* LOGO */}
                    <Link to="/" className="relative group flex items-center">
                        <div className="relative">
                            <img
                                src={Logo}
                                alt="Logo"
                                className={`
                                    transition-all duration-300 drop-shadow-xl select-none
                                    ${shrink ? "w-12 h-12" : "w-20 h-20"}
                                `}
                            />
                            <div className="
                                absolute inset-0 rounded-full blur-2xl opacity-50
                                bg-[#27651c]/40 scale-110
                                transition-all duration-300
                                group-hover:blur-[40px] group-hover:opacity-80 group-hover:scale-125
                            "></div>
                        </div>
                    </Link>

                    {/* NAV ITEMS */}
                    <div className="flex items-center space-x-10 relative">
                        <div
                            ref={indicatorRef}
                            className="
                                absolute -bottom-1 h-[2px] bg-[#27651c]
                                transition-all duration-300 opacity-0
                            "
                        ></div>

                        <NavItem to="/" label="HOME" refs={navRefs} activePath={location.pathname} />
                        <NavItem to="/about" label="ABOUT" refs={navRefs} activePath={location.pathname} />

                        <Dropdowns />

                        <NavItem to="/payment-portal" label="PAYMENT PORTAL" refs={navRefs} activePath={location.pathname} />
                    </div>

                    {/* CONTACT BUTTON */}
                    <Link
                        to="/contact"
                        className="
                            px-5 py-2 rounded-lg
                            bg-[#27651c] text-white font-light tracking-wide
                            border border-[#27651c]/50
                            shadow-[0_0_12px_rgba(39,101,28,0.6)]
                            hover:bg-[#1e4f16] hover:shadow-[0_0_18px_rgba(39,101,28,0.8)]
                            transition-all duration-300
                        "
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>

            {/* MOBILE NAV WRAPPER (NO BLUR) */}
            <nav
                className={`
                    lg:hidden w-full sticky top-0 z-50
                    bg-[#0d0d0d]
                    border-b border-black
                    shadow-xl
                    py-3 px-4
                `}
            >
                <div className="flex items-center justify-between">
                    <img src={Logo} className="w-14 h-14 drop-shadow-md" />

                    <button
                        onClick={() => setShowNav(true)}
                        className="p-2 rounded-md text-white hover:bg-white/10 transition"
                    >
                        <AiOutlineMenu className="h-7 w-7" />
                    </button>
                </div>
            </nav>

            {/* MOBILE OVERLAY */}
            <div
                className={`
                    fixed inset-0 bg-black/60 z-40
                    transition-opacity duration-300
                    ${showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setShowNav(false)}
            ></div>

            {/* MOBILE SIDEBAR */}
            <div
                className={`
                    fixed top-0 right-0 h-full w-72 z-50
                    bg-[#0d0d0d] text-white
                    p-6 space-y-6
                    shadow-2xl border-l border-black
                    transform transition-transform duration-300
                    ${showNav ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <h2 className="text-xl font-semibold mb-2">Menu</h2>

                <NavMobileItem to="/" label="HOME" onClick={() => setShowNav(false)} />
                <NavMobileItem to="/about" label="ABOUT" onClick={() => setShowNav(false)} />

                <Dropdowns mobile onNavigate={() => setShowNav(false)} />

                <NavMobileItem to="/payment-portal" label="PAYMENT PORTAL" onClick={() => setShowNav(false)} />
                <NavMobileItem to="/contact" label="CONTACT" onClick={() => setShowNav(false)} />
            </div>
        </>
    );
}

/* DESKTOP NAV ITEM */
function NavItem({ to, label, refs, activePath }: any) {
    const isActive = activePath === to;

    return (
        <Link
            to={to}
            ref={(el) => {
                refs.current[to] = el;
            }}
            className={`
                relative text-lg font-light tracking-wide transition-all duration-300
                ${isActive ? "text-[#27651c]" : "text-white"}
                ${isActive ? "drop-shadow-[0_0_6px_#27651c]" : "hover:text-[#27651c]"}
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 hover:after:w-full
                after:bg-[#27651c] after:transition-all after:duration-300
            `}
        >
            {label}
        </Link>
    );
}

/* MOBILE NAV ITEM */
function NavMobileItem({ to, label, onClick }: any) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="
                text-white text-lg font-medium
                transition-all duration-300
                hover:text-[#27651c]
                block
            "
        >
            {label}
        </Link>
    );
}
