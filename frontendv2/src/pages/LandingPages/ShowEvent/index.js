/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Contact from "pages/LandingPages/ShowEvent/sections/Contact";
import Footer from "pages/LandingPages/ShowEvent/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

function ShowEvent() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // transparent
        // light
      />
      <MKBox bgColor="dark">
   
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default ShowEvent;
