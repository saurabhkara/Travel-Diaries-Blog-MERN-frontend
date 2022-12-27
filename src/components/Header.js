import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

export default function Header() {
  const isLoggedInID = useSelector(state=>state.isLoggedIn);
  const isLoggedIn = localStorage.getItem('userId') ? true: false;
  useEffect(()=>{

  },[isLoggedInID,isLoggedInID])
  let linkArr = ["home", "diaries", "auth"];
  let loggedLinkArr = ["home", "diaries", "add","profile"];
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
        <Toolbar>
          <TravelExploreIcon sx={{ color: "blue" }} />
          <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            sx={{ ml: "auto", textDecoration: "none" }}
          >
            {isLoggedIn ?loggedLinkArr.map((item, index) => {
              return (
                <Tab
                  key={index}
                  LinkComponent={Link}
                  to={`/${item === "home" ? "" :item}`}
                  label={item}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                />
              );
            }) : linkArr.map((item, index) => {
              return (
                <Tab
                  key={index}
                  LinkComponent={Link}
                  to={`/${item === "home" ? "" :item}`}
                  label={item}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                />
              );
            })}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
