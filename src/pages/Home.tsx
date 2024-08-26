import Dashboard from "../components/Dashboard";
import DashboardBox from "../components/DashboardBox";
import AuthTemplate from "./AuthTemplate";

const Home = () => {
  return (
    <AuthTemplate>
      <Dashboard>
        <DashboardBox>home</DashboardBox>
      </Dashboard>
    </AuthTemplate>
  );
};

export default Home;
