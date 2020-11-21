<template>
  <div class="container">
    <div class="card text-center">
      <div class="card-header">
        <h3>Reserva de Local</h3>
      </div>
      <div class="card-body text-left">
        <form @submit.prevent="EnviarPeticion" class="f-center">
          <label for="email">Evento:</label>
          <input name="local" class="form-control" v-model="show.Nombre" id="email" readonly /><br>

          <label>Fecha:</label>
          <input type="date" class="form-control" autofocus required /><br>

          <label>Cantidad de Personas</label>
          <input
            type="number"
            class="form-control"
            autocomplete="off"
            :formatter="Limitar"
            :max="limite.max"
            :min="limite.min"
            v-model="show.CantidadMaxima"
            required
          /><br>

          <label>Precio:</label>
          <div class="input-group mb-2">
          <div class="input-group-prepend">
          <div class="input-group-text">$</div>
          </div>
          <input type="number" class="form-control" v-model="show.Precio" readonly />
          </div>
          <br />
          
          <button class="btn btn-primary btn-block" type="submit">Reservar</button>
        
        </form>
      </div>
      <div class="card-footer text-muted">
        <h3>{{userData.Usuario}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {mapState, mapActions} from 'vuex'
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  name: "Peticion",
  data() {
    return {
      show: [],
      limite: {
        max: "",
        min: "10",
      },
      userData:{}
    };
  },
  computed:{
 ...mapState(['token'])   
},
  async mounted() {
    const res = await axios.get("api/locales/" + this.$route.params.id);
    this.show = res.data;
    this.limite.max = res.data.CantidadMaxima;
    
    let decoded = jwt_decode(this.token);
    this.userData = decoded
    console.log(decoded)
  },
  methods: {
    Limitar(e) {
      return String(e).substring(0, 3);
    },
    async EnviarPeticion() {
      await axios
        .post("api/reserva/add", {
          Evento: this.show.Nombre,
          Fecha: this.show.Fecha,
          CantidadPersonas: this.show.CantidadMaxima,
          Usuario: this.userData.Usuario,
          Estado: "En Espera"
        })
        .then((res) => {
          this.$router.push('/Mreserva')
          console.log(res);
        })
        .catch((err) => {
           this.$router.push('/')
          console.log(err);
        });
    },
  ...mapActions(['getToken'])
  },
  created(){
    this.getToken()
  },
};
</script>

<style scoped>
.f-center {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
}
.container{
  display: flex;
  width:100vw;
  height:100vh;
  justify-content: center;
  align-items: center;
}
h3{
  font-size: 1.5em;
  font-weight: 600;
}
</style>