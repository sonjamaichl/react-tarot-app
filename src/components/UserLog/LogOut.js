import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LogOut() {
  return (
    <Card
      sx={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 5,
        mt: 5
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", p: 2 }}
        >
          Log out
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
        <Button size="small" variant="outlined" sx={{ m: 1 }}>
          Cancel
        </Button>
        <Button size="small" variant="contained" sx={{ m: 1 }}>
          Log Out
        </Button>
      </CardActions>
    </Card>
  );
}