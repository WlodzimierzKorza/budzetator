import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useNavigate } from "react-router";

interface NavigationItemProps {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text?: string;
  path: string;
}
const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  text,
  path = "/",
}) => {
  const navigate = useNavigate();
  return (
    <ListItemButton onClick={() => navigate(path)}>
      <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default NavigationItem;
