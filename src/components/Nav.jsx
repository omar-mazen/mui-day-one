import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElExpert, setAnchorElExpert] = React.useState(null);
  const [anchorElFreelance, setAnchorElFreelance] = React.useState(null);
  const [anchorElMore, setAnchorElMore] = React.useState(null);

  const handleMenuOpen = (setAnchor) => (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => () => {
    setAnchor(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", color: "black", padding: "10px 0" }}
    >
      <Container>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <PersonPinIcon />
            <Typography variant="h6" component="h1" sx={{ ml: 1 }}>
              codementor
            </Typography>
          </Box>

          <Box
            display="flex"
            gap={2}
            alignItems={"center"}
            flexGrow={1}
            sx={{ ml: 5 }}
          >
            <Box>
              <Button
                onClick={handleMenuOpen(setAnchorEl)}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                sx={{ fontSize: "0.8rem", fontWeight: "400" }}
              >
                Mentorship
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose(setAnchorEl)}
              >
                <MenuItem onClick={handleMenuClose(setAnchorEl)}>
                  Find a Mentor
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorEl)}>
                  Become a Mentor
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorEl)}>
                  One-on-One Sessions
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorEl)}>
                  Group Mentorship
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorEl)}>
                  Mentorship Plans
                </MenuItem>
              </Menu>
            </Box>

            <Box>
              <Button
                onClick={handleMenuOpen(setAnchorElExpert)}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                sx={{ fontSize: "0.8rem", fontWeight: "400" }}
              >
                Expert Help
              </Button>
              <Menu
                anchorEl={anchorElExpert}
                open={Boolean(anchorElExpert)}
                onClose={handleMenuClose(setAnchorElExpert)}
              >
                <MenuItem onClick={handleMenuClose(setAnchorElExpert)}>
                  Live Sessions
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorElExpert)}>
                  Q&A
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorElExpert)}>
                  Consulting
                </MenuItem>
              </Menu>
            </Box>

            <Box>
              <Button
                onClick={handleMenuOpen(setAnchorElFreelance)}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                sx={{ fontSize: "0.8rem", fontWeight: "400" }}
              >
                Freelancing
              </Button>
              <Menu
                anchorEl={anchorElFreelance}
                open={Boolean(anchorElFreelance)}
                onClose={handleMenuClose(setAnchorElFreelance)}
              >
                <MenuItem onClick={handleMenuClose(setAnchorElFreelance)}>
                  Find Jobs
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorElFreelance)}>
                  Post Gigs
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorElFreelance)}>
                  Manage Clients
                </MenuItem>
              </Menu>
            </Box>

            <Box>
              <Button
                onClick={handleMenuOpen(setAnchorElMore)}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                sx={{ fontSize: "0.8rem", fontWeight: "400" }}
              >
                More
              </Button>
              <Menu
                anchorEl={anchorElMore}
                open={Boolean(anchorElMore)}
                onClose={handleMenuClose(setAnchorElMore)}
              >
                <MenuItem onClick={handleMenuClose(setAnchorElMore)}>
                  Community
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorElMore)}>
                  Blog
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorElMore)}>
                  Resources
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          <Box gap={5}>
            <Button
              variant="text"
              sx={{ color: "black", fontWeight: "400", fontSize: "0.8rem" }}
            >
              Become a mentor
            </Button>
            <Button
              variant="text"
              sx={{ color: "black", fontWeight: "400", fontSize: "0.8rem" }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              signup
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Nav;
