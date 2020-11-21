<template>
  <!--Este componente le da facilidad al usuario de visualizar su entrada antes de publicarla-->
  <div id="Pre_Visualizar">
    <!--Se crea el sistema grid-->
    <b-container fluid>
      <b-row>
        <!--La visualizacion tendrá el ancho total (12 columnas) de la página-->
        <b-col cols="12" class="p-4">
          <div>
            <!--Se obtiene en tiempo real los datos agregados por el usuario, antes de publicarlos-->
            <b-card
              class="Card"
              footer-tag="footer"
              footer-bg-variant="dark"
              footer-text-variant="light"
            >
              <b-card-body>
                <b-card-title>
                  <!--Se comprueba si se ha obtenido texto escrito por el usuario-->
                  <h3 v-if="Formulario.Título == ''">
                    No se ha añadido un título
                  </h3>
                  <h3 v-else>{{ Formulario.Título }}</h3>
                </b-card-title>
                <b-card-sub-title>
                  <p v-if="Formulario.Descripción == ''">
                    No se ha añadido una descripción para la entrada
                  </p>
                  <p v-else>{{ Formulario.Descripción }}</p>
                </b-card-sub-title>
                <b-card-text>
                  <p v-if="Formulario.Contenido == ''">
                    No se ha añadido el contenido de la entrada
                  </p>
                  <p v-else>{{ Formulario.Contenido }}</p>
                </b-card-text>
              </b-card-body>

              <template #footer>
                <b-avatar variant="light"></b-avatar>
                <span> {{ userData.Usuario }}</span>
              </template>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!--Aquí termina el sistema grid-->
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import {mapState} from 'vuex'
export default {
  name: "Pre_Visualizar",
  data(){
    return{
      userData:{}
    }
  },
  //Se importa como propiedad el Objeto formulario
  props: {
    Formulario: {
      type: Object,
    },
  },
    computed:{
 ...mapState(['token'])   
},
  async mounted() {
     //Obtener datos del token
    let decoded = jwt_decode(this.token);
    this.userData = decoded
     console.log(this.userData.Usuario)
     }
 }

</script>

<style scoped>
.Card {
  margin: auto;
  padding: auto;
  width: 60%;
}
</style>