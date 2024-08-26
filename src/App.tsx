import Dashboard from "./components/Dashboard";
import { Route, Routes, Navigate } from "react-router";
import { routs } from "./routs";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <SnackbarProvider>
      <Routes>
        {routs.map((link) => {
          return <Route element={<link.component />} path={link.path} />;
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SnackbarProvider>
  );
};

export default App;
