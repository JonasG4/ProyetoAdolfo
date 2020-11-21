<template>
  <div id="MisReservas">
    <b-jumbotron bg-variant="dark" text-variant="light" fluid>   
    <div class="">
      <table class="table table-striped table-light text-left">
        <thead class="thead-light">
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Evento</th>
            <th scope="col">Cantidad de Personas</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
       <td colspan="5" v-if="Object.keys(reservaUser).length === 0" class="text-center">
         <h5>Aún no hay hecho ninguna reserva</h5>
         </td>
        <tbody v-for="(rpu, i) in reservaUser" :key="rpu._id" class="tbody-light">
            <td>{{i+1}}</td>
            <td>{{rpu.Evento}}</td>
            <td class="text-center">{{rpu.CantidadPersonas}}</td>
            <td>{{filterDate(rpu.Fecha)}}</td>
            <td>{{rpu.Estado}}</td>
        </tbody>
      </table>
    </div>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapState } from "vuex";
import jwt_decode from "jwt-decode";
import axios from 'axios'

export default {
  name: "Mreserva",
  data() {
    return {
      userData: {},
      reservaUser: []
    };
  },
  computed: {
    ...mapState(["token"]),
  },
  async mounted() { 
    this.userData = jwt_decode(this.token);
    console.log(this.userData.Usuario)
    
    const response = await axios.get('api/reserva/' + this.userData.Usuario)
      this.reservaUser = response.data
      console.log(response.data)

    
  },
  methods: {
    async datosProtegidos() {
      try {
        const res = await fetch("api/admin/", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": this.token,
          },
        });
        const dataDB = await res.json();
        console.log(dataDB);
      } catch (error) {
        console.log(error);
      }
    },
    filterDate(date) {
    return date.slice(0, 10);
}
  },
  created() {
    this.datosProtegidos();
  },
};
</script>

<style scoped>
.title-r {
  position: relative;
  width: 100%;
  height: 75px;
  background: #343a40;
  text-align: center;
  color: #ffffff;
}
.title-r h1 {
  font-size: 3em;
}

.line-r {
  position: relative;
  display: block;
  width: 100%;
  height: 10px;
  background: #2988bc;
}
</style>