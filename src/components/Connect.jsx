import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import HtmlIcon from "@mui/icons-material/Html";
function Connect() {
  return (
    <Box sx={{ padding: "80px 0", backgroundColor: "#004D67" }}>
      <Container>
        <Typography variant="h4" color="white" align="center">
          Connect with <br /> 12000+ top developers anytime
        </Typography>
        <Grid2 container spacing={3} sx={{ margin: "40px 0" }}>
          <Grid2 size={4}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px ",
                }}
              >
                <CardMedia>
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    src="https://avatar.iran.liara.run/public/boy"
                  />
                </CardMedia>
                <CardContent>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      John Doe
                    </Typography>
                    <Typography sx={{ fontWeight: "300", fontSize: "0.8rem" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Box display={"flex"} gap={2}>
                      <HtmlIcon />
                      <JavascriptIcon />
                      <PhpIcon />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={4} sx={{ transform: "translateY(-15px)" }}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px ",
                }}
              >
                <CardMedia>
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    src="https://avatar.iran.liara.run/public/boy"
                  />
                </CardMedia>
                <CardContent>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      John Doe
                    </Typography>
                    <Typography sx={{ fontWeight: "300", fontSize: "0.8rem" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Box display={"flex"} gap={2}>
                      <HtmlIcon />
                      <JavascriptIcon />
                      <PhpIcon />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={4}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px ",
                }}
              >
                <CardMedia>
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    src="https://avatar.iran.liara.run/public/boy"
                  />
                </CardMedia>
                <CardContent>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      John Doe
                    </Typography>
                    <Typography sx={{ fontWeight: "300", fontSize: "0.8rem" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Box display={"flex"} gap={2}>
                      <HtmlIcon />
                      <JavascriptIcon />
                      <PhpIcon />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={4}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px ",
                }}
              >
                <CardMedia>
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    src="https://avatar.iran.liara.run/public/boy"
                  />
                </CardMedia>
                <CardContent>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      John Doe
                    </Typography>
                    <Typography sx={{ fontWeight: "300", fontSize: "0.8rem" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Box display={"flex"} gap={2}>
                      <HtmlIcon />
                      <JavascriptIcon />
                      <PhpIcon />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={4} sx={{ transform: "translateY(-15px)" }}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px ",
                }}
              >
                <CardMedia>
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    src="https://avatar.iran.liara.run/public/boy"
                  />
                </CardMedia>
                <CardContent>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      John Doe
                    </Typography>
                    <Typography sx={{ fontWeight: "300", fontSize: "0.8rem" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Box display={"flex"} gap={2}>
                      <HtmlIcon />
                      <JavascriptIcon />
                      <PhpIcon />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 size={4}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px ",
                }}
              >
                <CardMedia>
                  <Avatar
                    sx={{ width: "100px", height: "100px" }}
                    src="https://avatar.iran.liara.run/public/boy"
                  />
                </CardMedia>
                <CardContent>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      John Doe
                    </Typography>
                    <Typography sx={{ fontWeight: "300", fontSize: "0.8rem" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Box display={"flex"} gap={2}>
                      <HtmlIcon />
                      <JavascriptIcon />
                      <PhpIcon />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        </Grid2>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Typography color="white">
            Start working with our developers
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "error.light" }}>
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Connect;
