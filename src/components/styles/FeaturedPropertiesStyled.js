import styled from "styled-components";

export const Fp = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const FpItems = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;
export const FpImg = styled.img`
  width: 240px;
  height: 300px;
  border-radius: 5px;
`;
export const Fpname = styled.span`
  font-weight: bold;
  padding-left: 5px;
`;
export const Fpcity = styled.span`
  font-weight: 300;
  padding-left: 5px;
`;
export const Fpprice = styled.span`
  font-weight: 500;
  padding-left: 5px;
`;
export const FpRating = styled.div``;
export const FpButton = styled.button`
  background-color: #003580;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const FpRatingText = styled.span`
  font-size: 15px;
`;
