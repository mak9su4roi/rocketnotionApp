import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey, grey } from "@material-ui/core/colors";
import { Paper, Button, Avatar, Grid, Divider } from "@material-ui/core";
import Topography from "@material-ui/core/Typography";
import "fontsource-roboto";
import { AccountCircle, Home, Settings, Face } from "@material-ui/icons";
import React from "react";
import List from "@material-ui/core/List";

const useStyles = makeStyles({
  paper: {
    borderRadius: 0,
    margin: 0,
    padding: 0,
    width: "10vw",
    minWidth: 220,
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    height: "100vh",
    justifyContent: "flex-start",
    backgroundColor: blueGrey[300],
    color: "white",
    paddingLeft: "auto",
  },

  mainGrid: {
    width: "100vw",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "row",
  },

  sectionGrid: {
    justifyContent: "space-evenly",
    width: "90vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
  },

  button: {
    borderRadius: 0,
    color: "white",
    fontSize: "1.5rem",
    justifyContent: "left",
    backgroundColor: "transparent",
    margin: "10%",
    height: "5vh",
    width: "80%",
    marginLeft: "1vh",
    marginRight: "auto",
    "&:hover": {
      transform: "translateY(-10px)",
      transition: "transform 250ms",
      backgroundColor: "transparent",
      color: blueGrey[500],
    },
  },

  icon: {
    fontSize: "13vh",
  },

  avatar: {
    padding: 0,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1.5vh",
    marginBottom: "1.5vh",
    width: "7.5vw",
    height: "7.5vw",
    minWidth: 180,
    minHeight: 180,
    borderRadius: "100%",
    backgroundColor: blueGrey[500],
  },

  container: {
    height: "100vh",
    backgroundColor: grey[300],
    margin: 0,
    padding: 0,
  },
});

const Panel = (props) => {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <Container className={classes.container} maxWidth="false">
      <Topography>
        <Grid container className={classes.mainGrid}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountCircle className={classes.icon} />
            </Avatar>
            <Divider />
            <List>
              <Button
                href="/dashboard"
                className={classes.button}
                startIcon={<Home edge="end" />}
              >
                Home
              </Button>
              <Button
                href="/settings"
                className={classes.button}
                startIcon={<Settings />}
              >
                Setting
              </Button>
              <Button
                href="/profile"
                className={classes.button}
                startIcon={<Face />}
              >
                Profile
              </Button>
            </List>
          </Paper>
          <Grid className={classes.sectionGrid}>{children}</Grid>
        </Grid>
      </Topography>
    </Container>
  );
};

export default Panel;
