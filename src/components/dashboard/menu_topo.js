import React from "react";
import { Box, Avatar, InputBase, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const MenuSanduiche = () => {
  return <MenuIcon color="#999ba8" />;
};
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function MenuTopo() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "3rem",
        margin: 0,
        padding: 0
      }}
    >
      {/* MENU SANDUICHE */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: "3rem",

          float: "left"
        }}
      >
        <MenuSanduiche />
      </Box>
      {/* FIM MENU SANDUICHE */}

      {/* DIVISOR */}
      <Box
        sx={{
          height: "3rem",
          float: "left",
          width: 3,
          background: "#F5F7FB"
        }}
      />
      {/* FIM DIVISOR */}

      {/* CAMPO DE PESQUISA */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          height: "3rem",
          float: "left"
        }}
      >
        <Search sx={{ flexGrow: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      {/* FIM CAMPO PESQUISA */}

      {/* DIVISOR */}
      <Box
        sx={{
          height: "3rem",
          float: "left",
          width: 3,
          marginRight: 2,
          background: "#F5F7FB"
        }}
      />
      {/* FIM DIVISOR */}

      {/* AVATAR USUARIO */}
      <Box
        sx={{
          padding: 0.5,
          height: "3rem",
          float: "left",
          display: "flex"
        }}
      >
        <Avatar
          sx={{
            float: "left",
            marginRight: 2
          }}
          alt="Remy Sharp"
          src="https://htmlstream.com/preview/awesome-dashboard-ui-kit/assets/img-temp/avatars/img1.jpg"
        />
        <Typography
          sx={{
            display: {
              xs: "none",
              md: "flex",
              xl: "flex",
              lg: "flex"
            },
            alignItems: "center",
            justifyContent: "center",
            fontSize: ".9rem",
            fontColor: "#252631",
            color: "#252631",
            float: "left",
            marginBottom: 1
          }}
        >
          Renato A dos Santos
        </Typography>
        <Box sx={{ width: 3 }} />
      </Box>
      {/* FIM AVATAR USUARIO */}
    </Box>
  );
}
