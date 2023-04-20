import React from "react";

const Banner = () => {
  return (
    <div className="md:flex md:flex-row-reverse md:gap-10 md:mx-0 mx-3">
        <img className="w-full rounded-lg" src="https://i.ibb.co/7Y9BbT6/image.png" alt="image" border="0" />
      <div>
        <h3 className="md:text-7xl text-5xl md:mt-0 mt-5 font-bold">
          Connecting You to Your <br />
          <span className="text-gradient">
             Dream Career
          </span>
        </h3>
        <p className="my-5 text-gray-500">
          "Job Central Online is the leading job portal for professionals
          seeking new career opportunities. Our platform features a vast
          selection of job listings across all industries, so you can find the
          perfect job for you."
        </p>
        <button className="button-primary">Get Started</button>
      </div>
      
    </div>
  );
};

export default Banner;
