import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import SearchInput from "./searchInput";
import "./header.css";

function Header(props) {
  const [searchFocus, setSearchFocus] = useState(false);
  const handleSearchFocus = () => {
    setSearchFocus(!searchFocus);
  };

  const handlePanelClick = () => {
    props.setIsMorePanelVisible((visible) => !visible);
  };

  return (
    <div>
      <header>
        <div className="header_left">
          <IconButton sx={{ color: "#000000" }}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton sx={{ color: "#000000" }}>
            <FavoriteIcon />
          </IconButton>
        </div>
        <div className="header_center">
          <img src="pics/logo.jpg" alt="Logo"></img>
        </div>
        <div className="header_right">
          {searchFocus ? <SearchInput /> : null}
          <IconButton onClick={handleSearchFocus} sx={{ color: "#000000" }}>
            <SearchIcon />
          </IconButton>
          <IconButton onClick={handlePanelClick} sx={{ color: "#000000" }}>
            <MenuIcon />
          </IconButton>
        </div>
      </header>
    </div>
  );
}
export default Header;
