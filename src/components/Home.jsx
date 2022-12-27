import { Box } from "@mui/system";
import React from "react";
import img1 from "../img/img.jpg";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <Box position={"relative"} width={"100%"} height={"90vh"}>
      <img src={img1} alt="home" width={"100%"} height={"70%"} />
      <Typography
        fontFamily={"Dancing Script, cursive"}
        fontWeight={"bold"}
        variant="h4"
        textAlign={"center"}
        width={"100%"}
        sx={{ position: "absolute", top: 0, color: "1111115de" }}
      >
        Dare to live your life as you want
      </Typography>
      <Box
        height={"30%"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography
          variant="h4"
          width={"100%"}
          textAlign={"center"}
          padding={4}
        >
          Share your travel diaries with us!!
        </Typography>
        <Box margin="auto">
          <Button variant={"outlined"} sx={{ mr: 2 }}>
            Share your Story
          </Button>
          <Button variant={"contained"} sx={{ ml: 2 }} LinkComponent={Link} to='/diaries'>
            View Diaries
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
