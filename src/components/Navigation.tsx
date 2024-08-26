import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { routs } from "../routs";
import NavigationItem from "./NavigationItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../pages/state/useAuth";
const Navigation = () => {
  const { signOutUser } = useAuth();
  return (
    <List component="nav">
      {routs.map((route) => {
        return (
          <NavigationItem
            path={route.path}
            text={route.name}
            icon={route.icon}
          />
        );
      })}
      <Divider sx={{ my: 1 }} />
      <ListItemButton onClick={() => signOutUser()}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Wyloguj" />
      </ListItemButton>
    </List>
  );
};
export default Navigation;
