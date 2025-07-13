import AboutHeading from "@/components/about/AboutHeading";
import MyTimeline from "@/components/about/MyTimeline";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
const Page = () => {
  return (
    <>
      <div className="z-10 flex flex-col relative min-h-screen items-center justify-center px-4 md:px-16 text-white mt-16">
        <AboutHeading />
        <MyTimeline />
      </div>
      <Footer />
    </>
  );
};

export default Page;
