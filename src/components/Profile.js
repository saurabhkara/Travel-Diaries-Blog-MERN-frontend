import React, { useEffect, useState } from "react";
import { getUserDetail } from "../apiHelper";
import { Typography, Box, Button } from "@mui/material";
import DiaryItem from "./DiaryItem";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = localStorage.getItem("userId");
  const [userData, setUserData] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await getUserDetail(id);
      setUserData(res.user[0]);
    }
    fetchData();
  }, [id]);
  console.log(userData);

  function handleLogout() {
    try {
      dispatch(authActions.logout());
      localStorage.removeItem("userId");
      navigate('/');
    } catch (error) {
      console.log('Error occured');
    }
  }
  return (
    <Box display={"flex"} flexDirection="column">
      <Typography variant="h3" textAlign={"center"}>
        User Profile Detail
      </Typography>
      <Typography padding={2} textAlign="left">
        Name : {userData?.name}
      </Typography>
      <Typography padding={2} textAlign="left">
        Email : {userData?.email}
      </Typography>
      <Button
        variant="contained"
        color="warning"
        sx={{ width: "15%", borderRadius: 10, ml: 2 }}
        onClick={handleLogout}
      >
        Logout
      </Button>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        {userData?.posts?.map((item, index) => {
          return (
            <DiaryItem
              title={item.title}
              description={item.description}
              image={item.image}
              location={item.location}
              date={item.date}
              user={id}
            />
          );
        })}
      </Box>
    </Box>
  );
}
