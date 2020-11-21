<template>
  <div id="Reserva">
      <div class="c-text">
     <h2 class="text-center h2-color">Promociones del dia {{ dayOfWeeknd }}</h2>
     </div>
    <div class="container-r">
      <div class="card_r" v-for="Datos in local" :key="Datos._id">
        <div class="c_content">
            <span></span>
        <span></span>
        <span></span>
        <span></span>
          <img :src="Datos.url_img" />
          <h3>{{ Datos.Nombre }}</h3>
          <p><b class="b">Descripcion:</b> {{ Datos.Descripcion }}.</p>
          <p><b class="b">Límite de personas:</b> {{ Datos.CantidadMaxima }}</p>
          <p><b class="b">Precio:</b> ${{ Datos.Precio }}</p>
          <!-- <p><b class="b">Precio:</b> ${{ Datos.Descuento }}</p> -->
          <button class="button" @click="validar(Datos._id)">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        PromoDia: "Lunes",
        local:[],
        dayOfWeeknd: ""
    }
},
async mounted(){
    const response = await axios.get('api/locales/promo/' + this.dayOfWeeknd)
    this.local = response.data
    console.log(response.data)
},
methods: {
  getDay() {
    let fecha = new Date();
    let day = fecha.getDay();
    let days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    this.dayOfWeeknd = days[day];
  },
   async validar(datoId){
     await axios.get('api/locales/' + datoId).then(
       res =>{
        console.log(res)
        this.$router.push({name: "PeticionPromo", params: {id: datoId}})
        .catch(err =>{
          console.log(err);
          this.$router.push({name: "login"})
        })
       }
     )

   }
},
created(){
 this.getDay()
}
}
</script>

<style scoped>
@import url('../../../public/css/card.css');
.h2-color{
    color: white;
    font-size: 2.4em;
    font-weight: 900;
}
.c-text{
    margin: 20px 0 0 0;
}
.b{
  font-weight: bold;
}
.container-r .card_r {
    background: #5F9EA0;
}
.container-r .card_r .c_content p,
.container-r .card_r:hover .c_content p,
.container-r .card_r .c_content h3,
.container-r .card_r:hover .c_content h3 {
    color: #fff;
}
.container-r .card_r .c_content button {
    color: #fff;
    background: #5F9EA0;
    border: 2px solid #fff;
}

.container-r .card_r .c_content button:hover {
    background: #fff;
    color: #5F9EA0;
}
.container-r .card_r span:nth-child(1){
    background: linear-gradient(to right, transparent, #fff); 

}
.container-r .card_r span:nth-child(2){
    background: linear-gradient(to bottom, transparent, #fff); 

}
.container-r .card_r span:nth-child(3){
    background: linear-gradient(to left, transparent, #fff); 
    
}
.container-r .card_r span:nth-child(4){
    background: linear-gradient(to top, transparent, #fff); 
}

</style>