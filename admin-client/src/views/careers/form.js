import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

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

const LoginView = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  let {
    values: { title, department, isActive },
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleSubmit,
    handleChange,
    auth,
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
                Add Open Positions
              </Typography>
            </Box>

            <TextField
              // error={Boolean(touched.email && errors.email)}
              fullWidth
              // helperText={touched.email && errors.email}
              label="title"
              margin="normal"
              name="title"
              onBlur={handleBlur}
              onChange={handleChange}
              // type="title"
              value={title}
              variant="outlined"
            />
            <TextField
              // error={Boolean(touched.password && errors.password)}
              fullWidth
              // helperText={touched.password && errors.password}
              label="department"
              margin="normal"
              name="department"
              onBlur={handleBlur}
              onChange={handleChange}
              type="department"
              value={department}
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
                Submit
              </Button>
            </Box>
            {/* <Typography color="textSecondary" variant="body1">
              Don&apos;t have an account?
              <Link component={RouterLink} to="/register" variant="h6">
                Sign up
              </Link>
            </Typography> */}
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
