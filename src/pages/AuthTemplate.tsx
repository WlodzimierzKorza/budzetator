import { useEffect } from "react";
import { useSessionState } from "../state/useSessionState";
import { useLocation, useNavigate } from "react-router";
import { routs } from "../routs";

const AuthTemplate = ({ children }: any) => {
  const { logged, setUser, setLogged } = useSessionState();
  const navigate = useNavigate();
  const location = useLocation();
  const isProtected = (currentLocation: any) => {
    const currentRoute = routs.find((route) => route.path === currentLocation);
    return currentRoute?.protected;
  };

  console.log(isProtected(location.pathname));
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      return;
    }
    setUser(JSON.parse(user));
    setLogged(true);
  }, []);

  useEffect(() => {
    if (logged) {
      navigate("/");
    }
  }, [logged]);

  return <>{children}</>;
};

export default AuthTemplate;
