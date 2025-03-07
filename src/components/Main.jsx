import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SearchIcon from "@mui/icons-material/Search";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
function Main() {
  return (
    <main>
      <Container>
        <Typography variant="h4" align="center" color="#003648">
          Get Help from vetted software developers
        </Typography>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Box flexGrow={1}>
            <Typography color="#003648" variant="h6">
              One-on-one live mentorship
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon color="#007F9E" />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: "300" }}>
                    Debug with the help of an expert
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: "300" }}>
                    Personalize your learning experience
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentTurnedInIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: "300" }}>
                    Get answers to complex problems{" "}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "error.light" }}
                >
                  Find a mentor
                </Button>
              </ListItem>
            </List>
          </Box>
          <Box>
            <img src="../../src/assets/images/mentorship.jpg" alt="" />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Box>
            <img src="../../src/assets/images/freelance-job.png" alt="" />
          </Box>
          <Box flexGrow={1}>
            <Typography color="#003648" variant="h6">
              Project-based freelance work
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: "300" }}>
                    Find experts for on-demand code review
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: "300" }}>
                    Build features for your existing product
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RocketLaunchIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: "300" }}>
                    Turn your idea into an MVP  
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "error.light" }}
                >
                  Find a freelancer
                </Button>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          flexDirection={"row"}
          marginTop={10}
        >
          <img src="../../src/assets/images/visit-arc (1).svg" alt="" />
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >{`arc()`}</Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#010F57" }}
            >
              Hiring for a bigger project?
            </Typography>
            <Typography
              sx={{ opacity: "0.7", fontWeight: "300", margin: "5px 0" }}
            >
              Arc helps you find senior developers for both permanent full-time
              roles and 40+ hour contract projects.
            </Typography>
            <Button
              variant="text"
              sx={{ color: "#010F57", marginLeft: "-10px", fontWeight: "bold" }}
            >
              Visit Arc to learn more →
            </Button>
          </Box>
        </Box>
      </Container>
    </main>
  );
}

export default Main;
