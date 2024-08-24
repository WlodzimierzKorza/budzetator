import Dashboard from "./dashboard/Dashboard";
import { Route, Routes } from "react-router";
import { routs } from "./routs";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./sign-in/SignIn";
const App = () => {
  const logged = false;
  console.log(logged);
  if (logged) {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {!logged &&
          routs.map((route) => {
            if (route.menu) {
              return null;
            }
            return <Route element={<route.component />} path={route.path} />;
          })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
