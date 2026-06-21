import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const AppSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        // "& .pro-sidebar-inner": {
        //   background: `${colors.primary[400]} !important`
        // },
        // "& .pro-icon-wrapper":{
        //   backgroundColor: "transparent !important"
        // },
        // "& .pro-inner-items":{
        //   padding: "5px 35px 5px 20px !important"
        // },
        // "& .pro-inner-item:hover":{
        //   color: "#868dfb !important"
        // },
        // "& .pro-menu-item.active":{
        //   color: "#6870fa !important"
        // },

        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          height: "100vh"
        },
        "& .ps-menu-button": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menu-button.ps-active": {
          color: "#6870fa !important",
        },
        "& .ps-menu-icon": {
          backgroundColor: "transparent !important",
        },
       
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  ml: "15px",
                }}
              >
                <Typography variant="h3" sx={{color:colors.grey[100]}}>
                  ADMIN IS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {!isCollapsed && (
            <Box sx={{mb:"25px"}}>
              <Box  sx={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={`/user.png`} alt="profile-user" width="100px" height="100px" style={{ cursor: "pointer", borderRadius:"50%"}}/>
              </Box>

              <Box sx={{textAlign:"center"}}>
                <Typography variant="h2"   sx={{ m:"10px 0 0 0", fontWeight:"bold", color:colors.grey[100]}}>Ed Roh</Typography>
                <Typography variant="h5" sx={{color:colors.greenAccent[500]}}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default AppSidebar;
