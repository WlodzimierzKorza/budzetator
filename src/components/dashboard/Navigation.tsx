import { Divider, List } from "@mui/material";
import { routs } from "../../routs";
import NavigationItem from "./components/NavigationItem";
const Navigation = () => {
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
    </List>
  );
};
export default Navigation;
