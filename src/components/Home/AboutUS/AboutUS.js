import React from "react";
import "./AboutUS.css";
import aboutUs from "../../../assets/about.jpg";
import wipe from "../../../assets/wipe.jpg";

const AboutUS = () => {
  return (
    <div className="mt-5 pt-5 ml-5 mr-4">
      <div className="row">
        <div className="about-us-left-img col-md-6">
          <div className="p-5 ml-5 mt-4">
            <img src={aboutUs} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-5 ml-5 mt-4">
            <h3 className="mb-1" style={{ color: "#7AB259" }}>
              About us
            </h3>
            <hr style={{width:"10%",borderWidth: "4px",borderColor: "#7AB259",color: "#7AB259",textAlign:"left",marginLeft:"0",marginBottom: "2em"}}></hr>
            <h2 className="mb-5 bold">
              We Are Your{" "}
              <span style={{ color: "#7AB259" }}>Fast, Simple, </span> & Safe
              Way to a Clean Home
            </h2>
            <p className="mb-4 mt-2">
              Nor is there anyone who loves or pursues or desires to obtain pain
              beat ofitself, because it is pain, but occasionally ircumstances
              occur in which toil and pain can procure him some great pleasure.
            </p>
            <hr style={{width:"10%",height:"5px",borderWidth: "4px",borderColor: "#7AB259",color: "#7AB259",textAlign:"left",marginLeft:"0",marginBottom: "3em"}}></hr>
            <div className="wipe-image-design">
            <div className="d-flex my-4">
              <img src={wipe} alt="" />
              <h6>Advanced methods and cleaning techniques</h6>
            </div>
            <div className="d-flex my-4">
              <img src={wipe} alt="" />
              <h6>Trained, bonded, and insured cleaning professionals</h6>
            </div>
            <div className="d-flex my-4">
              <img src={wipe} alt="" />
              <h6>We Offer Award-Worthy House Cleaning Services</h6>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
