<template>
   <div>
    <div class="tablas-administracion">
     <b-jumbotron bg-variant="dark" text-variant="light" fluid>
      <h3 style="color: #fff; font-weight: bold">Pendientes</h3>
      <table class="table table-hover table-light text-left">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Evento</th>
            <th scope="col">Usuario</th>
            <th scope="col">Cantidad de Personas</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
            <th class="text-center" scope="col" colspan="2">Accion</th>
          </tr>
        </thead>
        <td colspan="7" v-if="Object.keys(enEspera).length === 0" class="text-center">
         <h5>No hay reservas pendientes</h5>
         </td>
        <tbody v-for="(espera, i) in enEspera" :key="espera._id">
            <td>{{i+1}}</td>
            <td>{{espera.Evento}}</td>
            <td>{{espera.Usuario}}</td>
            <td class="text-center">{{espera.CantidadPersonas}}</td>
            <td>{{filterDate(espera.Fecha)}}</td>
            <td>{{espera.Estado}}</td>
            <td>
                <button type="button" @click="aceptar(espera, i)"  class="btn btn-success btn-sm">Aprovar</button>
                </td><td>
                <button type="button" @click="rechazar(espera, i)" class="btn btn-danger btn-sm">Rechazar</button>
            </td>
        </tbody> 
      </table>
      </b-jumbotron>

      <b-jumbotron bg-variant="light" text-variant="light" fluid> 
       <h3 style="color: #343a40; font-weight: bold">Aprovadas</h3>
      <table class="table table-hover table-dark text-left">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Evento</th>
            <th scope="col">Usuario</th>
            <th scope="col">Cantidad de Personas</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
         <td colspan="6" v-if="Object.keys(Aprovado).length === 0" class="text-center">
         <h5>No hay reservas aprovadas</h5>
         </td>
        <tbody v-for="(ap, i) in Aprovado" :key="ap._id">
            <td>{{i+1}}</td>
            <td>{{ap.Evento}}</td>
            <td>{{ap.Usuario}}</td>
            <td class="text-center">{{ap.CantidadPersonas}}</td>
            <td>{{filterDate(ap.Fecha)}}</td>
            <td>{{ap.Estado}}</td>
        </tbody> 
      </table>
      </b-jumbotron>
       <b-jumbotron bg-variant="dark" text-variant="light" fluid> 
      <h3 style="color: #fff; font-weight: bold">Rechazadas</h3>
      <table class="table table-hover table-light text-left">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Evento</th>
            <th scope="col">Usuario</th>
            <th scope="col">Cantidad de Personas</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <td colspan="6" v-if="Object.keys(Rechazado).length === 0" class="text-center">
         <h5>No hay reservas rechazadas</h5>
         </td>
        <tbody v-for="(rz, i) in Rechazado" :key="rz._id">
            <td>{{i+1}}</td>
            <td>{{rz.Evento}}</td>
            <td>{{rz.Usuario}}</td>
            <td class="text-center">{{rz.CantidadPersonas}}</td>
            <td>{{filterDate(rz.Fecha)}}</td>
            <td>{{rz.Estado}}</td>
        </tbody> 
      </table>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import jwt_decode from "jwt-decode";
import axios from 'axios'

export default {
  name: "admin",
  data() {
    return {
      userData: {},
      Estado:{
          Aprovado: 'Aprovado',
          Rechazado: 'Rechazada',
          Espera: 'En Espera'
      },
      enEspera: [],
      Aprovado: [],
      Rechazado: []
    }
  },
  computed: {
    ...mapState(["token"]),
  },
  async mounted() { 
    this.userData = jwt_decode(this.token);

    const resEspera = await axios.get('api/reserva/admin/' + this.Estado.Espera)
    this.enEspera = resEspera.data
    
    const resAprovado = await axios.get('api/reserva/admin/' + this.Estado.Aprovado)
    this.Aprovado = resAprovado.data

    const resRechazado = await axios.get('api/reserva/admin/' + this.Estado.Rechazado)
    this.Rechazado = resRechazado.data


  },
methods:{
    filterDate(date) {
    return date.slice(0, 10);
},
    aceptar(Aprovado){
        console.log(Aprovado._id)
      axios.put('api/reserva/' + Aprovado._id, {
         Estado: "Aprovado"
     }).then(
         window.location.href="/admin"
     ).catch(err => console.log(err))
    },
   rechazar(reserva){
     axios.put('api/reserva/' + reserva._id, {
         Estado: "Rechazada"
     }).then(
         window.location.href="/admin"
     ).catch(err => console.log(err))
   },
 ...mapActions(['getToken'])
  },
  created(){
    this.getToken()
  },
}
</script>

<style scoped>

</style>