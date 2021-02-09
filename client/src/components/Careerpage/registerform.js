import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     height: "100%",
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3),
//   },
// }));

const RegisterForm = (props) => {
  // const classes = useStyles();
  // const navigate = useNavigate();
  let {
    values: {
      firstName,
      lastName,
      email,
      phoneNumber,
      Qualification,
      totalExperince,
      currentCTC,
      expectedCTC,
    },
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleSubmit,
    handleChange,
  } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      style={{ marginTop: 100 }}
    >
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <Typography color="textPrimary" variant="h4">
              Submit your Application
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
            // error={Boolean(touched.email && errors.email)}
            fullWidth
            // helperText={touched.email && errors.email}
            label="phoneNumber"
            margin="normal"
            name="phoneNumber"
            onBlur={handleBlur}
            onChange={handleChange}
            value={phoneNumber}
            variant="outlined"
          />

          <TextField
            // error={Boolean(touched.email && errors.email)}
            fullWidth
            // helperText={touched.email && errors.email}
            label="Qualification"
            margin="normal"
            name="Qualification"
            onBlur={handleBlur}
            onChange={handleChange}
            value={Qualification}
            variant="outlined"
          />
          <TextField
            // error={Boolean(touched.email && errors.email)}
            fullWidth
            // helperText={touched.email && errors.email}
            label="totalExperince"
            margin="normal"
            name="totalExperince"
            onBlur={handleBlur}
            onChange={handleChange}
            value={totalExperince}
            variant="outlined"
          />
          <TextField
            // error={Boolean(touched.email && errors.email)}
            fullWidth
            // helperText={touched.email && errors.email}
            label="currentCTC"
            margin="normal"
            name="currentCTC"
            onBlur={handleBlur}
            onChange={handleChange}
            value={currentCTC}
            variant="outlined"
          />
          <TextField
            // error={Boolean(touched.email && errors.email)}
            fullWidth
            // helperText={touched.email && errors.email}
            label="expectedCTC"
            margin="normal"
            name="expectedCTC"
            onBlur={handleBlur}
            onChange={handleChange}
            value={expectedCTC}
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
        </form>
      </Container>
    </Box>
  );
};
// const mapStateToProps = ({ LoginReducer }) => {
//   return { _login: LoginReducer };
// };
// export default withRouter() LoginView;
export default RegisterForm;
