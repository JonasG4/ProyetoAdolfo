<template>
  <div id="Blog">
    <!--Se llama el componente del formulario y a la vez, se envían (y reciben) parámetros y métodos que se necesitarán en dicho componente-->
    <Formulario
      :Alerta="Alerta"
      :Entrada="Entrada"
      @Formulario="Formulario = $event"
      :CrearEntrada="CrearEntrada"
      :EliminarEntrada="EliminarEntrada"
    />
  </div>
</template>

<script>
import axios from "axios";
import Formulario from "@/components/Blog/Formulario.vue";
import jwt_decode from "jwt-decode";
import {mapState, mapActions} from 'vuex'


export default {
  name: "Blog",
  components: {
    Formulario,
  },
  data() {
    return {
      //Se crea un array para guardar la información proveniente de MongoDB Atlas
      Entrada: [],
      Formulario: {},
      userData:{},
      //La siguiente información se enviará al componente Alerta
      Alerta: {
        MostrarAlerta: null,
        ColorAlerta: "",
        TextoCondicional: "",
        BColor: "",
        BTexto: "",
        Direccion: "",
        MostrarB: null,
      },
    };
  },
  computed:{
 ...mapState(['token'])   
},
  //Al cargar la página, se obtendrán la colección y se almacenará en el array ENTRADA
  async mounted() {
  //Obtener datos del token
    let decoded = jwt_decode(this.token);
    this.userData = decoded
     console.log(this.userData.Usuario)

    const respuesta = await axios.get("/api/entrada/" + this.userData.Usuario);
    this.Entrada = respuesta.data;
    //Si no se encuentran datos dentro de la colección, se enviarán parámetros dinámicos al componente ALERTA
    if (respuesta.data == "") {
      this.Alerta.MostrarAlerta = true;
      this.Alerta.ColorAlerta = "danger";
      this.Alerta.TextoCondicional = "Aún no has creado entradas";
      this.Alerta.BColor = "";
      this.Alerta.BTexto = "";
      this.Alerta.Direccion = "";
      this.Alerta.MostrarB = false;
    } else {
      this.MostrarAlerta = false;
    }
  },
  methods: {
    //Al hacer clic en el botón SUBMIT que contenga el siguiente método, activará el envío de información a la base de datos
    async CrearEntrada() {
      const respuesta = await axios.post("/api/entrada/", {
        Título: this.Formulario.Título,
        Descripción: this.Formulario.Descripción,
        Contenido: this.Formulario.Contenido,
        Autor: this.userData.Usuario
      });
     
      //Con push, se actualizan los datos en tiempo real dentro de la plataforma para poder visualizarlos en el componente MIS_ENTRADAS
      this.Entrada.push(respuesta.data);

      //Se reinician los v-model
      this.Formulario.Título = "";
      this.Formulario.Descripción = "";
      this.Formulario.Contenido = "";

      //Se envían parámetros dinámicos para notificar al usuario que la entrada se ha creado con éxito
      this.Alerta.MostrarAlerta = true;
      this.Alerta.ColorAlerta = "success";
      this.Alerta.TextoCondicional = "Entrada creada con éxito";
      this.Alerta.BColor = "outline-success";
      this.Alerta.BTexto = "Ver entradas";
      this.Alerta.Direccion = "/#Mostrar_Entrada";
      this.Alerta.MostrarB = true;
    },
    //El siguiente método recibe como parámetros un documento y el id de dicho documento a eliminar
    async EliminarEntrada(Mi_Entrada, i) {
      await axios.delete("/api/entrada/" + Mi_Entrada._id);
      this.Entrada.splice(i, 1);

      //Una vez eliminado, se envían parámetros dinámicos para notificar al usuario que la entrada se ha eliminado con éxito
      this.Alerta.MostrarAlerta = true;
      this.Alerta.ColorAlerta = "warning";
      this.Alerta.TextoCondicional = "Entrada eliminada con éxito";
      this.Alerta.BColor = "";
      this.Alerta.BTexto = "";
      this.Alerta.Direccion = "";
      this.Alerta.MostrarB = false;
    },
    ...mapActions(['getToken'])
  },
  created(){
    this.getToken()
  },
};
</script>

<style>
</style>