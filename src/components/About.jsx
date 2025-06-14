import React from "react";
import { BannerImage } from "./Banner";
const heading = "About Me";
const About = () => {
  return (
    <div className="h-screen ">
      <BannerImage
        heading={heading}
        bannerImage={"/logo.png"}
      />
    </div>
  );
};

export default About;

