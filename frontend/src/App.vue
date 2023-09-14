<template>
  <div>
  <navbar/>
 <router-view/>
 <div class="footer">
 <footerComp/> 
 </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footerComp from '@/components/footer.vue';
export default {
  components:{navbar, footerComp}
}



</script>
<style>
.footer{
  background-color:black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
