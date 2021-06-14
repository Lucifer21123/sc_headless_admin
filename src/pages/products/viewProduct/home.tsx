import React from "react";

//! sections
import ViewProductSection from "../viewProduct/sections/index";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="main-content">
          <ViewProductSection></ViewProductSection>
        </div>
      </div>
    </>
  );
}
