import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import {
  Paper,
  Button,
  GridList,
  Checkbox,
  GridListTileBar,
} from "@material-ui/core";
import "fontsource-roboto";
import { CloudUpload } from "@material-ui/icons";
import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

const Uploaded = [
  {
    img:
      "https://www.podfeet.com/blog/wp-content/uploads/2018/12/Rocketbook-Scan.png",
    title: "To-Do",
    author: "User_1",
    cols: 2,
    featured: true,
  },
  {
    img:
      "https://smarthomesolver.com/reviews/wp-content/uploads/2018/03/Smart_Home_Notes_RB-compressor-e1542387049142.jpg",
    title: "Important",
    author: "User_1",
  },
  {
    img:
      "https://smarthomesolver.com/reviews/wp-content/uploads/2018/03/Smart_Home_Notes_RB-compressor.jpg",
    title: "Some notes",
    author: "User_1",
  },
  {
    img:
      "https://yournerdybestfriend.com/wp-content/uploads/2018/03/IMG_9296EDA5A136-1-e1521222952951-753x1024.jpeg",
    title: "Notes",
    author: "User_1",
    featured: true,
  },
  {
    img:
      "https://computertimes.com/wp-content/uploads/2018/02/Rocketbook005-672x1024.jpg",
    title: "Lecture Notes (2)",
    author: "User_1",
  },
  {
    img: "https://www.certskills.com/blogfigs/clusnotes-03.jpg",
    title: "Letter",
    author: "User_1",
  },
  {
    img:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128184155/original/a0054a6f3a90ab606c358f544aeb10243027a140/type-or-edit-scanned-or-handwritten-notes.jpg",
    title: "Drafts",
    author: "User_1",
    cols: 2,
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

  submit: {
    color: "white",
    fontSize: "1.5rem",
    marginLeft: "33.5%",
    marginRight: "33.5%",
    marginTop: "10%",
    backgroundColor: blueGrey[500],
    width: "33%",
    minWidth: 150,
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

const Drive = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <GridList cellHeight={200} className={classes.list} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          <ListSubheader color="white" component="div">
            Google Drive
          </ListSubheader>
        </GridListTile>
        {Uploaded.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} actionIcon={<Checkbox />} />
          </GridListTile>
        ))}
      </GridList>
      <Button className={classes.submit} startIcon={<CloudUpload />}>
        Upload
      </Button>
    </Paper>
  );
};

export default Drive;
