
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import DarkSection from "views/index-sections/DarkSection.js";
import SectionLogin from "views/index-sections/SectionLogin"
import '../assets/css/app.css'

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionJavaScript />
        <SectionCarousel />
        <DarkSection />
        <SectionLogin />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
