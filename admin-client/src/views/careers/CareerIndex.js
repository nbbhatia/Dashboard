import { Button, Typography, Grid } from "@material-ui/core";
import React from "react";
// import data from "../customer/CustomerListView/data";

let data = [
  { href: "/app/listAllVacancy", title: "Careers" },
  { href: "/allApplications", title: "Applications" },
  { href: "/app/allOpening", title: "Add Opening" },
];
const CareerIndex = () => {
  return (
    <Grid container item md={12} xs={12} sm={12} justify="space-around">
      {data.map((obj, i) => (
        <Grid md={3}>
          <Button variant="contained" style={{ marginTop: "2em" }}>
            <a href={obj.href}>
              <Typography>{obj.title}</Typography>
            </a>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default CareerIndex;
