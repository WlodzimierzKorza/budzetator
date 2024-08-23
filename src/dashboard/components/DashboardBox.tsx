import { Grid, Paper } from "@mui/material";
import { ReactNode } from "react";

interface DashboardBoxProps {
  children: ReactNode;
  md?: number;
  xs?: number;
  lg?: number;
}
const DashboardBox: React.FC<DashboardBoxProps> = ({
  children,
  md,
  xs,
  lg,
}) => {
  return (
    <Grid item xs={xs || 12} md={md || 12} lg={lg || 12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        {children}
      </Paper>
    </Grid>
  );
};

export default DashboardBox;
