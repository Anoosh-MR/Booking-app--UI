import styled from "styled-components";

export const FeaturedContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
`;
export const FeaturedItems = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const FeaturedImage = styled.img`
  width: 100%;
  object-fit: cover;
  display: flex;
  gap: 10px;
  height: 300px;
`;

export const FeaturedTitle = styled.div`
  position: absolute;
  bottom: 2px;
  left: 2px;
`;
