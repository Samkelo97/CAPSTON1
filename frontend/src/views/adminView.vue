<template>
    <div>

      <div>
        <h2>Add Product</h2>
        <input v-model="newProduct.prodName" placeholder="Product Name" />
        <input v-model="newProduct.quantity" placeholder="Quantity" type="number" />
        <input v-model="newProduct.amount" placeholder="Amount" type="number" step="0.01" />
        <input v-model="newProduct.Category" placeholder="Category" />
        <input v-model="newProduct.prodUrl" placeholder="Product URL" />
        <button @click="addProduct" onclick="window.location.reload()">Add Product</button>
      </div>
      <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Product URL</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <!-- Table data -->
      <tr v-for="product in products" :key="product.prodID">
        <td>{{ product.prodID }}</td>
        <td>{{ product.prodName }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.amount }}</td>
        <td>{{ product.Category }}</td>
        <td><img :src="product.prodUrl" alt=""></td>
        <td>
          <button @click="editProduct(product)">Edit</button>
          <button @click="deleteProduct(product.prodID)" onclick="window.location.reload()">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </template>
  
  <script>

  import axios from "axios";
  import AddProductComp from "@/components/AddProductComp.vue";
  import spinner from "@/components/spinner.vue"
  export default {
    name: "AdminTable",
    components: { AddProductComp },
    components:{spinner},
    data() {
      return {
        newUser: {
          username: "",
          email: "",
          firstName: "",
          lastName: "",
        },
        newProduct: {
          prodName: "",
          quantity: 0,
          amount: 0,
          Category: "",
          prodUrl: "",
        },
      };
    },
    computed: {
      users() {
        return this.$store.state.users;
      },
      products() {
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch('fetchUsers');
      this.$store.dispatch('fetchProducts');
    },
    methods: {
      async addUser() {
        try {
          const response = await axios.post('https://capston1.onrender.com', this.newUser);
          alert(response.data.msg); // Assuming the response has a 'msg' property
          this.newUser = {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
          };
          this.fetchUsers();
        } catch (error) {
          console.error("Error adding user:", error);
        }
      },
      async editUser(user) {
        try {
          // Check if user.userId is defined
          if (user.userId === undefined) {
            console.error("User ID is undefined");
            return; // Exit the function to prevent the request
          }
          const updatedData = {
            username: this.newUser.username,
            email: this.newUser.email,
            firstName: this.newUser.firstName,
            lastName: this.newUser.lastName,
          };
          console.log('PATCH Request URL:', `
          https://capston1.onrender.com/update-user/${user.userId}`);
          console.log('PATCH Request Payload:', updatedData);
          // Make the PATCH request only if user.userId is defined
          await axios.patch(`https://capston1.onrender.com/update-user/${user.userId}`, updatedData);
          this.fetchUsers();
          alert('User updated successfully');
        } catch (error) {
          console.error("Error editing user:", error);
        }
      },
      async deleteUser(userId) {
        const confirmed = confirm("Are you sure you want to delete this user?");
        if (confirmed) {
          try {
            await this.$store.dispatch("deleteUser", userId);
            console.log("User deleted successfully!");
          } catch (error) {
            console.error("Error deleting user:", error);
            // Handle the error if needed
          }
        }
        this.$router.push("/admin");
      },
      async addProduct() {
        try {
          const response = await axios.post('https://capston1.onrender.com/add-products', this.newProduct);
          alert(response.data.msg); // Assuming the response has a 'msg' property
          this.newProduct = {
            prodName: "",
            quantity: 0,
            amount: 0,
            Category: "",
            prodUrl: "",
          };
          // this.fetchProducts()
        } catch (error) {
          console.error("Error adding product:", error);
        }
      },
      async editProduct(product) {
        try {
          // Check if product.prodID is defined
          if (product.prodID === undefined) {
            console.error("Product ID is undefined");
            return; // Exit the function to prevent the request
          }
          const updatedData = {
            prodName: this.newProduct.prodName,
            quantity: this.newProduct.quantity,
            amount: this.newProduct.amount,
            Category: this.newProduct.Category,
            prodUrl: this.newProduct.prodUrl,
          };
          console.log('PATCH Request URL:', `https://capston1.onrender.com/products/updateProduct/${product.prodID}`);
          console.log('PATCH Request Payload:', updatedData);
          // Make the PATCH request only if product.prodID is defined
          await axios.patch(`https://capston1.onrender.com/products/updateProduct/${product.prodID}`, updatedData);
          this.fetchProducts();
          alert('Product updated successfully');
        } catch (error) {
          console.error("Error editing product:", error);
        }
      },
      async deleteProduct(productId) {
        const confirmed = confirm("Are you sure you want to delete this product?");
        if (confirmed) {
          try {
            await this.$store.dispatch("deleteProduct", productId);
            console.log("Product deleted successfully!");
          } catch (error) {
            console.error("Error deleting product:", error);
            // Handle the error if needed
          }
        }
        this.$router.push("/admin");
      },
      resetForm() {
        // Reset the form after a successful add
        this.newUser.username = "";
        this.newUser.email = "";
        this.newUser.firstName = "";
        this.newUser.lastName = "";
      },
      populateForm(user) {
        this.newUser.username = user.username;
        this.newUser.email = user.email;
        this.newUser.firstName = user.firstName;
        this.newUser.lastName = user.lastName;
      },
    },
  };
  </script>
  
  <style scoped>

/* Responsive styles for the table */
@media screen and (max-width: 399px) {
  .table {
    font-size: 14px; /* Reduce font size for smaller screens */
    /* Add other styles to make the table smaller */
  }

  /* Adjust cell padding for smaller screens */
  .table td,
  .table th {
    padding: 8px; /* Adjust padding as needed */
  }

  /* Make the table scroll horizontally on smaller screens */
  .table-wrapper {
    overflow-x: auto;
  }
}

  .admin {
    background-image: url('https://i.postimg.cc/g2nbvTYz/dark-storage-with-shelves-many-forms-creating-different-shoes-boots.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 950px;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  .table th,
  .table td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  /* Style for product images */
  .table img {
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  /* Style for buttons */
  .table button {
    padding: 6px 12px;
    background-color: #3490DC;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  .table button:hover {
    background-color: #2779BD;
  }
  </style>