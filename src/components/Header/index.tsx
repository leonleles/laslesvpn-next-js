import { ButtonRadius } from '../Layout/ButtonRadius';
import { Container } from '../Layout/Container';

import {
  HeaderContainer,
  HeaderWrapper,
  SignSignUp
} from './styles';

export function Header() {

  return (
    <HeaderContainer>
      <Container>
        <HeaderContainer>
          <HeaderWrapper>
            <img src="/static/logo.png" alt="LaslesVPN" />
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>Help</li>
            </ul>
            <SignSignUp>
              <strong>Sign In</strong>
              <ButtonRadius>Sign Up</ButtonRadius>
            </SignSignUp>
          </HeaderWrapper>
        </HeaderContainer>
      </Container>
    </HeaderContainer>
  );
}