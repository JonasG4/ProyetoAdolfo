<template>
  <!--El siguiente componente permite recuperar las entradas almacenadas en la base de datos (MongoDB Atlas) y mostrarlas de una forma atractiva visualmente para el usuario-->
  <div id="Mostrar_Entrada">
    <!--Aquí comienza la barra que mostrará el texto 'Últimas entradas'-->
    <div class="Navbar">
      <b-navbar type="dark" variant="dark">
        <b-navbar-brand class="ml-auto text-g">Todas las entradas</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <!--El siguiente botón le da una idea al usuario, al pasar el mouse encima de dicho botón, de cómo funciona el componente-->
          <b-nav-item right>
            <b-button
              variant="dark"
              v-b-popover.hover.top="
                'Las entradas que publiquen los usuarios del sitio web se podrán visualizar aquí.'
              "
              title="Ten una pequeña ayuda"
            >
              <b-icon
                icon="question-circle-fill"
                variant="success"
                font-scale="2"
              ></b-icon>
            </b-button>
          </b-nav-item>
          <!--El botón de ayuda termina aquí-->
        </b-navbar-nav>
      </b-navbar>
    </div>
    <!--Aquí termina la barra-->

    <!--Se crea un scroll infinito para poder almacenar las entradas y así evitar malas experiencias al usuario con una altura de página excesiva-->
    <div
      class="container modal-content"
      style="height: 754px; overflow-y: scroll;"
    >
      <!--La siguiente alerta cambiará su aspecto (incluso podría llegar a desaparecer) según las circunstancias-->
      <Alerta v-bind:Alerta="Alerta" />
      <!--Acá comienza la visualización de las entradas-->
      <!--Gracias al for, se recorre todo el arreglo que devuelve axios.get-->
      <div v-for="MostrarEntrada in Entrada" :key="MostrarEntrada._id">
        <br />

        <!--Dentro de la card, se añaden secciones que mostrarán respectivamente el contenido de la entrada-->
        <!--La cabeza de la etiqueta contiene el título y la descripción de la entrada-->
        <b-card
          img-src="IMG/pajaritos.jpg"
          :title="MostrarEntrada.Título"
          :sub-title="MostrarEntrada.Descripción"
          footer-tag="footer"
          footer-bg-variant="dark"
          footer-text-variant="light"
        >
          <!--Acá termina el título y la descripción de la entrada-->

          <!--Aquí comienza el contenido de la entrada-->
          <b-card-text>
            {{ MostrarEntrada.Contenido }}
          </b-card-text>
          <!--Aquí termina el contenido de la entrada-->

          <!--Aquí termina el footer de la entrada, donde se muestra su autor-->
          <template #footer>
            <b-avatar variant="light"></b-avatar>
            {{ MostrarEntrada.Autor }}
          </template>
          <!--Aquí termina el footer de la entrada-->
        </b-card>
        <!--Acá termina la visualización de la entrada-->
      </div>
      <!--Acá termina el ciclo for-->
    </div>
    <!--Aquí termina el scroll infinito-->
  </div>
</template>

<script>
import axios from "axios";
import Alerta from "../Componentes_Globales/Alerta.vue";

export default {
  name: "Mostrar_Entrada",
  components: {
    Alerta,
  },
  data() {
    return {
      //Arreglo que contiene los datos recorridos en el for
      Entrada: [],
      //La siguiente información se enviará al componente Alerta
      Alerta: {
        MostrarAlerta: null,
        ColorAlerta: "",
        TextoCondicional: "",
        BColor: "",
        BTexto: "",
        Direccion: '',
        MostrarB: null
      },
    };
  },
  //El siguiente método obtiene la colección de MongoDB cada vez que la página carga
  async mounted() {
    const respuesta = await axios.get("/api/entrada/");
    this.Entrada = respuesta.data;
    if (respuesta.data == "") {
      this.Alerta.MostrarAlerta = true;
      this.Alerta.ColorAlerta = "danger";
      this.Alerta.TextoCondicional =
        "Por el momento, ningún usuario ha publicado alguna entrada. Puedes crear una en este momento si haces clic en el siguiente botón";
      this.Alerta.BColor = "outline-danger";
      this.Alerta.BTexto = "Publicar entrada";
      this.Alerta.Direccion = '/blog/#Crear_Entrada';
      this.Alerta.MostrarB = true;
    } else {
      this.MostrarAlerta = false;
    }
  },
};
</script>

<style scoped>
.Navbar {
  margin-top: 15px;
}
.text-g{
  color: white;
    font-size: 2.4em;
    font-weight: 900;
}
</style>