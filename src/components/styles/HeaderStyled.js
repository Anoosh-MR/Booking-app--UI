import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";

export const Container = styled.div`
  background: #4a3a78;
  background: -webkit-linear-gradient(top left, #4a3a78, #1b1170);
  background: -moz-linear-gradient(top left, #4a3a78, #1b1170);
  background: linear-gradient(to bottom right, #4a3a78, #1b1170);
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 6px solid #e8aa42;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: ${(props) =>
    props.type ? "20px 0px 0px 0px " : "20px 0px 100px 0px"}; ;
`;

export const HListItems = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
`;

export const HTitle = styled.span`
  font-family: "Rubik", sans-serif;
  align-self: center;
`;

export const HListItem = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  text-decoration: none;
  &.active {
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
  }
`;

export const HeaderTitle = styled.h1``;

export const HeaderDiscription = styled.p`
  margin: 20px 0px;
`;
export const HeaderButton = styled.button`
  background: #4a3a78;
  background: -webkit-linear-gradient(top left, #4a3a78, #1b1170);
  background: -moz-linear-gradient(top left, #4a3a78, #1b1170);
  background: linear-gradient(to bottom right, #4a3a78, #1b1170);
  border-radius: 20px;
  border: 2px solid #1b1170;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inherit;
  font-family: "Space Grotesk", -apple-system, system-ui, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  min-height: 56px;
  min-width: 120px;
  padding: 16px 20px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    background-color: #065dd8;
    transform: translateY(-4px);
  }
`;

// SEARCHBAR

export const HeaderSearch = styled.div`
  height: 30px;
  background-color: #ffff;
  border: 4px solid #e8aa42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  border-radius: 10px;
  position: absolute;
  bottom: -28px;
  width: 100%;
  max-width: 1024px;
`;
export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
`;
export const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  color: black;
`;
export const HeaderIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: lightgrey;
`;
export const HeaderSearchText = styled.span`
  cursor: pointer;
  color: grey;
`;
export const HeaderSearchButton = styled.button`
  background-color: #0071c2;
  color: #fff !important;
  border: none;
  padding: 15px 60px;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    transform: translateX(+10px);
    background-color: #4a3a78;
  }
`;

// DATE PICKER

export const DatePicker = styled(DateRange)`
  position: absolute;

  top: 60px;
  left: 39vh;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2;
`;

// OPTIONS

export const Options = styled.div`
  top: ${(props) => (props.type ? "0px " : "60px")};
  position: ${(props) => (props.type ? "relative " : "absolute")};
  background-color: white;
  border-radius: 15px;
  color: grey;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2;
`;
export const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
export const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 12px;
`;
export const OptionText = styled.span`
  color: grey;
`;
export const OptionCountBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #f9f9f9;
  cursor: pointer;
  background-color: #efefef;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:disabled {
    cursor: not-allowed;
  }
`;
export const OptionCounterNumber = styled.span`
  cursor: context-menu;
`;
