import React from "react";
// import { Grid } from "@material-ui/core";
import Banner from "../../assets/boy-reading-studying-books.jpg";
import CareerForm from "../Careerpage/RegisterView";
const Landing = () => {
  return (
    <div md={12} xs={12} sm={12} item container>
      <img
        src={Banner}
        alt="banner"
        style={{ height: "100vh", width: "100vw" }}
      />
      <CareerForm />
    </div>
  );
};

export default Landing;
