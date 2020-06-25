import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    padding: "10%",
  },
}));

const BookTourForm = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FF4500",
            width: "50%",
            padding: "4%",
            borderRadius: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          onClick={handleClickOpen}
        >
          Book Now
        </Button>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Enter your info to book tour!
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="datetime-local"
              label="Tour Date and Time"
              type="datetime-local"
              defaultValue="2020-06-26T08:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              BOOK!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default BookTourForm;
