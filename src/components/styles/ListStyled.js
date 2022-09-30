import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ListWraper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20;
`;
export const ListSearch = styled.div`
  flex: 1;

  background: rgb(3, 21, 55);
  background: linear-gradient(
    317deg,
    rgba(3, 21, 55, 1) 0%,
    rgba(21, 20, 75, 1) 51%,
    rgba(0, 53, 128, 1) 100%
  );
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
`;
export const ListSearchTitle = styled.h1`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;
export const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;
export const SearchInputLabel = styled.label`
  font-size: 12px;
  color: white;
`;

export const SearchInput = styled.input`
  height: 30px;
  border: inset;
  padding: 5px;
  border-radius: 10px;
`;
export const DestinatinSpan = styled.span`
  height: 30px;
  border: 1px solid black;
  padding: 5px;
  justify-content: center;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  background: rgb(55, 108, 144);
  background: linear-gradient(
    317deg,
    rgba(55, 108, 144, 1) 13%,
    rgba(73, 72, 161, 1) 51%,
    rgba(54, 57, 139, 1) 96%
  );
`;
export const IsOptionItem = styled.div`
  display: flex;
  justify-content: space-between;

  color: white;
  font-size: 13px;
  align-items: center;
  padding: 10px;
`;
export const SearchSpan = styled.span``;

export const IsOptionInput = styled.input`
  width: 60px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
`;
export const SearchButton = styled.button`
  padding: 10px;
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  background-color: #0071c2;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;

  &:hover {
    background: rgb(108, 133, 180);
    background: linear-gradient(
      317deg,
      rgba(108, 133, 180, 1) 0%,
      rgba(73, 72, 161, 1) 51%,
      rgba(116, 117, 138, 1) 100%
    );
  }
`;
// //////////list result/////////////
export const ListResult = styled.div`
  margin-left: 20px;
  display: flex;
  flex: 3;
`;

export const it = styled.div``;
