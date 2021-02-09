import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
// import { Grid } from "@material-ui/core";
import Banner from "../../assets/boy-reading-studying-books.jpg";
import CareerForm from "../Careerpage/RegisterView";
const Landing = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleclose = () => {
    setOpen(false);
  };
  return (
    <div md={12} xs={12} sm={12} item container>
      <img
        src={Banner}
        alt="banner"
        style={{ height: "100vh", width: "100vw" }}
      />
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{ background: "tomato", margin: "50px 0px" }}
      >
        <Typography>Resume</Typography>
      </Button>
      <CareerForm open={open} onClose={handleclose} />
    </div>
  );
};

export default Landing;
