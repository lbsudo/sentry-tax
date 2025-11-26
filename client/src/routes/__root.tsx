import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import ContactBar from "@/components/global/ContactBar.tsx";

export const Route = createRootRoute({
	component: () => (
		<>
            <ContactBar/>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
