import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContaier,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWraper,
  FooterLinkTitle,
  FooterWrap,
  SocialIcons,
  SocialIconsLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContaier>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWraper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms Of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink to="/signin">GitHub</FooterLink>
              <FooterLink to="/signin">Linkedin</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWraper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWap>
            <SocialLogo onClick={toggleHome} to="/">
              Prince
            </SocialLogo>
            <WebsiteRights>
              Prince © {new Date().getFullYear()} All rigths reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink
                to="//www.facebook.com"
                target="_blank"
                aria-label="facebook"
              >
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink
                to="//www.linkedin.com"
                target="_blank"
                aria-label="linkedin"
              >
                <FaLinkedin />
              </SocialIconsLink>
              <SocialIconsLink
                to="//www.github.com"
                target="_blank"
                aria-label="github"
              >
                <FaGithub />
              </SocialIconsLink>
              <SocialIconsLink
                to="//www.instagram.com"
                target="_blank"
                aria-label="instagram"
              >
                <FaInstagram />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWap>
        </SocialMedia>
      </FooterWrap>
    </FooterContaier>
  );
};

export default Footer;
