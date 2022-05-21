import React, { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Select from "react-select";
import { UserContext } from "../../../App";
import "./CustomBooking.css";

const CustomBooking = () => {
  const [type, setType] = useState("");
  const [firstOption, setFirstOption] = useState([]);
  const [secondOption, setSecondOption] = useState([]);
  const [thirdOption, setThirdOption] = useState([
    {
      value: "renwal",
      label: "Want auto renwal",
    },
    { vaule: "oneTime", label: "Want one time" },
  ]);
  let priceCalculator;
  if (secondOption.length > 0) {
    priceCalculator = firstOption * secondOption;
  } else {
    priceCalculator = firstOption;
  }
  const roomValue = (value) => {
    console.log("this is the selection value", value.value);
    setType(value.label);
    if (value.value == "home") {
      setFirstOption([
        { value: 2000, label: "1000 square fit" },
        { value: 2200, label: "1500 square fit" },
        { value: 2500, label: "2000 square fit" },
        { value: 3000, label: "2500 square fit" },
        { value: 3500, label: "3000 square fit" },
      ]);
      setSecondOption([
        { value: 1, label: "two Room" },
        {
          value: 1.2,
          label: "three Room",
        },
        { value: 1.5, label: "four Room" },
        { value: 1.7, label: "five Room" },
        { value: 1.9, label: "six Room" },
        { value: 2, label: "seven Room" },
      ]);
    } else if (value.value == "sofa") {
      setFirstOption([
        { value: 500, label: "One sofa" },
        { value: 1000, label: "Two sofa" },
        { value: 1200, label: "Three sofa" },
        { value: 1500, label: "Four sofa" },
        { value: 2000, label: "Five sofa" },
        { value: 2500, label: "Six sofa" },
      ]);
      setSecondOption([
        { value: 1, label: "Cotton" },
        {
          value: 1.1,
          label: "Leather",
        },
      ]);
    } else if (value.value == "bathroom") {
      setFirstOption([
        { value: 100, label: "One bathroom" },
        { value: 200, label: "Two bathroom" },
        { value: 300, label: "Three bathroom" },
        { value: 400, label: "Four bathroom" },
        { value: 500, label: "Five bathroom" },
        { value: 600, label: "Six bathroom" },
      ]);
      setSecondOption([
        { value: 1, label: "high commode" },
        { value: 1.12, label: "Regular commode" },
      ]);
    } else if (value.value == "kitchen") {
      setFirstOption([
        { value: 300, label: "small kitchen(12/12 size)" },
        { value: 600, label: "medium kitchen(15/20 size)" },
        { value: 1000, label: "Large kitchen(more then 15/20 size)" },
      ]);
      setSecondOption([
        { value: 1, label: "No extra" },
        { value: 1.22, label: "clean Top Machine" },
      ]);
    }
  };

  const choseCleaning = [
    { value: "home", label: "Home Cleaning" },
    { value: "sofa", label: "Sofa Clean" },
    { value: "bathroom", label: "Bathroom clean" },
    { value: "kitchen", label: "kitchen clean" },
  ];

  const firstOptionHandler = (value) => {
    setFirstOption(value.value);
  };

  const secondOptionHandler = (value) => {
    setSecondOption(value.value);
  };
  const thirdOptionHandler = (value) => {};
  const history = useHistory();

  const { value3 } = useContext(UserContext);
  const [order, setOrder] = value3;

  const handleBuyService = () => {
    setOrder({
      name: type,
      price: priceCalculator,
      status: "pending",
    });
    console.log(priceCalculator);
    history.push(`/order/${type}`);
  };

  return (
    <div id="booking" className="booking">
        <h2 className="text-center mb-5 pb-5">Make Custom Booking</h2>
      <div id="booking" className="container custom-calculator-bg">
        <div>
          <div className="pt-5 pb-5 mt-3 mb-3 pl-3 pr-2 mr-2 ml-2">
            <h4 className="text-center text-white mb-5 pb-3">
              Want Custom Package? Make custom booking from below
            </h4>
            <div className="row">
              <div className="col-md-3">
                <h6 className="text-white mb-2 pb-1">
                  Select your cleaning type
                </h6>
                <Select
                  onChange={(e) => roomValue(e)}
                  options={choseCleaning}
                />
              </div>

              <div className="col-md-3">
                <h6 className="text-white mb-2 pb-1">Choose option</h6>
                <Select
                  onChange={(e) => firstOptionHandler(e)}
                  options={firstOption}
                />
              </div>

              <div className="col-md-3">
                <h6 className="text-white mb-2 pb-1">Choose option</h6>
                <Select
                  onChange={(e) => secondOptionHandler(e)}
                  options={secondOption}
                />
              </div>

              <div className="col-md-3">
                <h6 className="text-white mb-2 pb-1">Choose option</h6>
                <Select
                  onChange={(e) => thirdOptionHandler(e)}
                  options={thirdOption}
                />
              </div>
            </div>

            <h4 className="text-center text-white mt-5 mb-3">
              Your total price: {priceCalculator}
            </h4>
            <div className="text-center mt-5 mb-2">
              <p className="btn btn-light" onClick={handleBuyService}>
                book Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBooking;
