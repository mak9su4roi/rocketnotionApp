import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import {
  Paper,
  Button,
  GridList,
  Checkbox,
  GridListTileBar,
  TextField,
} from "@material-ui/core";
import "fontsource-roboto";
import { Add } from "@material-ui/icons";
import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

const Uploaded = [
  {
    img:
      "https://i.pinimg.com/originals/31/90/e3/3190e3fb192a4909192e052915b34532.png",
    title: "Notebook 1",
    author: "User_1",
    cols: 2,
    featured: true,
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvWwI4CAIRYoz4yWtSjki8fbJKDd_JXJvhRBoZYJIAwhKGbZqHwUhLjB4rIHz_P6dcfU&usqp=CAU",
    title: "Notebook 2",
    author: "User_1",
  },
  {
    img:
      "https://uploads-ssl.webflow.com/5eea51a7e2d10b853f4385b9/5fca40ac20573200dd2fa7f7_bullet-journal-5-1-0optim0.png",
    title: "Notebook 3",
    author: "User_1",
  },
  {
    img: "https://pbs.twimg.com/media/D-a2L9cUIAEOBTN.jpg:large",
    title: "Notebook 4",
    author: "User_1",
    featured: true,
  },
  {
    img:
      "http://thomasjfrank.com/wp-content/uploads/2020/10/Screencast-at-October-24th-2020-1.32.27-pm.gif",
    title: "Notebook 5",
    author: "User_1",
  },
];

const useStyles = makeStyles({
  paper: {
    borderRadius: 0,
    backgroundColor: blueGrey[200],
    width: "49%",
    marginTop: "auto",
    marginBottom: "auto",
    height: "100%",
  },

  form: {
    marginLeft: "33.5%",
    marginRight: "33.5%",
    marginTop: "10%",
  },

  submit: {
    marginTop: "5%",
    color: "white",
    fontSize: "1.5rem",
    backgroundColor: blueGrey[500],
    "&:hover": {
      backgroundColor: "white",
      color: blueGrey[500],
    },
  },

  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
});

const Settings = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <GridList cellHeight={200} className={classes.list} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          <ListSubheader color="white" component="div">
            Notion Notebooks
          </ListSubheader>
        </GridListTile>
        {Uploaded.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={<Checkbox checked="1" />}
            />
          </GridListTile>
        ))}
      </GridList>
      <form className={classes.form}>
        <TextField label="Notebook https:" />
        <Button
          fullWidth
          type="submit"
          startIcon={<Add />}
          className={classes.submit}
        >
          Add
        </Button>
      </form>
    </Paper>
  );
};

export default Settings;
