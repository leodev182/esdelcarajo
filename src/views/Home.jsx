import React from "react";
import { Card, Nav } from "../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Nav className="nav" />
      <Card className="card" />
    </div>
  );
};

export default Home;
