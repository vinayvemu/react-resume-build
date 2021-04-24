import React from "react";
import "./style.css";
import Resume from "./Resume/index";
import { ResumeWrapper } from "./Resume/ResumeCSS";

export default function App() {
  return (
    <ResumeWrapper>
      <Resume />
    </ResumeWrapper>
  );
}
