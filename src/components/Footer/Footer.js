import React from 'react'
import { FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinkTitle,
        FooterLinkItems,
        FooterLink} from './FooterElements'  


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About us </FooterLinkTitle>
                        <FooterLink to="/about">Signin</FooterLink>
                        <FooterLink to="/services">Details</FooterLink>
                        <FooterLink to="/about">About</FooterLink>
                        <FooterLink to="/signin">News</FooterLink>
                        <FooterLink to="/signin">PArtners</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contanct  </FooterLinkTitle>
                        <FooterLink to="/about">Signin2</FooterLink>
                        <FooterLink to="/services">Details2</FooterLink>
                        <FooterLink to="/about">About2</FooterLink>
                        <FooterLink to="/signin">News2</FooterLink>
                        <FooterLink to="/signin">PArtners2</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About us2 </FooterLinkTitle>
                        <FooterLink to="/about">Signin</FooterLink>
                        <FooterLink to="/services">Details</FooterLink>
                        <FooterLink to="/about">About</FooterLink>
                        <FooterLink to="/signin">News</FooterLink>
                        <FooterLink to="/signin">PArtners</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contanct2  </FooterLinkTitle>
                        <FooterLink to="/about">Signin2</FooterLink>
                        <FooterLink to="/services">Details2</FooterLink>
                        <FooterLink to="/about">About2</FooterLink>
                        <FooterLink to="/signin">News2</FooterLink>
                        <FooterLink to="/signin">PArtners2</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
