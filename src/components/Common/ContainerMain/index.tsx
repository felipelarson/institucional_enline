import { Container, ContainerProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IContainerMainProps extends ContainerProps {
	children: ReactNode;
}

export const ContainerMain = ({ children, ...props }: IContainerMainProps) => {
	return (
		<Container maxW={'full'} {...props}>
			<Container maxW={1100} py={100}>
				{children}
			</Container>
		</Container>
	);
};
