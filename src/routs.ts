import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import Revenues from "./pages/Revenues";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";

export const routs = [
  {
    path: "/",
    name: "Podsumowanie",
    component: Home,
    icon: ShowChartOutlinedIcon,
  },
  {
    path: "/revenues",
    name: "Przychody",
    component: Revenues,
    icon: PaidOutlinedIcon,
  },
  {
    path: "/expenses",
    name: "Wydatki",
    component: Expenses,
    icon: AddShoppingCartOutlinedIcon,
  },
];
