import React from 'react';
import logo from '../../../Images/logo.png';
const Navbar = () => {
    return (
        <div id="home">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#home"><img style={{width:'100px'}} className="img-fluid" src={logo} alt="" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#aboutMe">About</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#blog">Blog</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;