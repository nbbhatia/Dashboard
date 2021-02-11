import React, { useState } from "react";
import Banner from "../../assets/boy-reading-studying-books.jpg";
import GetALlVacancy from "./getAlvacancy";
const Landing = () => {
  const [open, setOpen] = useState(false);

  return (
    <div md={12} xs={12} sm={12} item container>
      <img
        src={Banner}
        alt="banner"
        style={{ height: "100vh", width: "100vw" }}
      />
      <GetALlVacancy />
    </div>
  );
};

export default Landing;
