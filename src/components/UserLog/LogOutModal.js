import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
import { auth } from "../../firebase_setup/firebase";
import { signOut } from "firebase/auth";

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 5,
    mt: 5,
    boxShadow: 24,
};

export default function LogOutModal({ open, handleClose }) {
    
    const handleLogOut = () => {
    signOut(auth)
        .then(() => {
          console.log('successfully logged out')
  })
    .catch((error) => {
      console.log(error)
  })
    };

    return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Card sx={styles} >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", p: 2 }}
        >
          LOG OUT
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", p: 2 }}
        >
          Are you sure, you want to log out?
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
                    <Button onClick={ handleClose } size="small" variant="outlined" sx={{ m: 1 }}>
          Cancel
        </Button>
                    <Button onClick={ handleLogOut} size="small" variant="contained" sx={{ m: 1 }}>
          Log Out
        </Button>
      </CardActions>
        </Card>
     </Modal>
  );
}