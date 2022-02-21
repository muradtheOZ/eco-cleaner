import React from "react";
import "./UpperBanner.css";

const UpperBanner = () => {
  return (
    <div className="upper-banner UpperBanner-bg mt-5">
      <div className="m-5 p-5">
          <div className="row d-flex justify-content-between">
            <div className=" d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-fixed-hight my-auto mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p>Have a question Call us now</p>
                <h5>+8801735453195</h5>
              </div>
            </div>

            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-fixed-hight my-auto mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p>Need cleaning?Our main address </p>
                <h5>Brahmanbaria, Bangladesh</h5>
              </div>
            </div>

            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-fixed-hight my-auto mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p>We are open monday-Friday</p>
                <h5>8:00 - 18:00</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default UpperBanner;
