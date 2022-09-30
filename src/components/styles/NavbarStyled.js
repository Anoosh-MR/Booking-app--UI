import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background: #4a3a78;
  background: -webkit-linear-gradient(top left, #4a3a78, #1b1170);
  background: -moz-linear-gradient(top left, #4a3a78, #1b1170);
  background: linear-gradient(to bottom right, #4a3a78, #1b1170);

  display: flex;
  justify-content: center;
`;

export const Navcontainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavIcon = styled.h2`
  font-family: "Pacifico", cursive;
  font-weight: 1000;
`;

export const NavButton = styled.button`
width:100px;
  color:${(props) => (props.teal ? "#181818" : "#E8F9FD")};
  cursor: pointer;
  border:none;
  border-radius: 10px;
  margin-left: 20px;
  padding: 7px 12px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  transition: 0.4s;
  background-color:${(props) => (props.teal ? "#e4ee8f" : "#b24c69")} ;

  &:hover {
    color: "white"
    width: ;
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
    background-color: ${(props) => (props.teal ? "#E8F9FD" : "#181818")};
    transform: translateY(-4px);
  
`;
