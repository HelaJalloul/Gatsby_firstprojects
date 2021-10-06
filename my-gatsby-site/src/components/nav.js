// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import {
    navLinks,
    navLinkItem,
    navLinkText,
  } from './layout.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Step 2: Define your component
const NavbarPage = () => {
  return (

    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  
    <div class="container">
      <a class="navbar-brand" href="#">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
        
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/contact">Contact us</a>
          </li>
          <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/blog">Blog</a>

          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default NavbarPage
