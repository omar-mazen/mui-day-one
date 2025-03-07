import React from "react";
import {
  Box,
  Typography,
  Link as MuiLink,
  Container,
  Divider,
  Grid2,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        pt: 4,
        pb: 2,
      }}
    >
      <Container>
        <Grid2 container>
          <Grid2 size={6}>
            <Typography variant="h6" gutterBottom>
              PRODUCTS
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" fontWeight="bold">
                <MuiLink href="#" color="inherit" underline="hover">
                  Codementor
                </MuiLink>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Find a mentor to help you in real time
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" fontWeight="bold">
                <MuiLink href="#" color="inherit" underline="hover">
                  Codementor Events
                </MuiLink>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Attend and host virtual events for developers
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" fontWeight="bold">
                <MuiLink href="#" color="inherit" underline="hover">
                  DevProjects
                </MuiLink>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Learn programming by building projects
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" fontWeight="bold">
                <MuiLink href="#" color="inherit" underline="hover">
                  Arc
                </MuiLink>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Helping employers find talent for remote jobs
              </Typography>
            </Box>
          </Grid2>

          <Grid2 size={6}>
            <Typography variant="h6" gutterBottom>
              PAGES
            </Typography>
            <Grid2 container columnSpacing={5}>
              {[
                "Become a Codementor",
                "How It Works",
                "Find Mentors",
                "Freelancers",
                "Find a Tutor",
                "Community",
                "Blog",
                "Codementor For Students",
                "Codementor For Teams",
                "Code Review",
                "Pair Programming",
                "Best Web Design Software",
                "Coding Starter Kit",
                "Codementor Reviews",
                "Best Language to Learn",
              ].map((page) => (
                <Grid2 size={6}>
                  <Typography variant="body2" sx={{ mb: 1 }} key={page}>
                    <MuiLink href="#" color="inherit" underline="hover">
                      {page}
                    </MuiLink>
                  </Typography>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="body2">© Copyright 2024 Codementor</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <MuiLink href="#" color="inherit" underline="hover">
              Cookie Policy
            </MuiLink>
            <MuiLink href="#" color="inherit" underline="hover">
              Privacy Policy
            </MuiLink>
            <MuiLink href="#" color="inherit" underline="hover">
              Terms of Service
            </MuiLink>
            <MuiLink href="#" color="inherit" underline="hover">
              Careers
            </MuiLink>
            <MuiLink href="#" color="inherit" underline="hover">
              Help Center
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
