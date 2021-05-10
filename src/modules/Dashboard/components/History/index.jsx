import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import {
  Paper,
  GridList,
  GridListTile,
  ListSubheader,
} from "@material-ui/core";
import "fontsource-roboto";
import React from "react";

const RecentFiles = [
  {
    img: "https://churchm.ag/wp-content/uploads/2018/12/handwriting.jpg",
    title: "Notes",
    author: "User_1",
  },
  {
    img:
      "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xOTI1NDY2Mi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1MzI4NjgyMX0.e_6Q8w3IqdGP3ONv9HZZSA4Hj42YzDcTsGLniD1NIrM/img.jpg",
    title: "Notes(1)",
    author: "User_1",
  },
  {
    img:
      "https://i.pinimg.com/originals/98/cd/86/98cd867fec8a305b4e7c184fb7526167.jpg",
    title: "Lecture Note(3)",
    author: "User_1",
  },
  {
    img:
      "https://i0.wp.com/www.hmesshousewife.com/wp-content/uploads/2019/05/Image-1.jpg",
    title: "Draft(0)",
    cols: 2,
    author: "User_1",
  },
  {
    img:
      "https://www.linuxbookpro.com/wp-content/uploads/2020/08/next-actions.png",
    title: "Essay new",
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

  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
});

const History = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <GridList cellHeight={200} className={classes.list} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          <ListSubheader component="div">Recent Images</ListSubheader>
        </GridListTile>
        {RecentFiles.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
};

export default History;
