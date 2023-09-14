<template>
    <div>
        <div v-if="products">
            <ProductsComp :products="products"/>
        </div>
    
        <div v-else>
            Processing...
        </div>      
    </div>
</template>
<script>
import ProductsComp from '@/components/ProductsComp.vue';
export default {
    components: { ProductsComp },

    computed: {
        products() {
            return this.$store.state.products;
        }
    },

    mounted() {
        this.$store.dispatch("fetchProducts");
    }
}
</script>