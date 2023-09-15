<template>
  <div>
    <div v-if="cartItems.length > 0" class="row p-4 justify-content-evenly">
      <Cart />
    </div>
    <div v-else>Cart is empty.</div>
  </div>
</template>

<script>
import axios from 'axios';

import Cart from "@/components/Cart.vue";

export default {
  components: {
    Cart
  },
  data() {
    return {
      cartItems: []
    };
  },
  mounted() {
    this.getCartItems();
  },
  methods: {
    getCartItems() {
      axios.get('https://capston1.onrender.com/cart/')
        .then(response => {
          this.cartItems = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script> 

