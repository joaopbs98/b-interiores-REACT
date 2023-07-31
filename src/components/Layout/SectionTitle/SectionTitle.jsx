import React from "react";
import SectionCSS from "./styles.module.scss";

function About(props) {
  const content = props.content;
  return (
    <>
      <h2 className={SectionCSS.h2}>{content}</h2>
    </>
  );
}

export default About;
