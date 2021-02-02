import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const RegisterForm = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  let {
    values: { email, password, firstName, lastName },
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleSubmit,
    handleChange,
  } = props;
  return (
    <Page className={classes.root} title="Register">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <Typography color="textPrimary" variant="h2">
                Create new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(touched.firstName && errors.firstName)}
              fullWidth
              helperText={touched.firstName && errors.firstName}
              label="First name"
              margin="normal"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.lastName && errors.lastName)}
              fullWidth
              helperText={touched.lastName && errors.lastName}
              label="Last name"
              margin="normal"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={lastName}
              variant="outlined"
            />
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
                Sign up now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body1">
              Have an account?
              <Link component={RouterLink} to="/login" variant="h6">
                Sign in
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </Page>
  );
};
// const mapStateToProps = ({ LoginReducer }) => {
//   return { _login: LoginReducer };
// };
// export default withRouter() LoginView;
export default RegisterForm;
