import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox/search";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row align-items-center w-100">
          {/* LOGO WRAPPER */}
          <div className="col-sm-2">
            <Link to={"/"} className="d-flex align-items-center logo">
              <img src={logo} alt="Logo" />
              {/* <span className="ml-3">ITS</span> */}
            </Link>
          </div>

          {/* SEARCH BOX AND MENU BUTTON */}
          <div className="col-sm-3 d-flex align-items-center">
            <Button className="rounded-circle"><MdMenuOpen /></Button>
            <SearchBox />
          </div>

          {/* NAVIGATION / BUTTONS */}
          <div className="col-sm-7 d-flex align-items-center justify-content-end">
            <Button className="rounded-circle"><MdOutlineLightMode /></Button>
            {/* <Button className="rounded-circle"><MdDarkMode /></Button> */}
            <Button className="rounded-circle"><IoCartOutline /></Button>
            <Button className="rounded-circle"><MdOutlineMail /></Button>
            <Button className="rounded-circle"><FaRegBell /></Button>

            <Button className="myAccWrapper">
              <div className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                <div className="userImg">
                  <span className="rounded-circle">
                    <img src="/public/img/profile.png"/>
                  </span>
                </div>

                <div className="userInfo">
                  <h4>User Name</h4>
                  <p className="mb-0">info@mail.com</p>
                </div>

              </div>
            </Button>
            
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleCloseMyAccDrop}
              onClick={handleCloseMyAccDrop}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleCloseMyAccDrop}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleCloseMyAccDrop}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseMyAccDrop}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleCloseMyAccDrop}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleCloseMyAccDrop}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
