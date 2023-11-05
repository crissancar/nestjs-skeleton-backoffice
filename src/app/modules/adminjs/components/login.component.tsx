import {
	Box,
	Button,
	FormGroup,
	H2,
	H5,
	Input,
	Label,
	MadeWithLove,
	MessageBox,
	Text,
} from '@adminjs/design-system';
import { ReduxState, useTranslation } from 'adminjs';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled(Box)`
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
`;

const StyledLogo = styled.img`
	max-width: 220px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
`;

export type LoginProps = {
	message?: string;
	action: string;
};

export const Login: React.FC<LoginProps> = (props) => {
	const { action, message } = props;
	const { translateLabel, translateButton, translateProperty, translateMessage } = useTranslation();
	const branding = useSelector((state: ReduxState) => state.branding);

	return (
		<>
			<GlobalStyle />
			<Wrapper flex variant="grey">
				<Box bg="white" height="440px" flex boxShadow="login" width={[1, 2 / 3, 'auto']}>
					<Box
						bg="primary100"
						color="white"
						p="x3"
						width="380px"
						flexGrow={0}
						display={['none', 'none', 'block']}
						position="relative"
					>
						<H2 fontWeight="lighter">{translateLabel('loginWelcome')}</H2>
						<Text fontWeight="lighter" mt="default">
							{translateMessage('loginWelcome')}
						</Text>
						<Text textAlign="center" p="xxl">
							<Box display="inline" mr="default">
								<img src="/assets/img/main.png" alt="Skeleton" width="100%" height="100%" />
							</Box>
						</Text>
					</Box>
					<Box
						as="form"
						action={action}
						method="POST"
						p="x3"
						flexGrow={1}
						width={['100%', '100%', '480px']}
					>
						<H5 marginBottom="l">
							{branding.logo ? (
								<StyledLogo src={branding.logo} alt={branding.companyName} />
							) : (
								branding.companyName
							)}
						</H5>
						{message && (
							<MessageBox
								my="lg"
								message={message.split(' ').length > 1 ? message : translateMessage(message)}
								variant="danger"
							/>
						)}
						<FormGroup>
							<Label required>{translateProperty('email')}</Label>
							<Input name="email" placeholder={translateProperty('email')} />
						</FormGroup>
						<FormGroup>
							<Label required>{translateProperty('password')}</Label>
							<Input
								type="password"
								name="password"
								placeholder={translateProperty('password')}
								autoComplete="new-password"
							/>
						</FormGroup>
						<Text mt="xl" textAlign="center">
							<Button variant="primary">{translateButton('login')}</Button>
						</Text>
					</Box>
				</Box>
				{branding.withMadeWithLove ? (
					<Box mt="xxl">
						<MadeWithLove />
					</Box>
				) : null}
			</Wrapper>
		</>
	);
};

export default Login;
