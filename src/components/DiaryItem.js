import {
  Alert,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import { Box } from "@mui/system";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { deletePost } from "../apiHelper";

export default function DiaryItem({
  id,
  title,
  location,
  description,
  date,
  image,
  user,
}) {
  function isLoggedIn() {
    return user === localStorage.getItem("userId") ? true : false;
  }
  const [open , setOpen] = useState(false);
  function handleClose(){
    setOpen(!open);
    deletePost(id);
  }


  return (
    <Card
      sx={{
        width: "50%",
        margin: 1,
        padding: 1,
        height: "50%",
        boxShadow: "5px 5px 10px",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            location
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
            <EditLocationIcon />
          </IconButton>
        }
        title={location}
        subheader={date}
      />
      <img
        component="img"
        height="194"
        src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5Z"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary" paddingBottom={1}>
          {title}
        </Typography>
        <hr />
        <Box display="flex" justifyContent="center" paddingTop={1}>
          <Typography variant="caption" fontWeight={"bold"} width={"170px"}>
            Saurbh Kumar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}.
          </Typography>
        </Box>
      </CardContent>
      {isLoggedIn() && (
        <CardActions sx={{ justifyContent: "right" }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`}>
            <BorderColorIcon color="warning" />
          </IconButton>
          <IconButton onClick={handleClose}>
            <DeleteIcon color="error" />
          </IconButton>
        </CardActions>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Post deleted successfully!
        </Alert>
      </Snackbar>
    </Card>
  );
}
