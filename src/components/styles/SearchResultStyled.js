import styled from "styled-components";

export const SearchItem = styled.div`
  border: 2px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 200px;
`;
export const SearchItemImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
export const SiDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;
export const SiTitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;
export const SiDistance = styled.span`
  font-size: 12px;
`;
export const SiTaxiOp = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;
export const SiSubtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
export const SiFeatures = styled.span`
  font-size: 12px;
`;
export const SiCancell = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;
export const SiCancelSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`;
export const SiDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RatingComponent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RatingBtn = styled.button`
  background-color: #003580;
  color: white;
  padding: 5px;
  font-weight: bold;
  border: none;
`;
export const Details = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const RatingText = styled.span`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Rate = styled.span`
  font-weight: 500;
  font-size: 24px;
`;
export const RadeSub = styled.span`
  font-size: 12px;
  color: gray;
`;
export const Button = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
