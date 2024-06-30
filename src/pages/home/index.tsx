import dynamic from "next/dynamic";
import React, {useState} from "react";

const CustomEditor = dynamic(() => import("@/components/CustomEditor"), {
  ssr: false,
});

const Home: React.FC = () => {
  const [contents, setContents] = useState("");
  
  return (
    <div>
      <h1>Post Editor</h1>
      <CustomEditor set Data={contents} />
    </div>
  );
};

export default Home;
