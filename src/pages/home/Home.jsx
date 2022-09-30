import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Propertylist from "../../components/propertylist/Propertylist";
import MailList from "../../components/mailList/MailList";
import { HomeContainer, HomeTitle } from "../../components/styles/HomeStyled";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <HomeContainer>
        <Featured />
        <HomeTitle>Browse By Property Type</HomeTitle>
        <Propertylist />
        <HomeTitle>Homes Guests Love</HomeTitle>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </HomeContainer>
    </div>
  );
};

export default Home;
