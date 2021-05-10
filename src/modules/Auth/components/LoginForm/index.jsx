import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { pink, blueGrey } from "@material-ui/core/colors";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        rocketnotion
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  container: {
    width: "50%",
    maxWidth: 800,
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: blueGrey[500],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[300],
    },
    secondary: {
      main: blueGrey[500],
    },
  },
});

export default function SignIn() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              fullWidth
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ButtonGroup fullWidth>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                href="/dashboard"
              >
                Log In
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                href="/register"
                className={classes.submit}
              >
                Register
              </Button>
            </ButtonGroup>
            <Box mt={8}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
