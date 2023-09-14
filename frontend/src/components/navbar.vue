<template>

    <nav class="navbar navbar-expand-lg sticky-top " >
      <div class="container-fluid" id="nav">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Products">Showroom</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Service Center</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Contact">Contact Us</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Forum</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin">Admin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </template>
    
    <style scoped>
    #nav{
        background-color: white;
        justify-content: center;
    }
    .nav-link{
        color:maroon;
        font-size: larger;
        border-top: 2px solid maroon;
        border-bottom: 2px solid maroon;
    }
    .nav-link:hover, .nav-link:focus{
    border-right: 2px solid gold;
    border-left: 2px solid gold;
    animation: pulse ;
      box-shadow: 0 2px 0 3px gold;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 var(--hover); }
    }
    .nav-link:active{
      border-right: 2px solid gold;
    border-left: 2px solid gold; 
    }
    
    </style>
    
    
    
    
    