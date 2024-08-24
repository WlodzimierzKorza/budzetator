import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { routs } from "../../routs";
import NavigationItem from "./NavigationItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSessionState } from "../../state/useSessionState";
import { useAuth } from "../../pages/state/useAuth";
const Navigation = () => {
  const { signOut } = useAuth();
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
      <ListItemButton onClick={() => signOut()}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Wyloguj" />
      </ListItemButton>
    </List>
  );
};
export default Navigation;
