<template>
    <div>
      <div class="filter-sort-search d-flex justify-content-center flex-wrap">
        <div class="search box">
          <button class="btn-search"><i class="fas fa-search"></i></button>
          <input type="text" v-model="searchQuery" class="input-search" placeholder="Type to Search...">
        </div>
        <div class="category-filter d-flex mx-3 flex-wrap justify-content-center">
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('all')">All Products</p>
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('Toyota')">Toyota</p>
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('Vw')">Vw</p>
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('Mercedes')">Mercedes</p>
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('Bmw')">BMW</p>
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('Mazda')">Mazda</p>
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('Jeep')">Jeep</p>
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('Land Rover')">Land Rover</p>
          <p class="mx-2 fw-bold fs-6" @click="filterProducts('Range Rover')">Range Rover</p>
        </div>
        <div>
          <label for="sortOrder">Sort By:</label>
          <select v-model="selectedSortOrder" id="sortOrder">
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      <div v-if="products">
        <ProductsComp :products="filteredProducts" />
      </div>
      <div v-else>
        <spinner />
      </div>
    </div>
  </template>
  
  <script>
  import ProductsComp from '@/components/ProductsComp.vue';
  import spinner from '@/components/spinner.vue';
  
  export default {
    components: { ProductsComp, spinner },
    computed: {
      products() {
        return this.$store.state.products;
      },
      filteredProducts() {
        let productView = this.products;
      if(this.selectedCategory !== 'all') {
        productView = productView.filter(product => product.category === this.selectedCategory)
      }
       if (this.shouldApplyPriceFilter && this.minPrice !== null && this.maxPrice !== null) {
        // Additional debugging
        console.log("Filtering products by price...");
        console.log("Min Price:", this.minPrice);
        console.log("Max Price:", this.maxPrice);
        productView = productView.filter(product => {
          // Additional debugging
          console.log("Product Price:", product.price);
          // Ensure all values are numbers and within the desired range
          const validPrice = !isNaN(product.amount) && !isNaN(this.minPrice) && !isNaN(this.maxPrice) &&
            product.amount >= parseFloat(this.minPrice) && product.amount <= parseFloat(this.maxPrice);
          return validPrice;
        });
        // Additional debugging
        console.log("Filtered Products:", productView);
        // this.shouldApplyPriceFilter = false;
      }
      if (this.selectedSortOrder === 'ascending') {
  productView.sort((a, b) => {
    const nameA = a.prodName.toLowerCase();
    const nameB = b.prodName.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
} else if (this.selectedSortOrder === 'descending') {
  productView.sort((a, b) => {
    const nameA = a.prodName.toLowerCase();
    const nameB = b.prodName.toLowerCase();
    if (nameA < nameB) return 1;
    if (nameA > nameB) return -1;
    return 0;
  });
}
      // if (this.selectedSortOrder === 'ascending') {
      //   productView.sort((a, b) => a.price - b.price);
      // } else if (this.selectedSortOrder === 'descending') {
      //   productView.sort((a, b) => b.price - a.price);
      // }
      if (this.searchQuery) {
        productView = productView.filter(product =>
          product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
       return productView;
      },
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
    },
    data() {
      return {
        selectedCategory: 'all',
        isLoading: true,
        minPrice: null,
        maxPrice: null,
        shouldApplyPriceFilter: false,
        selectedSortOrder: 'ascending',
        searchQuery: '',
      };
    },
    methods: {
        filterProducts(category) {
      // Call the new action to fetch all products
      this.selectedCategory = category;
    },
    products() {
      return this.$store.state.products;
      return this.$store.state.filteredProducts || this.$store.state.products;
    },
    applyPriceFilter() {
        this.shouldApplyPriceFilter = true;
        // this.shouldApplyPriceFilter = false;
      },
      // ... your other methods ...
    },
  };
  </script>
  