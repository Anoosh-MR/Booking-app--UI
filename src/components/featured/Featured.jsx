import React from "react";
import {
  FeaturedContainer,
  FeaturedItems,
  FeaturedTitle,
  FeaturedImage,
} from "../styles/FeaturedStyled";

const Featured = () => {
  return (
    <div>
      <FeaturedContainer>
        <FeaturedItems>
          <FeaturedImage
            src="https://media.timeout.com/images/105663600/750/422/image.jpg"
            alt="Featured"
          />
          <FeaturedTitle>
            <h1>Goa</h1>
            <h2>52 properties</h2>
          </FeaturedTitle>
        </FeaturedItems>

        <FeaturedItems>
          <FeaturedImage
            src="https://media.timeout.com/images/105663600/750/422/image.jpg"
            alt="Featured"
          />
          <FeaturedTitle>
            <h1>Goa</h1>
            <h2>52 properties</h2>
          </FeaturedTitle>
        </FeaturedItems>

        <FeaturedItems>
          <FeaturedImage
            src="https://media.timeout.com/images/105663600/750/422/image.jpg"
            alt="Featured"
          />
          <FeaturedTitle>
            <h1>Goa</h1>
            <h2>52 properties</h2>
          </FeaturedTitle>
        </FeaturedItems>
      </FeaturedContainer>
    </div>
  );
};

export default Featured;
