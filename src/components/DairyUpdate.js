import { Button, FormLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import {getPost, updatePost} from '../apiHelper'

export default function DairyUpdate() {
    const id = useParams().id
    const [receiveData, setReceiveData]=useState();
    const [input, setInput] = useState({
        title: "",
        description: "",
        imageUrl: "",
        location: "",
      });
      
      useEffect( ()=>{
         async function fetchData(){
            const res= await getPost(id);
            setInput({
                title:res.title,
                description:res.description,
                imageUrl:res.image,
                location:res.location,
            })
            setReceiveData(res);
         }
         fetchData()
        },[id]);
       
      function onChangeHandle(e){
        setInput((prev)=>({...prev,
            [e.target.name]:e.target.value
        }))
      }
      function onSubmitHandle(e){
        e.preventDefault();
        updatePost(input,id);
      }
      return (
        <Box display="flex" flexDirection={"column"} width="100%" height="100%">
          <Box display={"flex"} margin="auto" alignItems={"center"}>
            <Typography fontFamily={"Dancing Script, cursive"} variant="h4">
              Update your travel story
            </Typography>
            <ModeOfTravelIcon sx={{ fontSize: 40, marginLeft: 1, color: "blue" }} />
          </Box>
    
         {
            receiveData &&  <form onSubmit={onSubmitHandle}>
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
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "60%", margin: "auto", mt: 2, borderRadius: 10 }}
              >
                Update
              </Button>
            </Box>
          </form>
         }
        </Box>)
}
