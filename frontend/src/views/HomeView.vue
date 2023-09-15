<template>
  <div class="home">
     <h2 class="white">WELCOME TO</h2>
    <h1 class="gold">GOLDEN RIMZ CUSTOMZ</h1>
   
    <h6 class="h6">Your Trusted custom auto shop</h6>
    <div>
  <div class="container">
    <ul>
  <li><router-link to="./FinancialView.vue" title="Expert financial Advice"><i class="fa fa-btc" aria-hidden="true"></i></router-link></li>
  <li><a href="#" title="Vehicle Services NationWide"><i class="fa fa-globe" aria-hidden="true"></i></a></li>
  <li><a href="#" title="Checkout our Show Room"><i class="fa-solid fa-car" aria-hidden="true"></i></a></li>
</ul>

  </div>
</div>
   

</div>

 
<div class="cars row">
  <h6 class="my-3">GOLDEN RIMZ CUSTOMZ</h6>
  <h4>From our showroom</h4>
<!-- card 1 -->
  <div class="card col-lg-3 col-md-3 col-12">
  <img src="https://i.postimg.cc/52M5TxSs/Custom-Hofele-Mercedes-AMG-G-63-170.jpg" alt="Avatar" style="width:100%">
  <div class="container">
    <h5><b>Mercedes AMG G-63</b></h5> 
    <p class="prices">ZAR 6,900,000 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="stars">&star; &star; &star; &star; &star;</span></p> <br>
  </div>
</div>
<!-- card2 -->

<div class="card col-lg-3 col-md-3 col-12">
  <img src="https://i.postimg.cc/sxVBS0hK/Toyota-Fortuner-Darker-digital-render-img1.jpg" alt="Avatar" style="width:100%">
  <div class="container">
    <h5><b>Toyota Frtuner Darkar</b></h5> 
    <p class="prices"><b>ZAR 1,299,000 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="stars">&star; &star; &star; &star; &star;</span></b></p> 
  </div>
</div>

<!-- card3 -->

<div class="card col-lg-3 col-md-3 col-12">
  <img src="https://i.postimg.cc/G2tJYtnH/LAND_ROVER_DEFENDER.jpg" alt="Avatar" style="width:100%">
  <div class="container">
    <h5><b>Land Rover Defender</b></h5> 
    <p class="prices"><b>ZAR 1,999,000  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="stars">&star; &star; &star; &star; &star;</span></b></p> 
  </div>
</div>

<!-- card4 -->
<div class="card col-lg-3 col-md-3 col-12">
  <img src="https://i.postimg.cc/xTchYjkj/youll-never-guess-how-much-this-customized-jeep-wrangler-costs-177883_1.jpg" alt="Avatar" style="width:100%">
  <div class="container">
    <h5><b>Jeep Wrangler</b></h5> 
    <p class="prices"><b>ZAR  1,899,000 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="stars">&star; &star; &star; &star; &star;</span> </b> <br></p> 
  </div>
</div>
<div class="wrapper">
      <router-link class="button" to="/Products"><b>Visit in Showroom!</b></router-link>
    </div>

</div> 


<div class="customers">
  <h5 class="yellow my-4">What they have to say About us</h5>
  <h3>Join our happy customers</h3>
  <imageSlider />

</div>



</template>
<script>
import imageSlider from '../components/ImageSlider.vue';

export default {
  components: {
    imageSlider,
  },
};

</script>
<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');

.home{
  background-image: url(https://i.postimg.cc/YCzjcs2M/custom-car.jpg);
  background-size: inherit;
  height: 100vh;
  background-repeat: no-repeat;
  width: 100%;
  background-size:cover;
font-family: 'Sedgwick Ave Display', cursive;
font-weight: bolder;
color: white;
overflow-x: hidden;
background-color: grey;
background-attachment: fixed;
overflow-x: hidden;
}
.yellow{
  color: gold;
  font-family: 'Black Ops One', cursive;
}

.gold{
  font-family: 'Black Ops One', cursive;
  font-size: 90px;
  font-weight: 90px;
  color: gold;
  margin-top:-2%;
  text-shadow: 3px 1px 3px white;
}
.white{
  font-family: 'Black Ops One', cursive;
  font-size: 90px;
  font-weight: 90px;
  margin-top:5%;
  text-shadow: 3px 1px 3px gold;
}
h6{
  margin-top:-1%;
  font-family: 'Black Ops One', cursive; 
  color: gold;
}
.h6{
  color: white;
}
h5{
  color: white;
}
h4{
  font-family: 'Black Ops One', cursive;
  color: white;
}
h3{
  font-family: 'Black Ops One', cursive;
  color: maroon;
}
.stars{
  color: gold;
}
.prices{
  color: maroon;
}
body {
  margin:0;
  padding:0;
  background: #262626;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  height: 100%; /* Occupy full height of parent */
}

ul li {
  list-style: none;
  margin: 0 15px;
  text-align: center; /* Center text within list items */
}

ul li a {
  position: relative;
  display: block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: black;
  border-radius: 50%;
  font-size: 30px;
  color: #666;
  transition: .5s;
}

ul li a:before {
  content: '';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius:50%;
  background: white;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

ul li a:hover:before {
  transform: scale(1.2);
  box-shadow: 0 0 15px #d35400;
  filter: blur(3px);
}

ul li a:hover {
  color: #ffa502;
  box-shadow: 0 0 15px gold;
  text-shadow: 0 0 15px gold;
}
.cars{
  height:700px;
  width: 100%;
  background-color: black;
  margin: auto;
}
.customers{
  height: 500px;
  background-image: url(https://i.postimg.cc/2SrPgmKC/photo-1511184150666-9bb7d41a88f4.jpg);
  background-repeat: no repeat;
  background-attachment: fixed;
}
.card{
  width: 300px;
  margin: auto;
  background-color: black;
  background-attachment: fixed;
}
.container{
  text-align: left;
}
span{
  text-align: right;
}
.button {
        border: 1px transparent;
        -webkit-border-radius: 40px;
        border-radius: 40px;
        color: #eeeeee;
        cursor: pointer;
        display: inline-block;
        font-family: Arial;
        font-size: 20px;
        padding: 8px 30px;
        text-align: center;
        text-decoration: none;
        margin-left: 20px;
        -webkit-animation: glowing 1300ms infinite;
        -moz-animation: glowing 1300ms infinite;
        -o-animation: glowing 1300ms infinite;
        animation: glowing 1300ms infinite;
      }
      @-webkit-keyframes glowing {
        0% {
          background-color: #0091b2;
          -webkit-box-shadow: 0 0 3px gold;
        }
        50% {
          background-color: #21c7ed;
          -webkit-box-shadow: 0 0 15px gold;
        }
        100% {
          background-color: #0091b2;
          -webkit-box-shadow: 0 0 3px gold;
        }
      }
      @keyframes glowing {
        0% {
          background-color: gold;
          box-shadow: 0 0 3px gold;
        }
        50% {
          background-color: gold;
          box-shadow: 0 0 15px gold;
        }
        100% {
          background-color: gold;
          box-shadow: 0 0 3px gold;
        }
      }
      .svg-btn {
        display: block;
        width: 230px;
        height: 230px;
        margin-left: 10px;
      }
      svg {
        fill: blue;
        -webkit-animation: glowing-polygon 1300ms infinite;
        -moz-animation: glowing-polygon 1300ms infinite;
        -o-animation: glowing-polygon 1300ms infinite;
        animation: glowing-polygon 1300ms infinite;
      }
      @keyframes glowing-polygon {
        0% {
          fill: #0091b2;
          -webkit-filter: drop-shadow( 0 0 3px #0091b2);
        }
        50% {
          fill: #21c7ed;
          -webkit-filter: drop-shadow( 0 0 15px gold);
        }
        100% {
          fill: #0091b2;
          -webkit-filter: drop-shadow( 0 0 3px gold);
        }
      }
      @keyframes glowingPolygon {
        0% {
          fill: #0091b2;
          filter: drop-shadow( 0 0 3px gold);
        }
        50% {
          fill: #21c7ed;
          filter: drop-shadow( 0 0 15px gold);
        }
        100% {
          fill: #0091b2;
          filter: drop-shadow( 0 0 3px gold);
        }
      }

 /* Media Querries */
 @media screen and (max-width: 900px) {
    .gold {
      font-size: 60px;
    }

    .white {
      font-size: 60px;
    }

    h6 {
      margin-top: 1%;
    }
    h5{
      font-size:10px
    }
  .button{
    font-size: 15px;
  }

    /* Adjust other styles as needed */
  }
  @media screen and (max-width: 1200px) {
  
  .card{
    width: 200px;
  }
  
  }
  @media screen and (max-width: 779px) {
    .card{
    height: 200px;
    width: 150px;
  }
  }

  /* Media query for screens between 599px and 300px */
  @media screen and (max-width: 599px) {
    .gold {
      font-size: 40px;
    }

    .white {
      font-size: 40px;
    }

    h6 {
      margin-top: 0.5%;
    }

    /* Adjust other styles as needed */
  }
  @media screen and (max-width: 384px) {
    .button{
      font-size: 7px;
      padding: 10px;
      margin-bottom: -2%;
      top: 100%;
    }
  }

 
</style>
