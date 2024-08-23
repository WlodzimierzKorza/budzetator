import Dashboard from "./dashboard/Dashboard";
import { Route, Routes } from "react-router";
import { routs } from "./routs";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          {routs.map((route) => {
            return <Route element={<route.component />} path={route.path} />;
          })}
        </Routes>
      </Dashboard>
    </BrowserRouter>
  );
};

export default App;
