import { Box, H2, Illustration, Text } from '@adminjs/design-system';
import { useTranslation } from 'adminjs';
import React from 'react';

const pageHeaderHeight = 284;
const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;

export const DashboardHeader: React.FC = () => {
	const { translateMessage } = useTranslation();

	return (
		<Box position="relative" overflow="hidden" data-css="default-dashboard">
			<Box position="absolute" top={50} left={-10} opacity={[0.2, 0.4, 1]} animate>
				<Illustration variant="Rocket" />
			</Box>
			<Box position="absolute" top={-70} right={-15} opacity={[0.2, 0.4, 1]} animate>
				<Illustration variant="Moon" />
			</Box>
			<Box
				bg="primary100"
				height={pageHeaderHeight}
				py={pageHeaderPaddingY}
				px={['default', 'lg', pageHeaderPaddingX]}
			>
				<Text textAlign="center" color="white">
					<H2>{translateMessage('welcomeOnBoard_title')}</H2>
					<Text opacity={0.8}>{translateMessage('welcomeOnBoard_subtitle')}</Text>
				</Text>
			</Box>
		</Box>
	);
};

export const Dashboard: React.FC = () => {
	return (
		<Box>
			<DashboardHeader />
		</Box>
	);
};

export default Dashboard;
