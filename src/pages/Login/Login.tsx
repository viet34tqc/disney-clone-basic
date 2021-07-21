import * as S from './Login.styles';

const Login = () => {
	return (
		<S.Container>
			<S.CTA>
				<S.CTALogo1 src="/images/cta-logo-one.svg" alt="logo-1" />
				<S.CTAText>
					Get Premier Access to Raya and the Last Dragon for an additional fee
					with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
					The Disney Bundle will increase by $1.
				</S.CTAText>
				<S.CTALogo2 src="/images/cta-logo-two.png" alt="logo-2" />
			</S.CTA>
			<S.BGImg />
		</S.Container>
	);
};

export default Login;
