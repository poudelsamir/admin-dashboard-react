import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  Toolbar,
  ToolbarButton,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    // {
    //   field: "access",
    //   headerName: "Access Level",
    //   flex: 1,
    //   headerAlign: "center",
    //   renderCell: ({ row: { access } }) => {
    //     return (
    //       <Box
    //         sx={{
    //           width: "60%",
    //           m: "9px auto",
    //           p: "5px",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           backgroundColor:
    //             access === "admin"
    //               ? colors.greenAccent[600]
    //               : colors.greenAccent[700],
    //           borderRadius: "4px",
    //         }}
    //       >
    //         {access === "admin" && <AdminPanelSettingsOutlined />}
    //         {access === "manager" && <SecurityOutlined />}
    //         {access === "user" && <LockOpenOutlined />}
    //         <Typography
    //           variant="body1"
    //           sx={{ color: colors.grey[100], ml: "5px" }}
    //         >
    //           {access}
    //         </Typography>
    //       </Box>
    //     );
    //   },
    // },
  ];

  return (
    <Box sx={{ m: "20px" }}>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        sx={{
          m: "40px 0 0 0 ",
          height: "75vh",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderTop: "none !important",
          },
          "& .MuiDataGrid-root": {
            "--DataGrid-t-color-border-base": "transparent",
          },

          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          //   Both are same can do & or not will work
          //   " .MuiDataGrid-virtualScroller":{
          //     backgroundColor: colors.primary[400]
          //   },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
         //This components option has been replaced by slots!!!!
        //  components={{ Toolbar: GridToolbar}}
          slots={{ toolbar: GridToolbar }}
          showToolbar
        />
      </Box>
    </Box>
  );
};

export default Contacts;
