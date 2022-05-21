import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../../App";
import Contact from "../Contact/Contact";
import { FooterContainer } from "../Footer/Footer";
import Header from "../Header/Header";
import Review from "../Review/Review";
import Service from "../Service/Service";
import LoadSpin from "../LoadSpin/LoadSpin";
import { useEffect } from "react";
import "./Home.css";
import UpperBanner from "../UpperBanner/UpperBanner";
import OurSuccessStory from "../OurSuccessStory/OurSuccesStory";
import AboutUS from "../AboutUS/AboutUS";
import CustomBooking from "../CustomBooking/CustomBooking";

const Home = () => {
  const { value, value1, value2 } = useContext(UserContext);
  const [loader, setLoader] = value1;
  const [services, setServices] = value2;

  return (
    <div>
      <Header></Header>
      <AboutUS></AboutUS>
      <UpperBanner></UpperBanner>
      {loader ? (
        <div className="custom-spinner pt-4 mt-4">
          <LoadSpin />
        </div>
      ) : (
        <div>
          {" "}
          <Service></Service>
        </div>
      )}
      <OurSuccessStory></OurSuccessStory>
      <CustomBooking></CustomBooking>
      {loader?(
          <div className="custom-spinner pt-4 mt-4">
          <LoadSpin />
        </div>
      ):(
          <div>
            <Review></Review>
          </div>
      )}
      <Contact></Contact>
      <FooterContainer />
    </div>
  );
};

export default Home;
