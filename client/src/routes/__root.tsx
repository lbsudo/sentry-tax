import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import ContactBar from "@/components/global/ContactBar.tsx";
import Navbar from "@/components/global/Navbar.tsx";

export const Route = createRootRoute({
    component: () => (
        <div className="min-h-screen w-full bg-[#0d0d0d] text-white">
            <ContactBar />
            <Navbar />
            <div className="pt-0">
                <Outlet />
            </div>
            <TanStackRouterDevtools />
        </div>
    ),
});
