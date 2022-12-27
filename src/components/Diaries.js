import React from "react";
import DiaryItem from "./DiaryItem";
import { Box } from "@mui/system";
import { getAllpost } from "../apiHelper";
import { useEffect, useState } from "react";

export default function Diaries() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllpost()
      .then((res) => {
        
        setPosts(res.reverse());
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={3}
      margin={1}
    >
      {posts &&
        posts.map((item, index) => {
          return (
            <DiaryItem
              key={index}
              title={item.title}
              description={item.description}
              location={item.location}
              date={item.date}
              image={item.image}
              user={item.user}
              id={item._id}
            />
          );
        })}
    </Box>
  );
}
