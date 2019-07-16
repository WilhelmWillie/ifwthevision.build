import React, { useRef, useState } from "react";
import styled from "styled-components";

import { emailsRef } from "config/firebase";

const SUCCESS_MESSAGE = `Your e-mail has been added to our e-mail list.`;

export default () => {
  const emailInput = useRef(null);
  const [submittedEmail, setSubmittedEmail] = useState(false);

  const onButtonClick = () => {
    const email = emailInput.current.value;
    emailsRef.push().set(email);
    setSubmittedEmail(true);

    // Clear input
    emailInput.current.value = "";
  };

  return (
    <React.Fragment>
      <InputContainer>
        <Input type="email" placeholder="your@email.com" ref={emailInput} />

        <Button onClick={onButtonClick}>build</Button>
      </InputContainer>

      {submittedEmail && (
        <SuccessMessage>
          <p>{SUCCESS_MESSAGE}</p>
        </SuccessMessage>
      )}
    </React.Fragment>
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
  border-radius: 0;
  border-width: 0;
  font-family: ${p => p.theme.font.family};
  font-size: 16px;
  flex-grow: 1;
  padding: 16px;
  margin: 0;
`;

const Button = styled.button`
  background-color: ${p => p.theme.colors.blue};
  border-radius: 0;
  border-width: 0;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.font.family};
  font-size: 16px;
  padding: 16px 24px;
  margin: 0;
`;

const SuccessMessage = styled.div``;
