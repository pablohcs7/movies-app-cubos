"use client";

import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			{children}
		</ChakraProvider>
	);
}
