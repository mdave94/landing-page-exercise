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
                        <FooterLink to="#">Signin</FooterLink>
                        <FooterLink to="#">Details</FooterLink>
                        <FooterLink to="#">About</FooterLink>
                        <FooterLink to="#">News</FooterLink>
                        <FooterLink to="#">PArtners</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contanct  </FooterLinkTitle>
                        <FooterLink to="#">Signin2</FooterLink>
                        <FooterLink to="/#">Details2</FooterLink>
                        <FooterLink to="#">About2</FooterLink>
                        <FooterLink to="#">News2</FooterLink>
                        <FooterLink to="#">PArtners2</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>About us </FooterLinkTitle>
                        <FooterLink to="#">Signin</FooterLink>
                        <FooterLink to="#">Details</FooterLink>
                        <FooterLink to="#">About</FooterLink>
                        <FooterLink to="#">News</FooterLink>
                        <FooterLink to="#">PArtners</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contanct  </FooterLinkTitle>
                        <FooterLink to="#">Signin2</FooterLink>
                        <FooterLink to="/#">Details2</FooterLink>
                        <FooterLink to="#">About2</FooterLink>
                        <FooterLink to="#">News2</FooterLink>
                        <FooterLink to="#">PArtners2</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
