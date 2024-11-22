import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import Box from "@mui/material/Box";

const columns = [
  { field: "id", headerName: "#", width: 70 },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "email", headerName: "e-mail", width: 130 },
];

export default function Clientes(props) {
  return (
    <Box style={{ height: 450, width: "100%" }}>
      {props.clientes.length > 0 && (
        <DataGrid columns={columns} rows={props.clientes} />
      )}
    </Box>
  );
}
