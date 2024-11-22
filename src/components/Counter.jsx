import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Counter() {
  const [countState, setCountState] = React.useState(0);

  return (
    <Box>
      <p>Count component: {countState}</p>
      <Button
        variant="contained"
        onClick={() => setCountState(countState + 1)}
        style={{ maxWidth: "130px" }}
      >
        Counter
      </Button>
    </Box>
  );
}
