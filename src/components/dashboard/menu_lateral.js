import React from "react";
import { Box, Divider, Button } from "@mui/material";
import BotaoAccordion from "../accordion";

export default function MenuLateral() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        color: "#fff",
        background: "#252631",
        display: { xs: "none", md: "block", xl: "block", lg: "block" }
      }}
    >
      {/* CABEÇALHO */}
      <Box sx={{ height: "3rem" }}>Logo</Box>
      <Divider sx={{ background: " rgba(255, 255, 255, 0.15)" }} />
      {/* FIM CABEÇALHO */}

      <Box sx={{ height: "100vh", padding: 1 }}>
        <Button
          sx={{
            mt: 2,
            mb: 2,
            width: "100%",
            color: "#fff",
            background: "#444bf8",
            textTransform: "capitalize",
            "&:hover": {
              background: "#444bf8"
            }
          }}
        >
          Dashboard
        </Button>
        <BotaoAccordion />
      </Box>
    </Box>
  );
}
