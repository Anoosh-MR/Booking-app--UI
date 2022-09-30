import React from "react";
import {
  Fp,
  Fpname,
  FpItems,
  FpImg,
  Fpcity,
  Fpprice,
  FpRating,
  FpButton,
  FpRatingText,
} from "../styles/FeaturedPropertiesStyled";

const FeaturedProperties = () => {
  return (
    <Fp>
      <FpItems>
        <FpImg
          src="https://www.keralatourism.org/images/homecontentimage/desktop/Waterfalls.jpg"
          alt="fpImage"
        />
        <Fpname>Jublis hotel</Fpname>
        <Fpcity>Kochi</Fpcity>
        <Fpprice>Starting from $120</Fpprice>
        <FpRating>
          <FpButton>8.9</FpButton>
          <FpRatingText>Exellent</FpRatingText>
        </FpRating>
      </FpItems>
      <FpItems>
        <FpImg
          src="https://www.keralatourism.org/images/homecontentimage/desktop/Waterfalls.jpg"
          alt="fpImage"
        />
        <Fpname>Jublis hotel</Fpname>
        <Fpcity>Kochi</Fpcity>
        <Fpprice>Starting from $120</Fpprice>
        <FpRating>
          <FpButton>8.9</FpButton>
          <FpRatingText>Exellent</FpRatingText>
        </FpRating>
      </FpItems>
      <FpItems>
        <FpImg
          src="https://www.keralatourism.org/images/homecontentimage/desktop/Waterfalls.jpg"
          alt="fpImage"
        />
        <Fpname>Jublis hotel</Fpname>
        <Fpcity>Kochi</Fpcity>
        <Fpprice>Starting from $120</Fpprice>
        <FpRating>
          <FpButton>8.9</FpButton>
          <FpRatingText>Exellent</FpRatingText>
        </FpRating>
      </FpItems>
      <FpItems>
        <FpImg
          src="https://www.keralatourism.org/images/homecontentimage/desktop/Waterfalls.jpg"
          alt="fpImage"
        />
        <Fpname>Jublis hotel</Fpname>
        <Fpcity>Kochi</Fpcity>
        <Fpprice>Starting from $120</Fpprice>
        <FpRating>
          <FpButton>8.9</FpButton>
          <FpRatingText>Exellent</FpRatingText>
        </FpRating>
      </FpItems>
    </Fp>
  );
};

export default FeaturedProperties;
