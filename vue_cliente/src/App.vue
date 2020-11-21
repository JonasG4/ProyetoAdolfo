<template>
  <div id="app">
    <!--Importando el componente de la navbar-->
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Componentes_Globales/Navbar.vue";
import Footer from '@/components/Componentes_Globales/Footer.vue'
import {mapActions} from 'vuex'

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  methods:{
    ...mapActions(['getToken'])
  },
  created(){
    this.getToken()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
