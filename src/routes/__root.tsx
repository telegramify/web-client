import { TanstackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

import appCss from "../styles.css?url";

// import type { QueryClient } from "@tanstack/react-query";

// import type { TRPCRouter } from "@/integrations/trpc/router";
// import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { wrapCreateRootRouteWithSentry } from "@sentry/tanstackstart-react";

// interface MyRouterContext {
// 	queryClient: QueryClient;

// 	trpc: TRPCOptionsProxy<TRPCRouter>;
// }

export const Route = wrapCreateRootRouteWithSentry(createRootRoute)({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<Header />
				{children}
				<TanstackDevtools
					config={{
						position: "bottom-left",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						TanStackQueryDevtools,
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
