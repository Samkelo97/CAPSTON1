<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Cart ID</th>
          <th>Product Name</th>
          <th>amount</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.cartID" class="cart-card">
          <td>{{ item.cartID }}</td>
          <td>{{ item.prodName }}</td>
          <td>R {{ item.amount }}.00</td>
          <td>
            <input
              type="number"
              v-model="item.quantity"
              @input="updateQuantity(item)"
              min="1"
            />
          </td>
          <td>R {{ item.amount * item.quantity }}.00</td>
          <td>
            <button
              v-if="item.cartID"
              @click="removeItem(item.cartID)"
              class="btn btn-danger"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
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
      // Make a GET request to retrieve the cart items from the server
      // Replace 'YOUR_SERVER_URL' with the actual URL of your server
      axios.get('YOUR_SERVER_URL/cart/' + userId)
        .then(response => {
          this.cartItems = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateQuantity(item) {
      // Make a PUT request to update the quantity of a cart item
      // Replace 'YOUR_SERVER_URL' with the actual URL of your server
      axios.put('YOUR_SERVER_URL/cart/' + item.cartID, { quantity: item.quantity })
        .then(response => {
          // Quantity updated successfully
        })
        .catch(error => {
          console.error(error);
        });
    },
    removeItem(cartID) {
      // Make a DELETE request to remove a cart item
      // Replace 'YOUR_SERVER_URL' with the actual URL of your server
      axios.delete('https://capston1.onrender.com/cart/' + cartID)
        .then(response => {
          // Item removed successfully
          this.getCartItems(); // Refresh cart items after removal
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped></style>