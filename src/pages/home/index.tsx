import dynamic from "next/dynamic";
import React from "react";

const CustomEditor = dynamic(() => import("@/components/CustomEditor"), {
  ssr: false,
});

const Home: React.FC = () => {
  
  return (
    <div>
      <h1>Post Editor</h1>
      <CustomEditor />
    </div>
  );
};

export default Home;
