<template>
  <div>
    <h2>Your Cart</h2>
    <div v-if="cartItems.length > 0" class="row p-4 justify-content-evenly">
      <div v-for="item in cartItems" :key="item.cartID" class="cart-card">
        <div class="product-details">
          <img :src="item.prodUrl" alt="Product Image" class="product-image" />
          <div class="product-info">
            <h3>{{ item.prodName }}</h3>
            <p>Quantity: {{ item.quantity }}</p>
            <!-- Add more product details as needed -->
          </div>
        </div>
      </div>
    </div>
    <div v-else>Your cart is empty.</div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      // Retrieve cart items from local storage
      return JSON.parse(localStorage.getItem('cart')) || [];
    },
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.product-image {
  width: 100px; /* Adjust image width as needed */
  height: auto;
  margin-right: 20px; /* Add spacing between image and info */
}

.product-info {
  flex: 1;
}

/* Add more styling as needed */
</style>
