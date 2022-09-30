import styled from "styled-components";

export const Mail = styled.div`
  width: 100%;
  background: #4a3a78;
  background: -webkit-linear-gradient(top left, #4a3a78, #1b1170);
  background: -moz-linear-gradient(top left, #4a3a78, #1b1170);
  background: linear-gradient(to bottom right, #4a3a78, #1b1170);
  gap: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
export const MailTitle = styled.h1`
  color: white;
`;
export const InputContainer = styled.div``;
export const MailListDesc = styled.span`
  color: white;
`;
export const MailListInput = styled.input`
  width: 300px;
  height: 35px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
`;
export const MailListBtn = styled.button`
  background-color: #0071c2;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 20px 30px;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
