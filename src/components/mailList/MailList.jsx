import React from "react";
import {
  Mail,
  MailTitle,
  MailListDesc,
  MailListInput,
  MailListBtn,
  InputContainer,
} from "../styles/MaillListStyled";

const MailList = () => {
  return (
    <Mail>
      <MailTitle>Save time, save money!</MailTitle>
      <MailListDesc>Sign up and we'll send the best deals to you</MailListDesc>
      <InputContainer>
        <MailListInput type="text" />
        <MailListBtn>Subscribe</MailListBtn>
      </InputContainer>
    </Mail>
  );
};

export default MailList;
