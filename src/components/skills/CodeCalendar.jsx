import React from 'react'
import GitHubCalendar from "react-github-calendar";
const CodeCalendar = () => {
  return (
    <div className="text-white justify-center items-center text-center flex flex-col space-y-4 my-6">
      <div className="text-center text-4xl font-semibold">
        Days I <span className="text-purple-600 ">Code</span>
      </div>
      <GitHubCalendar
        username="abhishek09yadav"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default CodeCalendar
