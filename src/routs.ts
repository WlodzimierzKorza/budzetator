import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import Revenues from "./pages/Revenues";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export const routs = [
  {
    path: "/",
    name: "Podsumowanie",
    component: Home,
    icon: ShowChartOutlinedIcon,
    menu: true,
  },
  {
    path: "/revenues",
    name: "Przychody",
    component: Revenues,
    icon: PaidOutlinedIcon,
    menu: true,
  },
  {
    path: "/expenses",
    name: "Wydatki",
    component: Expenses,
    icon: AddShoppingCartOutlinedIcon,
    menu: true,
  },
  {
    path: "/",
    component: SignIn,
    menu: false,
  },
  {
    path: "/sing-up",
    component: SignUp,
    menu: false,
  },
];
