import React, { Component, useState } from "react";
import SearchedUser from "./SearchedUser"
import { db } from "../config/fire"
import fire from "../config/fire";
import SearchField from "./SearchField";

const Navbar = () => {

  return (

    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">Twitter</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
       <SearchField/>
      </div>
    </nav>
  );
}


export default Navbar;