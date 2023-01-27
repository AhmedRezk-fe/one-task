import React, { useEffect } from "react";
import "./App.scss";
import Filter from "./components/filter/Filter";
import NavBar from "./components/navbar/Index";
import SideBar from "./components/sidebar/Index";
import requestResult from "./shares/agent";
import { useLocation  } from "react-router-dom";
import {startApp} from "./Redux/action";
import { useDispatch } from "react-redux";

function App() {
  const location  = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestResult(startApp , location.search.split("=")[1])); 
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Filter />
      <SideBar />
    </div>
  );
}

export default App;
