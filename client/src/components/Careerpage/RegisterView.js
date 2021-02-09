import React, { Component } from "react";
import { Formik } from "formik";
import { Grid, Typography, Drawer, IconButton } from "@material-ui/core";
// import { withRouter } from "react-router";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Form from "./registerform";
// import { validation } from "./validation.js";
import { login } from "../../store/action/signupaction";
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
    // const { open, close, classes, _signUp, jobTitle } = this.props;

    const initialval = {
      email: "",
      name: "",
      password: "",
    };

    const handleSubmit = (val) => {
      this.props.signUp({
        email: val.email,
        name: val.firstName,
        password: val.password,
      });

      this.setState({
        submit: true,
      });
    };

    return (
      <Grid md={12} sm={12} xs={12} item container justify="center">
        <Grid md={8} item container justify="center">
          <Formik
            initialValues={initialval}
            onSubmit={handleSubmit}
            // validationSchema={Yup.object().shape({
            //   email: Yup.string()
            //     .email("Must be a valid email")
            //     .max(255)
            //     .required("Email is required"),
            //   firstName: Yup.string()
            //     .max(255)
            //     .required("First name is required"),
            //   lastName: Yup.string().max(255).required("Last name is required"),
            //   password: Yup.string().max(255).required("password is required"),
            //   policy: Yup.boolean().oneOf([true], "This field must be checked"),
            // })}
            // onSubmit={() => {
            //   navigate("/app/dashboard", { replace: true });
            // }}
          >
            {(props) => <Form {...props} />}
          </Formik>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = ({ SignUpReducer }) => {
  return { _signUp: SignUpReducer };
};
export default connect(mapStateToProps, { login })(
  withStyles(style)(signUpForm)
);
// export default signUpForm;
