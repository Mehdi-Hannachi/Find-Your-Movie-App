import React from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import Stars from "../Stars/Stars";
import "./header.css";

const Header = ({ setFilterText, setFilterRate, filterRate }) => {
  return (
    <div className="header">
      <h1> Find Your Movie </h1>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          width: "200px",
          justifyContent: "space-around",
        }}
      >
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/movieslist">
          <li> Movies List </li>{" "}
        </Link>
      </ul>

      <div className="filter">
        <Filter isEdit={true} setFilterText={setFilterText} />
        <Stars
          myclass="stars-edit"
          setFilterRate={setFilterRate}
          filterRate={filterRate}
        />
      </div>
    </div>
  );
};

export default Header;
