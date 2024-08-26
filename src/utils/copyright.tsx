import { Link, Typography, TypographyProps } from "@mui/material";

const Copyright = (props: TypographyProps) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/WlodzimierzKorza">
        Wlodzimierz Korza
      </Link>
      {`${new Date().getFullYear()} .`}
    </Typography>
  );
};

export default Copyright;
