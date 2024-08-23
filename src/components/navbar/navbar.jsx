import React from 'react';
import practologo from '../../assets/navbar/logo.png';
import '../../styes/navbar/navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img src={practologo} className='logoimg' /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active navleft" aria-current="page" href="#">Find Doctors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link navleft" href="#">Video Consult</a>
              </li>
              <li class="nav-item">
                <a class="nav-link navleft" href="#">Surgeries</a>
              </li>
              <li class="nav-item dropdown rightnav">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  For Corporates
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Health & Wellness Plans</a></li>
                  <li><a class="dropdown-item" href="#">Group Insurance</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  For Providers
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Practo Prime</a></li>
                  <li><a class="dropdown-item" href="#">Software for Providers</a></li>
                  <li><a class="dropdown-item" href="#">List your practice for free</a></li>
                  <li><a class="dropdown-item" href="#">ABDM</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Security & help
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Data Security</a></li>
                  <li><a class="dropdown-item" href="#">Help</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="/login">Login/Signup</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
