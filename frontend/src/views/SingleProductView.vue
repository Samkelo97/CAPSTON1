<template>
  

<div> 
  <div v-if="product" id="container"> 
    <img :src="product.prodUrl" alt="" id="image"> 
    <h1>{{ product.prodName }}</h1> 
    <p> {{ product.Category }}</p> 
    <p> {{ product.amount }}</p> 
    <button @click="addToCart()">add to cart</button> 
  </div> 
</div> 
</template> 
<script>
import Swal from 'sweetalert2'
import axios from 'axios' 
import cart from './cart.vue';// Import Axios

export default {
  components:{cart},
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    const prodID = this.$route.params.prodID;
    this.$store.dispatch("fetchProduct", prodID);
  },
  methods: {
    async addToCart() {
      try {
        const userDataJSON = localStorage.getItem('userData'); // Retrieve user data from local storage
        if (userDataJSON) {
          const userData = JSON.parse(userDataJSON);
          const userID = userData.result.userID;
          const product = {
            prodID: this.product.prodID,
            userID: userID,
          };

          // Send a POST request to add the product to the cart in your database
          // Replace 'YOUR_SERVER_URL' with the actual URL of your server
          await axios.post('https://capston1.onrender.com/Cart', product);

          // Retrieve the current cart data from local storage (if any)
          const cartData = JSON.parse(localStorage.getItem('Cart')) || [];
          const existingProductIndex = cartData.findIndex(
            (item) => item.prodID === product.prodID
          );
          if (existingProductIndex !== -1) {
            const existingProduct = cartData[existingProductIndex];
            existingProduct.quantity += 1;
          } else {
            product.quantity = 1;
            cartData.push(product);
          }
          // Store the updated cart data in local storage
          localStorage.setItem('Cart', JSON.stringify(cartData));

          Swal.fire({
            icon: 'success',
            title: 'Added to Cart',
            text: 'The product has been added to your cart.',
          });
        } else {
          console.error('User data not found in local storage.');
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while adding the product to your cart.',
        });
      }
    },
  },
};
</script>


<style scoped> 
button{ 
background-color: gold; 
color: white; 
} 
button:hover{ 
background-color: maroon; 
} 
h1{ 
color: gold; 
font-family: 'Black Ops One', cursive; 
} 
p{ 
color: maroon; 
font-size:large; 
font-family: 'Black Ops One', cursive; 
} 
#image{ 
width: 800px; 
height: 600px; 
} 
.container{ 
box-shadow: 1px 2px 3px 1px; 
width:800px ; 
height: 600px; 
} 
</style> 