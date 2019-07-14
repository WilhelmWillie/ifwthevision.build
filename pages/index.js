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
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  padding: 90px 0;
`;
