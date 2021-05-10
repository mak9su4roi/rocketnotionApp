import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import {
  Paper,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import "fontsource-roboto";
import React from "react";
import { ChangeHistory } from "@material-ui/icons";

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
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "10%",
    width: "60%",
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

  nested: {
    marginTop: "20%",
  },

  textField: {
    color: "white",
  },
});

const names = ["e-mail", "First Name", "Surname", "GDrive Link", "token_v2"];

const Profile = () => {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <FormControl className={classes.form}>
        <TextField
          label="e-mail"
          defaultValue="shiroi@gmail.com"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="First Name"
          defaultValue="Makkusu"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Surname"
          defaultValue="Shiroi"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="GDrive Link"
          defaultValue="https://drive.google.com/drive/u/1/my-drive"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="token_v2"
          defaultValue="Haoisdfhjiojk3h24k3rfo2hfoshdf2h3uj4h4jk23h4j23k4"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <FormControl className={classes.nested} fullWidth>
          <InputLabel id="demo-controlled-open-select-label">
            Setting
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            <MenuItem disabled value="">
              <em>Setting Label</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <TextField label="New value:" />
          <Button
            fullWidth
            type="submit"
            startIcon={<ChangeHistory />}
            className={classes.submit}
          >
            Change
          </Button>
        </FormControl>
      </FormControl>
    </Paper>
  );
};

export default Profile;
