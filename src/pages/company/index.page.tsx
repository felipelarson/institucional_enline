import { Clients, Commitment, Contact, Hero } from '@/components/Company';

import { Stack } from '@chakra-ui/react';

export default function Company() {
	return (
		<>
			<Stack bgGradient={'linear(to-b, #ffffff, #D7DEFA)'} spacing={0}>
				<Hero />
			</Stack>
			<Stack bgGradient={'linear(to-r, #ffffff, #D7DEFA)'} spacing={0}>
				<Commitment />
			</Stack>
			<Stack bgGradient={'linear(to-b, #ffffff, #D7DEFA)'} spacing={0}>
				<Clients />
			</Stack>
			<Stack>
				<Contact />
			</Stack>
		</>
	);
}
