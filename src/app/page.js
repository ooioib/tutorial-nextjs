"use client";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

import { useState } from "react";

export default function Home() {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setLeftDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <GitHubIcon />
            </IconButton>
            <Button
              variant="text"
              color="inherit"
              disableRipple={true}
              sx={{ textTransform: "none" }}
            >
              DashBoard
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              disableRipple={true}
              variant="outlined"
              startIcon={<SearchIcon />}
              color="inherit"
              sx={{
                pr: 14,
                borderColor: "lightgray",
                color: "gray",
              }}
            >
              Type / to search
            </Button>
            <IconButton onClick={() => setRightDrawerOpen(true)}>
              <Avatar sx={{ width: 36, height: 36 }}>H</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          open={rightDrawerOpen}
          onClose={() => setRightDrawerOpen(false)}
          anchor="right"
        >
          <Box role="presentation" sx={{ width: 300 }}></Box>
        </Drawer>

        <Drawer
          open={leftDrawerOpen}
          onClose={() => setLeftDrawerOpen(false)}
          anchor="left"
        >
          <Box role="presentation" sx={{ width: 300, p: 1 }}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <HomeOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <AdjustOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Issues</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <AccountTreeOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Pull requests</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <TableChartOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Projects</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Discussions</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <ComputerOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Codedspaces</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <SmartToyOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Conpilot</ListItemText>
              </MenuItem>

              <Divider />

              <MenuItem>
                <ListItemIcon>
                  <BiotechOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Explore</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <CardGiftcardOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Maketplace</ListItemText>
              </MenuItem>

              <Divider />
            </MenuList>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
