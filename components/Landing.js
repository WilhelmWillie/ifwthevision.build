import styled from "styled-components";

export default () => (
  <Container>
    <Title>i fw the vision.</Title>
    <LetsBuild>let's build.</LetsBuild>
    <Tease>
      You have no idea what this is but admit it:
      <br />
      you're curious.
      <br />
      <Impact>Do u fw the vision?</Impact>
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

const Tease = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: 18px;
  text-transform: lowercase;
  line-height: 28px;
`;

const Impact = styled.span`
  color: ${p => p.theme.colors.blue};
  font-weight: bold;
`;
