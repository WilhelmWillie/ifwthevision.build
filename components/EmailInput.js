import styled from "styled-components";

export default () => (
  <InputContainer>
    <Input type="email" placeholder="your@email.com" />

    <Button>build</Button>
  </InputContainer>
);

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  width: 100%;
  max-width: 320px;

  ${p => p.theme.media.tablet`{
    max-width: 100%;
  }`}
`;

const Input = styled.input`
  border-width: 0;
  font-family: ${p => p.theme.font.family};
  font-size: 16px;
  flex-grow: 1;
  padding: 16px;
`;

const Button = styled.button`
  background-color: ${p => p.theme.colors.blue};
  border-width: 0;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.font.family};
  font-size: 16px;
  padding: 16px 24px;
`;
