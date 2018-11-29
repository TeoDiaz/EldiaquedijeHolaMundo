import React from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import ImgSvg from "./ImgSvg";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="El dia que dije Hola Mundo" />
    <Header />
    <ImgSvg />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
