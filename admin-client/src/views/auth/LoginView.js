import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Drawer, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Form from "./form";
// import { validation } from "./validation.js";
import { login, authCheck } from "../../store/action/signupaction";
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
  const [submit, setsubmit] = useState(false);
  const [resume, setresume] = useState();
  const [login, setlogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.LoginReducer);

  // useEffect(() => {
  //   dispatch(authCheck());
  // }, []);

  const { close, classes, _auth } = props;

  const initialval = {
    email: "",
    password: "",
  };

  const handleFile = (url) => {
    setresume(url);
  };

  const handleSubmit = (val) => {
    props.login({
      email: val.email,
      password: val.password,
    });
    // dispatch(authCheck());
    setsubmit(true);
    // if (authStatus.sucess) {
    //   navigate("/app/dashboard");
    // }
  };

  return (
    <Grid md={12} sm={12} xs={12} item container justify="center">
      <Grid md={8} item container justify="center" style={{ marginTop: 100 }}>
        <Formik
          initialValues={initialval}
          close={close}
          onSubmit={handleSubmit}
          response={login}
          auth={_auth}
        >
          {(props) => <Form {...props} ResumeFile={(url) => handleFile(url)} />}
        </Formik>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = ({ LoginReducer, authCheckReducer }) => {
  return { _login: LoginReducer, _auth: authCheckReducer };
};
export default connect(mapStateToProps, { login, authCheck })(
  withStyles(style)(SignUpForm)
);
