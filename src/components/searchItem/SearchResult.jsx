import React from "react";
import {
  SearchItem,
  SearchItemImage,
  SiDesc,
  SiTitle,
  SiDistance,
  SiTaxiOp,
  SiSubtitle,
  SiFeatures,
  SiCancell,
  SiCancelSubtitle,
  SiDetails,
  RatingComponent,
  RatingText,
  Rate,
  RadeSub,
  Button,
  RatingBtn,
  Details,
} from "../styles/SearchResultStyled";

const SearchResult = () => {
  return (
    <SearchItem>
      <SearchItemImage
        src="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
        alt="hotelroom"
      />
      <SiDesc>
        <SiTitle>Town streat appartment</SiTitle>
        <SiDistance>500m from center</SiDistance>
        <SiTaxiOp>Free Airport taxi</SiTaxiOp>
        <SiSubtitle> Studio Appartment with Aircondetioning</SiSubtitle>
        <SiFeatures>Entire studio - 1bathroom - 21m² 1full bed</SiFeatures>
        <SiCancell>Free Cancelation</SiCancell>
        <SiCancelSubtitle>
          You Can cancel later,so lock in great price todat!
        </SiCancelSubtitle>
      </SiDesc>
      <SiDetails>
        <RatingComponent>
          <RatingText>Exellent</RatingText>
          <RatingBtn>8.5</RatingBtn>
        </RatingComponent>
        <Details>
          <Rate>$112</Rate>
          <RadeSub>Include tax and fees</RadeSub>
          <Button>See availability</Button>
        </Details>
      </SiDetails>
    </SearchItem>
  );
};

export default SearchResult;
