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
export default { 
computed: { 
product() { 
  return this.$store.state.product; 
} 
}, 
mounted() { 
const prodID = this.$route.params.prodID; 
this.$store.dispatch("fetchProduct", prodID) 
}, 
methods:{ 
methods: { 
async addToCart() { 
try { 
  const userDataJSON = Cookies.get('userData'); // Retrieve user data from cookies 
  if (userDataJSON) { 
    const userData = JSON.parse(userDataJSON); 
    const userID = userData.result.userID; 
    const product = { 
      prodID: this.product.prodID, 
      userID: userID, 
    }; 
    // Retrieve the current cart data from cookies (if any) 
    const cartData = Cookies.getJSON('cart') || []; 
    const existingProductIndex = cartData.findIndex( 
      (item) => item.prodID === product.prodID 
    ); 
    if (existingProductIndex !== -1) { 
      const existingProduct = cartData[existingProductIndex]; 
      existingProduct.quantity += this.quantity; 
      // Update the existing product in the cart data 
      cartData.splice(existingProductIndex, 1, existingProduct); 
    } else { 
      product.quantity = this.quantity; 
      cartData.push(product); 
    } 
    // Store the updated cart data in cookies 
    Cookies.set('cart', cartData); 
    // Trigger an action to update the Vuex store cart state 
    await this.$store.dispatch('updateCartFromCookies'); 
    Swal.fire({ 
      icon: 'success', 
      title: 'Added to Cart', 
      text: 'The product has been added to your cart.', 
    }); 
  } else { 
    console.error('User data not found in cookies.'); 
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
} 
} 
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