import { ButtonSocial } from "../Layout/ButtonSocial";
import { Container } from "../Layout/Container";

import { useThemeContext } from "../../contexts/ThemeContext";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import {
  CopyRight,
  FooterContainer,
  FooterLeftWrapper,
  FooterRigthWrapper,
  Socials
} from "./styles";



export function Footer() {
  const { theme } = useThemeContext();

  return (
    <FooterContainer>
      <Container between={true}>
        <FooterRigthWrapper>
          <img
            width={149}
            src="/static/logo.png"
            alt="LaslesVPN"
          />

          <p><b>LaslesVPN</b> is a private virtual network that <br />
          has unique features and has high security.</p>

          <Socials>
            <ButtonSocial>
              <FaFacebookF
                color={theme.colors.colorPrimary}
              />
            </ButtonSocial>
            <ButtonSocial>
              <FaTwitter
                color={theme.colors.colorPrimary}
              />
            </ButtonSocial>
            <ButtonSocial>
              <FaInstagram
                color={theme.colors.colorPrimary}
              />
            </ButtonSocial>
          </Socials>

          <CopyRight>©2020Lasles<b>VPN</b></CopyRight>
        </FooterRigthWrapper>

        <FooterLeftWrapper>
          <div className="column">
            <strong>Product</strong>

            <ul>
              <li>Download</li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="column">
            <strong>Engage</strong>

            <ul>
              <li>LaslesVPN ?</li>
              <li>FAQ</li>
              <li>Tutorials</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="column">
            <strong>Earn Money</strong>

            <ul>
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>
        </FooterLeftWrapper>

      </Container>
    </FooterContainer>
  );
}