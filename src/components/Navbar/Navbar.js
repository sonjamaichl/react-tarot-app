import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase_setup/AuthContext";
import LogOutModal from "../UserLog/LogOutModal";




export default function Navbar(props) {

const drawerWidth = 240;

  const { user } = React.useContext(AuthContext);
  const userLog = { text: user? "LOG OUT": "LOG IN/SIGN UP", link: user? "#": "/login"}

const navItems = [
  { "navText": "HOME", "navLink": "/" },
  { "navText": "BROWSE", "navLink" : "/browse" },
  { "navText": "READING", "navLink": "/reading" },
  { "navText": userLog.text, "navLink": userLog.link }
];

  const title = "Tarot App";
  
  const [logOutOpen, setLogOutOpen] = React.useState(false);
  const handleLogOutOpen = () => {
    setLogOutOpen(true);
    console.log('log out modal opened');
  };
  const handleLogOutClose = () => setLogOutOpen(false);


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
    
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.navText} disablePadding>
            {item.navText === "LOG OUT" ? <><ListItemButton component={Button} onClick={handleLogOutOpen} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.navText} /></ListItemButton><LogOutModal open={logOutOpen} handleClose={handleLogOutClose} handleOpen={handleLogOutOpen} /></>: <ListItemButton component={NavLink} to={item.navLink} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.navText} />
            </ListItemButton>}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (item.navText === "LOG OUT") ?
              <Button key={item.navText} component={Button} onClick={handleLogOutOpen} sx={{ color: "#fff" }}>
                {item.navText}
              </Button> :
              <Button key={item.navText} component={NavLink} to={item.navLink} sx={{ color: "#fff" }}>
                {item.navText}
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
