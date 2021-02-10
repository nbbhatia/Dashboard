import React from "react";
import { Formik } from "formik";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Form from "./form";
import { openVacancy } from "../../store/action/signupaction";
const style = (theme) => ({
  paper: {
    background: "#fff",
    width: "65%",
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
      height: "90%",
    },
  },
  closeButton: {
    height: 0,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  formText: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "Nunito Sans",
    // width: 460,
    paddingBottom: 40,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  blessingText: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "Nunito Sans",
    width: "max-content",
  },
  ThanksGrid: {
    display: "block",
  },
});

const SignUpForm = (props) => {
  const { close, classes, _openvacancy } = props;

  const initialval = {
    title: "",
    department: "",
    isActive: "",
  };

  const handleSubmit = (val) => {
    props.openVacancy({
      title: val.title,
      department: val.department,
      isActive: true,
    });
  };

  return (
    <Grid md={12} sm={12} xs={12} item container justify="center">
      <Grid md={8} item container justify="center" style={{ marginTop: 100 }}>
        {_openvacancy.status !== 200 ? (
          <Formik
            initialValues={initialval}
            close={close}
            onSubmit={handleSubmit}
          >
            {(props) => <Form {...props} />}
          </Formik>
        ) : (
          <Typography>Post added SuccessFully</Typography>
        )}
      </Grid>
    </Grid>
  );
};
const mapStateToProps = ({ openVacancyReducer }) => {
  return { _openvacancy: openVacancyReducer };
};
export default connect(mapStateToProps, { openVacancy })(
  withStyles(style)(SignUpForm)
);
