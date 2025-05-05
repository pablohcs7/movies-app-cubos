"use client";

import RouteGuard from "@/components/RouteGuard";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<RouteGuard>
				<Flex>
					<Text>Teste home</Text>
				</Flex>
			</RouteGuard>
		</>
	);
}
