<template>
    <div>
      <h2>Products</h2>
      <!-- Add a container div with overflow: hidden -->
      <div class="content-container">
        <!-- PRODUCTS -->
        <div class="row">
          <!-- PRODUCTS -->
          <div class="col-lg-4 col-md-4 col-12" v-for="product in products" :key="product.prodID">
            <div class="card" style="width: 18rem; margin:20px; margin-left: 40px;">
              <img :src="product.prodUrl" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">{{ product.Category }}</p>
                <h6>R{{ product.amount }}</h6>
                <router-link class="btn" :to="{ name: 'singleProduct', params: { prodID: product.prodID } }"> More Details </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  /* Add CSS for the content container with overflow: hidden */
  .content-container {
    overflow: hidden;
  }
  </style>
  

<script>

// import { mapState } from 'vuex';
export default {
    props: ["products"],
    // computed: {
    //     ...mapState(['products']), 
    // },
    // mounted() {
    //     this.$store.dispatch('getProducts');
    // },
    // methods: {
    //     editProduct(prodID) {
           
    //     },
    //     deleteProduct(prodID) {
            
    //     },
    // },
};
</script>

<style scoped>
.btn{
    background-color: black;
    color: white;
}
.btn:hover{
    background-color:white;
    color: black;
}
.row {
    align-items: center;
    border-top: solid black 3px;
}
.col-4{
    padding: 10px;
    display: flex;
    justify-content: space-around;
}
.card:hover{
    transform: scale(1.1);
    box-shadow: 1px 2px 3px 1px grey;
}
.video {
    width: 100% !important;
    height: 350px;
}
</style>