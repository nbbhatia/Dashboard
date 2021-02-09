import React, { Component } from "react";
import { Formik } from "formik";
import { Grid, Dialog } from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Form from "./registerform";

import { jobApplyAction } from "../../store/action/signupaction";
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

class signUpForm extends Component {
  state = {
    submit: false,
    resume: "",
    login: false,
  };

  render() {
    const { _apply, open, onClose } = this.props;

    const initialval = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      Qualification: "",
      totalExperince: "",
      currentCTC: "",
      expectedCTC: "",
    };

    const handleSubmit = (val) => {
      this.props.jobApplyAction({
        firstName: val.firstName,
        lastName: val.lastName,
        email: val.email,
        phoneNumber: val.phoneNumber,
        Qualification: val.Qualification,
        totalExperince: val.totalExperince,
        currentCTC: val.currentCTC,
        expectedCTC: val.expectedCTC,
      });

      this.setState({
        submit: true,
      });
      onClose();
    };

    return (
      <Grid md={12} sm={12} xs={12} item container justify="center">
        <Grid md={8} item container justify="center">
          <Dialog open={open} onClose={onClose}>
            <Formik initialValues={initialval} onSubmit={handleSubmit}>
              {(props) => <Form {...props} />}
            </Formik>
          </Dialog>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = ({ jobApplyReducer }) => {
  return { _apply: jobApplyReducer };
};
export default connect(mapStateToProps, { jobApplyAction })(
  withStyles(style)(signUpForm)
);
