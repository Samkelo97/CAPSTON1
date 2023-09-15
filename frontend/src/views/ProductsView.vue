<template>
    <div>
        <div v-if="products">
            <ProductsComp :products="products"/>
        </div>
    
        <div v-else>
           <spinner/>
        </div>      
    </div>
</template>
<script>
import ProductsComp from '@/components/ProductsComp.vue';
import spinner from '@/components/spinner.vue';
export default {
    components: { ProductsComp ,spinner},

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