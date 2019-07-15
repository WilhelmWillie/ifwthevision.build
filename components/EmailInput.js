import { useRef } from "react";
import styled from "styled-components";

export default () => {
  const emailInput = useRef(null);

  const onButtonClick = () => {
    // TODO: Log e-mail to firebase
    const email = emailInput.current.value;
    console.log(`[EMAIL] Add ${email} to landing page email list`);

    // Clear input
    emailInput.current.value = "";
  };

  return (
    <InputContainer>
      <Input type="email" placeholder="your@email.com" ref={emailInput} />

      <Button onClick={onButtonClick}>build</Button>
    </InputContainer>
  );
};

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
