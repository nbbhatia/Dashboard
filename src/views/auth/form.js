import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as Yup from "yup";

import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Page from "src/components/Page";
import { login } from "../../store/action/signupaction";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const LoginView = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  let {
    values: { email, password },
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleSubmit,
    handleChange,
  } = props;
  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <Typography
                color="textPrimary"
                variant="h2"
                style={{ textAlign: "center" }}
              >
                Admin Sign in
              </Typography>
            </Box>

            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={email}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={password}
              variant="outlined"
            />
            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body1">
              Don&apos;t have an account?
              <Link component={RouterLink} to="/register" variant="h6">
                Sign up
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </Page>
  );
};
const mapStateToProps = ({ LoginReducer }) => {
  return { _login: LoginReducer };
};
// export default withRouter() LoginView;
export default connect(mapStateToProps, login)(LoginView);
