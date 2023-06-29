import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 3,
		slidesToSlide: 3
	}
};

interface IMyCarousel {
	location: string;
}

export const CarouselMap = ({ location }: IMyCarousel) => {
	const cardsCarousel: any = {
		north: [
			{
				image: require('@/assets/img/client_capgemini.png')
			},
			{
				image: require('@/assets/img/client_hydroone.png')
			},
			{
				image: require('@/assets/img/client_atlantica.png')
			},
			{
				image: require('@/assets/img/client_fenix.png')
			}
		],
		south: [
			{
				image: require('@/assets/img/client_intertechne.png')
			},
			{
				image: require('@/assets/img/client_celepsa.png')
			},
			{
				image: require('@/assets/img/client_transelec.png')
			},
			{
				image: require('@/assets/img/client_bogota.png')
			},
			{
				image: require('@/assets/img/client_coes.png')
			},
			{
				image: require('@/assets/img/client_state_grid.png')
			},
			{
				image: require('@/assets/img/client_hydroplus.png')
			},
			{
				image: require('@/assets/img/client_corumba.png')
			},
			{
				image: require('@/assets/img/client_ute.png')
			},
			{
				image: require('@/assets/img/client_litsa.png')
			},
			{
				image: require('@/assets/img/client_mmg.png')
			},
			{
				image: require('@/assets/img/client_neoenergia.png')
			},
			{
				image: require('@/assets/img/client_cemig.png')
			},
			{
				image: require('@/assets/img/client_eletrodunas.png')
			},
			{
				image: require('@/assets/img/client_isarep.png')
			},
			{
				image: require('@/assets/img/client_isaintercolombia.png')
			},
			{
				image: require('@/assets/img/client_isacteep.png')
			},
			{
				image: require('@/assets/img/client_copel.png')
			},
			{
				image: require('@/assets/img/client_unacem.png')
			},
			{
				image: require('@/assets/img/client_pti.png')
			}
		],
		europe: [
			{
				image: require('@/assets/img/client_red.png')
			},
			{
				image: require('@/assets/img/client_iberdrola.png')
			},
			{
				image: require('@/assets/img/client_ren.png')
			},
			{
				image: require('@/assets/img/client_apg.png')
			},
			{
				image: require('@/assets/img/client_50hertz.png')
			},
			{
				image: require('@/assets/img/client_renault.png')
			},
			{
				image: require('@/assets/img/client_cjr.png')
			},
			{
				image: require('@/assets/img/client_finerge.png')
			},
			{
				image: require('@/assets/img/client_secil.png')
			},
			{
				image: require('@/assets/img/client_digital_tvilling.png')
			},
			{
				image: require('@/assets/img/client_geometric.png')
			},
			{
				image: require('@/assets/img/client_enerji.png')
			}
		],
		australia: [
			{
				image: require('@/assets/img/client_tata.png')
			},
			{
				image: require('@/assets/img/client_electranet.png')
			},
			{
				image: require('@/assets/img/client_powergrid.png')
			}
		],
		theWorld: [
			{
				image: require('@/assets/img/client_capgemini.png')
			},
			{
				image: require('@/assets/img/client_hydroone.png')
			},
			{
				image: require('@/assets/img/client_atlantica.png')
			},
			{
				image: require('@/assets/img/client_fenix.png')
			},
			{
				image: require('@/assets/img/client_intertechne.png')
			},
			{
				image: require('@/assets/img/client_celepsa.png')
			},
			{
				image: require('@/assets/img/client_transelec.png')
			},
			{
				image: require('@/assets/img/client_bogota.png')
			},
			{
				image: require('@/assets/img/client_coes.png')
			},
			{
				image: require('@/assets/img/client_state_grid.png')
			},
			{
				image: require('@/assets/img/client_hydroplus.png')
			},
			{
				image: require('@/assets/img/client_corumba.png')
			},
			{
				image: require('@/assets/img/client_ute.png')
			},
			{
				image: require('@/assets/img/client_litsa.png')
			},
			{
				image: require('@/assets/img/client_mmg.png')
			},
			{
				image: require('@/assets/img/client_neoenergia.png')
			},
			{
				image: require('@/assets/img/client_cemig.png')
			},
			{
				image: require('@/assets/img/client_eletrodunas.png')
			},
			{
				image: require('@/assets/img/client_isarep.png')
			},
			{
				image: require('@/assets/img/client_isaintercolombia.png')
			},
			{
				image: require('@/assets/img/client_isacteep.png')
			},
			{
				image: require('@/assets/img/client_copel.png')
			},
			{
				image: require('@/assets/img/client_unacem.png')
			},
			{
				image: require('@/assets/img/client_pti.png')
			},
			{
				image: require('@/assets/img/client_red.png')
			},
			{
				image: require('@/assets/img/client_iberdrola.png')
			},
			{
				image: require('@/assets/img/client_ren.png')
			},
			{
				image: require('@/assets/img/client_apg.png')
			},
			{
				image: require('@/assets/img/client_50hertz.png')
			},
			{
				image: require('@/assets/img/client_renault.png')
			},
			{
				image: require('@/assets/img/client_cjr.png')
			},
			{
				image: require('@/assets/img/client_finerge.png')
			},
			{
				image: require('@/assets/img/client_secil.png')
			},
			{
				image: require('@/assets/img/client_digital_tvilling.png')
			},
			{
				image: require('@/assets/img/client_geometric.png')
			},
			{
				image: require('@/assets/img/client_enerji.png')
			},
			{
				image: require('@/assets/img/client_tata.png')
			},
			{
				image: require('@/assets/img/client_electranet.png')
			},
			{
				image: require('@/assets/img/client_powergrid.png')
			}
		]
	};

	const locationCarousel: any = {
		north: {
			title: 'North America',
			top: '35%',
			left: 0
		},
		south: {
			title: 'South America',
			bottom: 0,
			left: 0
		},
		europe: {
			title: 'Europe and Asia',
			top: '30%',
			right: 0
		},
		australia: {
			title: 'Australia and Oceania',
			bottom: '5%',
			right: 0
		},
		theWorld: {
			title: 'The world',
			bottom: '-15%',
			right: '-5%',
			transform: 'translate(-50%, -50%)'
		}
	};

	return (
		<Stack
			height={'fit-content'}
			width={['340px', '340px', '340px', '340px', '510px']}
			bg={'rgba(255, 255, 255, 0.6)'}
			p={'12px'}
			pr={0}
			borderRadius={'5px'}
			boxShadow={'0px 20px 40px rgba(8, 29, 71, 0.05)'}
			border={'1px solid #D8E1E9'}
			justify={'space-between'}
			position={'absolute'}
			top={locationCarousel[location]?.top}
			left={locationCarousel[location]?.left}
			bottom={locationCarousel[location]?.bottom}
			right={locationCarousel[location]?.right}
		>
			<Text fontSize={'sm'} fontWeight={700} lineHeight={'140%'} color={'black'} mb={3}>
				{locationCarousel[location]?.title}
			</Text>
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
			>
				{cardsCarousel[location].map((url: any, index: number) => (
					<Box bg={'white'} key={index} mx={2} border={'0.72px solid #D8E1E9'} p={'11px'} borderRadius={'3.6px'}>
						<Flex height={'54px'} position={'relative'}>
							<Image
								src={url.image}
								alt={'client'}
								fill={true}
								style={{ objectFit: 'contain', width: '100%', objectPosition: 'center' }}
							/>
						</Flex>
					</Box>
				))}
			</Carousel>
		</Stack>
	);
};
