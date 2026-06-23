import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const index = () => {
  return (
    <Box sx={{ m: "20px" }}>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
    </Box>
  );
};

export default index;
