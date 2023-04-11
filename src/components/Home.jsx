import React from "react";
import Navbar from "./Navbar";
import Uploadfile from "./Uploadfile";

export default function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Uploadfile />
      </div>
    </>
  );
}
