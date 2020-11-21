<template>
  <div id="Reserva">
    <div class="container-r">
      <div class="card_r"  v-for="(Datos, i) in local" :key="Datos._id">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="c_content" >
            <h2>{{i+1}}</h2>
            <img :src="Datos.url_img">
             <h3>{{Datos.Nombre}}</h3>
             <p><b class="b">Descripcion:</b> {{Datos.Descripcion}}.</p>
             <p><b class="b">Límite de personas:</b> {{Datos.CantidadMaxima}}</p>
             <p><b class="b">Precio:</b> ${{Datos.Precio}}</p>
             <button class="button" @click="validar(Datos._id)">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "reserva",
  data() {
   return{
     local:[]
   }
  },
  async mounted(){
    const res = await axios.get('api/locales/');
    this.local = res.data;
    console.log(res.data)
  },
   methods:{
   async validar(datoId){
     await axios.get('api/locales/' + datoId).then(
       res =>{
        console.log(res)
        this.$router.push({name: "Peticion", params: {id: datoId}})
        .catch(err =>{
          console.log(err);
          this.$router.push({name: "login"})
        })
       }
     )

   }
  }
};
</script>

<style scoped>
@import url('../../public/css/card.css');
.b{
  font-weight: bold;

}
</style>