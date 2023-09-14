import { createStore } from "vuex";
import axios from "axios";
import Swal from 'sweetalert2'

const fullStackEOMPUrl = "https://capston1.onrender.com/";

export default createStore({
  state: {
    token: null,
    isLoggedIn: false,
    cart: [],
    users: null,
    user: null,
    product: null,
    products: null,
    spinner: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.users = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    addUser(state, newUser) {
      state.users.push(newUser);
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(
        (product) => product.prodID !== productId
      );
    },
    deleteUser(state, userId) {
      state.users = state.users.filter((user) => user.userID !== userId);
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(
        (item) => item.prodID === product.prodID
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        product.quantity = 1;
        state.cart.push(product);
      }
    },
    updateCartItemQuantity(state, { prodID, prodQUANTITY }) {
      const cartItem = state.cart.find((item) => item.prodID === prodID);
      if (cartItem) {
        cartItem.quantity = prodQUANTITY;
      }
    },
    removeItem(state, cartID) {
      const index = state.cart.findIndex((item) => item.cartID === cartID);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    setUserFromLocalStorage(state) {
      const token = localStorage.getItem("userToken");
      if (token) {
        state.token = token;
        state.isLoggedIn = true;
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
          state.users = userData;
        }
      }
    },
    clearUser(state) {
      state.users = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${fullStackEOMPUrl}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },

    async addNewUser(context, newUser) {
      try {
        const response = await axios.post(
          `${fullStackEOMPUrl}register`,
          newUser
        );
        if (response.status === 201) {
          context.commit("addUser", newUser);
        }
      } catch (error) {
        console.error("Error adding new user:", error);
      }
    },
    async registerUser({ commit }, userData) {
      try {
        const response = await axios.post(`${fullStackEOMPUrl}register`, userData);
        const user= response.data;
        commit("setUser", user);
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Successful Registration ",
            text: "You have registered successfully .",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: "An error occurred during registration.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    },
    //Login
    async loginUser({ commit }, credentials) {
      try {
        const response = await axios.post(`${fullStackEOMPUrl}login`, credentials);
        if (response.status === 200) {
          const { token, user } = response.data;
          console.log(response.data);
          console.log(token);
          commit("setToken", token);
          commit("setUser", user);
          // Store user data in local storage
          localStorage.setItem("userToken", token);
          localStorage.setItem("userData", JSON.stringify(response.data));
          window.location.reload();
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You have logged in successfully .",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred during login.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    },
    logout({ commit }) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userData");
      commit("clearUser");
      window.location.reload();
    },

    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${fullStackEOMPUrl}products`);
        context.commit("setProducts", data.results);
        console.log(data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },

    async fetchProduct(context, prodID) {
      try {
        const { data } = await axios.get(
          `${fullStackEOMPUrl}products/${prodID}`
        );
        context.commit("setProduct", data.result[0]);
        console.log(data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },


    async deleteProduct(context, prodID) {
      try {
        context.commit("setDeletionStatus", null);
        const response = await axios.delete(
          `${fullStackEOMPUrl}products/${prodID}`
        );
        if (response.status !== 200) {
          throw new Error(
            `Failed to delete product. Status: ${response.status}`
          );
        }
        context.commit("removeProduct", prodID);
        context.commit("setDeletionStatus", "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        context.commit("setDeletionStatus", "error");
      }
    },

    async editProduct(context, { prodID, updatedData }) {
      try {
        const response = await axios.patch(
          `${fullStackEOMPUrl}products/${prodID}`,
          updatedData
        );
        if (response.status !== 200) {
          throw new Error(
            `Failed to update product. Status: ${response.status}`
          );
        }
        context.commit("updateProduct", { prodID, updatedData });
        context.commit("setEditStatus", "success");
      } catch (error) {
        console.error("Error editing product:", error);
        context.commit("setEditStatus", "error");
      }
    },

  async getCart({ commit }) {
    try {
      const response = await axios.get(`${fullStackEOMPUrl}cart`);
      commit("setCart", response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  },
  async addToCart({ commit, state }, product) {
    try {
      if (!state.cart) {
        console.error("Cart is not initialized.");
        return false;
      }
      const response = await axios.post(`${fullStackEOMPUrl}cart`, product);
      console.log(product);
      if (response.status === 200) {
        commit("addToCart", response.data);
        console.log("addToCart", response.data);
        await this.dispatch("getCart");
        Swal.fire({
          icon: "success",
          title: "Added to Cart",
          text: "The product has been added to your cart.",
        });
        return true;
      } else {
        console.error("Error adding to cart:", response.statusText);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding the product to your cart.",
        });
        return false;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the product to your cart.",
      });
      throw error;
    }
  },
  async removeItem({ commit }, cartID) {
    try {
      await axios.delete(`${fullStackEOMPUrl}cart/${cartID}`);
      commit("removeItem", cartID);
      console.log(cartID);
      Swal.fire({
        icon: "success",
        title: "Item Removed",
        text: "The item has been successfully removed from the cart.",
      });
    } catch (error) {
      console.error("Error removing from cart:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while removing the item from the cart.",
      });
    }
  },
  // removeItem(state, crt) {
  //   const existingProduct = state.cart.find(
  //     (crt) => crt.prodID === crt.prodID
  //   );
  //   if (existingProduct) {
  //     existingProduct.quantity += 1;
  //   } else {
  //     state.cart.push({ ...product, quantity: 1 });
  //   }
  // },
  async updateCartItemQuantity(
    { commit, state },
    { cartID, prodID, quantity }
  ) {
    try {
      const response = await axios.patch(`${fullStackEOMPUrl}cart/${prodID}`, {
        quantity,
      });
      if (response.status === 200) {
        // commit("updateCartItemQuantity", { prodID, quantity });
        const cartItem = state.cart.find(
          (item) => item.cartID === cartID && item.prodID === prodID
        );
        if (cartItem) {
          cartItem.quantity = quantity;
          commit("setCart", [...state.cart]);
        }
        console.log(cartID);
      } else {
        console.error(
          "Error updating cart item quantity:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      throw error;
    }
  },
  //User
  //register
 

}});

