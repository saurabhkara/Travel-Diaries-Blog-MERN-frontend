import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { addPost } from "../apiHelper";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    imageUrl: "",
    location: "",
    date: "",
  });
  
  function onChangeHandle(e){
    setInput((prev)=>({...prev,
        [e.target.name]:e.target.value
    }))
  }
  function onSubmitHandle(e){
    e.preventDefault();
    addPost(input).then(()=>{
      navigate('/diaries');
    });

  }
  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display={"flex"} margin="auto" alignItems={"center"}>
        <Typography fontFamily={"Dancing Script, cursive"} variant="h4">
          Add your travel story
        </Typography>
        <ModeOfTravelIcon sx={{ fontSize: 40, marginLeft: 1, color: "blue" }} />
      </Box>

      <form onSubmit={onSubmitHandle}>
        <Box
          width="80%"
          height={"100%"}
          padding={4}
          display={"flex"}
          flexDirection="column"
          margin="auto"
        >
          <FormLabel sx={{ fontFamily: "monospace" }}>Title</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="title"
            value={input.title}
            onChange={(e)=>onChangeHandle(e)}
          />
          <FormLabel sx={{ fontFamily: "monospace" }}>Description</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="description"
            value={input.description}
            onChange={(e)=>onChangeHandle(e)}
          />
          <FormLabel sx={{ fontFamily: "monospace" }}>Image URL</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="imageUrl"
            value={input.imageUrl}
            onChange={(e)=>onChangeHandle(e)}
          />
          <FormLabel sx={{ fontFamily: "monospace" }}>Location</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="location"
            value={input.location}
            onChange={(e)=>onChangeHandle(e)}
          />
          <FormLabel sx={{ fontFamily: "monospace" }}>Date</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="date"
            type={'date'}
            value={input.date}
            onChange={(e)=>onChangeHandle(e)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "60%", margin: "auto", mt: 2, borderRadius: 10 }}
          >
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
}
