import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
//import { useState } from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import NativeSelect from '@mui/material/NativeSelect';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
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

export default function Searchbar({handleSearchInput, handleSelect}) {

  //get the final input value when user has pressed enter using handleSearchInput function from props
  let userInput = '';
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      userInput = e.target.value;
    }
    console.log(userInput);
    handleSearchInput(userInput);
  }

  let searchParam = 'name';  //again setting 'name' as default to search by
  const handleChange = (e) => {
    searchParam = e.target.value;
    console.log(e.target.value);
    handleSelect(searchParam);
  };
  
  return (
    <>
  {/*SELECT SEARCH BY OPTIONS*/}
       <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth onChange={handleChange}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Search by
        </InputLabel>
        <NativeSelect
          defaultValue='name'
          inputProps={{
            name: 'search-by',
            id: 'uncontrolled-native',
          }}
        >
          <option value='name'>Name</option>
          <option value='meaning'>Meaning</option>
        </NativeSelect>
      </FormControl>
      </Box>

{/*SEARCH INPUT*/}      
    <Box sx={{ flexGrow: 1, mb: '4rem' }} className="marginBottom2">
      <AppBar position="static">
        <Toolbar>
          <Search
              onKeyDown={handleKeyDown}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
        </Search>
        </Toolbar>
      </AppBar>
      </Box>

      </>
  );
}






 

