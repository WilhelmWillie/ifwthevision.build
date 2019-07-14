import Head from 'next/head';
import styled from 'styled-components';

export default () => (
  <Wrapper>
    <Head>
      <title>i fw the vision.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      <Title>i fw the vision.</Title>
      <LetsBuild>let's build.</LetsBuild>
      <Tease>You have no idea what this is but admit it:<br/>you're curious. Do u fw the vision?</Tease>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 95%;
  max-width: 480px;
`;

const Title = styled.h1`
  color: #FFFFFF;
  font-size: 42px;
  margin: 0;
`;

const LetsBuild = styled.h1`
  color: #507DBC;
  font-size: 48px;
  margin: 0;
`;

const Tease = styled.p`
  color: #ffffff;
  font-size: 18px;
  text-transform: lowercase;
`;
