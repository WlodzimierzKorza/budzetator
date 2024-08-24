import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from "react-router";
import { routs } from "./routs";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { useSessionState } from "./state/useSessionState";
import { SnackbarProvider } from "notistack";
const App = () => {
  const { logged } = useSessionState();
  if (logged) {
    return (
      <BrowserRouter>
        <SnackbarProvider>
          <Dashboard>
            <Routes>
              {logged &&
                routs.map((route) => {
                  if (!route.menu) {
                    return null;
                  }
                  return (
                    <Route element={<route.component />} path={route.path} />
                  );
                })}
              {!logged && <Route element={<SignIn />} path="/" />}
            </Routes>
          </Dashboard>
        </SnackbarProvider>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Routes>
          {!logged &&
            routs.map((route) => {
              if (route.menu) {
                return null;
              }
              return <Route element={<route.component />} path={route.path} />;
            })}
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default App;
