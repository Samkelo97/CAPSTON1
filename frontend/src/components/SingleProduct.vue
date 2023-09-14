<!-- <template>
  <div  v-if="product" class="single-view row justify-content-center my-5 w-100">
      <div class="product col-lg-6 col-md-6 col-12 d-flex justify-content-center mb-5" >
          <img class="img-fluid" :src="product.primary_image_url" alt="">
      </div>
      <div class="description col-lg-6 col-md-6 col-12 d-flex justify-content-center px-5">
         <div class="fixing">
          <h2 class="mb-3 text-center fw-bolder">{{ product.product_name }}</h2>
         <p class="fs-6 lead text-center fw-bold text-wrap">{{ product.description }}</p>
         <p class="h4 mb-4 text-center fw-bold">R {{ product.price }}</p>
         <p class="text-center">
            <button class="border-0 bg-black text-white fw-bold px-1">Add To Bag</button>
         </p>
         </div>
      </div>
  </div>
</template>
<script>
export default {
computed: {
  product() {
    return this.$store.state.product;
  },
},
mounted() {
  const prodID = this.$route.params.prodID;
  this.$store.dispatch("getProductById", prodID);
},
};
</script> -->
  <template>
    
  </template>
  <style scoped>
  /* Add styles for the single product view here */
  </style>
  