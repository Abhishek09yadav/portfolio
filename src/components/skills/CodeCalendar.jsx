import React from "react";
import GitHubCalendar from "react-github-calendar";
const CodeCalendar = () => {
  return (
    <div className="text-white justify-center items-center text-center flex flex-col space-y-4 my-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        Days I{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Code
        </span>
      </h2>
      <div className="w-full  overflow-x-auto p-3">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full min-w-[350px]">
          <GitHubCalendar
            username="abhishek09yadav"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeCalendar;
