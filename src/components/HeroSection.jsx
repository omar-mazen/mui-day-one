import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function HeroSection() {
  return (
    <Box sx={{ backgroundColor: "#004D67", marginBottom: "180px" }}>
      <Container
        sx={{
          position: "relative",
          height: "420px",
          paddingTop: "80px",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="white"
          paddingBottom={"20px"}
        >
          Find developer for live Mentorship & freelance projects
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "error.light",
            display: "block",
            margin: "0 auto",
          }}
        >
          Get Help Now
        </Button>
        <img
          src="../src/assets/images/hero.png"
          className=""
          style={{
            width: "60%",
            position: "absolute",
            left: "50%",
            transform: "translatex(-50%)",
          }}
        />
      </Container>
    </Box>
  );
}

export default HeroSection;
