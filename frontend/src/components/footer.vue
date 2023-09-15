<template>
 <!-- Footer -->
<footer class="text-center text-lg-start bg-dark text-white">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  
    <div>
      <router-link to="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </router-link>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <router-link to="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </router-link>
      <router-link to="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </router-link>
      <router-link to="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </router-link>
      <router-link to="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </router-link>
    </div>
   
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>GOLDEN RIMZ CUSTOMZ
          </h6>
          <p>
           The Best Custom vehicle sales shop in town
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Alternative links
          </h6>
          <p>
            <router-link to="/" class="text-reset">Home</router-link>
          </p>
          <p>
            <router-link to="/Products" class="text-reset">Showroom</router-link>
          </p>
          <p>
            <router-link to="/about" class="text-reset">About Us</router-link>
          </p>
          <p>
            <router-link to="/contact" class="text-reset">Contact Us</router-link>
          </p>
          <p>
            <router-link to="login" class="text-reset" id="hover">Login</router-link>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Cape Town</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            sammpokela@gmail.com
          </p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2023 Copyright:
    <router-link class="text-reset fw-bold" to="/">Golden Rimz Customz</router-link>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
        </template>
    
        <style scoped>
        .text-reset{
          text-decoration: none;
        }
        .hover:hover{
          color: gold;
        }
        h6{
            color: gold;
            font-weight: bolder;
        }
        p{
            color: white;
        }
        .container{
            background-color: maroon;
        }
        li{
            text-decoration: none;
            color: white;
        }
        li a:hover{
           color: gold;
            transform: scale(1.1);
        }

        </style>