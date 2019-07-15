import Head from "next/head";
import styled from "styled-components";

import { Landing } from "components";

export default () => (
  <Wrapper>
    <Head>
      <title>i fw the vision.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Landing />
    <Footer>
      <FooterLink
        href="//twitter.com/wilhelm_willie"
        target="_blank"
        rel="noopener"
      >
        @wilhelm_willie
      </FooterLink>
      <FooterLink
        href="http://wilhelmwillie.com"
        target="_blank"
        rel="noopener"
      >
        wilhelmwillie.com
      </FooterLink>
    </Footer>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  padding: 90px 25px;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
`;

const FooterLink = styled.a`
  color: ${p => p.theme.colors.white};
  padding: 0 8px;
  opacity: 0.3;
  text-decoration: none;
`;
