import styled from "styled-components";
import { EmailInput } from "components";

export default () => (
  <Container>
    <Title>i fw the vision.</Title>
    <LetsBuild>let's build.</LetsBuild>
    <Tease>
      You have no idea what this is but admit it: you're curious.
      <Impact>Do u fw the vision?</Impact>
      <EmailInput />
    </Tease>
  </Container>
);

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  color: ${p => p.theme.colors.white};
  font-size: 42px;
  margin: 0;

  ${p => p.theme.media.tablet`{
      font-size: 32px;
    }`}
`;

const LetsBuild = styled.h1`
  color: ${p => p.theme.colors.yellow};
  font-size: 48px;
  margin: 0;

  ${p => p.theme.media.tablet`{
      font-size: 32px;
    }`}
`;

const Tease = styled.div`
  color: ${p => p.theme.colors.white};
  font-size: 18px;
  text-transform: lowercase;
  line-height: 28px;
  width: 100%;
`;

const Impact = styled.span`
  display: flex;
  color: ${p => p.theme.colors.blue};
  font-weight: bold;
  margin-top: 16px;
`;
