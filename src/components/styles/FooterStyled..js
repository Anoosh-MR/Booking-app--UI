import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  font-size: 15px;
`;
export const FLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
export const FList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ListItem = styled.li`
  margin-bottom: 10px;
  color: #003580;
  cursor: pointer;
`;

export const Copyright = styled.div`
  width: 100%;
  height: 100px;
  background: #4a3a78;
  background: -webkit-linear-gradient(top left, #4a3a78, #1b1170);
  background: -moz-linear-gradient(top left, #4a3a78, #1b1170);
  background: linear-gradient(to bottom right, #4a3a78, #1b1170);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
`;
