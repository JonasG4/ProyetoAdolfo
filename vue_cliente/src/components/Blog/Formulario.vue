<template>
  <!--Este componente crea un formulario con 3 campos distintos; dichos campos podrán enviarse a la base de datos si el usuario así lo quiere-->
  <div id="Formulario">
    <!--Se utilizó el sistema grid para maquetar la página; el contenedor será fluido para ocupar el 100% del espacio de la página-->
    <b-container fluid>
      <!--Aquí comienza la primer fila-->
      <b-row>
        <b-col cols="12" class="p2">
          <!--Añadiendo el componente para pre-visualizar la entrada-->
          <div>
            <!--Aquí comienza la navbar que contendrá el texto 'Nueva entrada'-->
            <br />
            <div class="Navbar">
              <b-navbar type="dark" variant="dark">
                <b-navbar-brand>Pre-visualizar entrada</b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                  <!--El siguiente botón le da una idea al usuario, al pasar el mouse encima de dicho botón, de cómo funciona el componente-->
                  <b-nav-item right>
                    <b-button
                      variant="dark"
                      v-b-popover.hover.top="
                        'La pre-visualización te ayudará a decidir si publicas la entrada con la información actual o modificar la entrada antes de crearla.'
                      "
                      title="Ten una pequeña ayuda"
                    >
                      <b-icon
                        icon="question-circle-fill"
                        variant="success"
                        font-scale="1.5"
                      ></b-icon>
                    </b-button>
                  </b-nav-item>
                  <!--El botón de ayuda termina aquí-->
                </b-navbar-nav>
              </b-navbar>
            </div>
            <!--Aquí termina la navbar-->
            <Pre_Visualizar :Formulario="Formulario" />
          </div>
          <!--Añadiendo el componente para pre-visualizar la entrada-->
        </b-col>
      </b-row>
      <b-row>
        <!--El formulario dispondrá de 7 columnas de 12 del grid-->
        <b-col cols="7" class="p-1">
          <div id="Crear_Entrada" class="container modal-content">
            <b-form @submit.prevent="CrearEntrada" v-if="show">
              <!--Aquí comienza la navbar que contendrá el texto 'Nueva entrada'-->
              <div class="Navbar">
                <b-navbar type="dark" variant="dark">
                  <b-navbar-brand>Nueva entrada</b-navbar-brand>

                  <b-navbar-nav class="ml-auto">
                    <!--El siguiente botón le da una idea al usuario, al pasar el mouse encima de dicho botón, de cómo funciona el componente-->
                    <b-nav-item right>
                      <b-button
                        variant="dark"
                        v-b-popover.hover.top="
                          'Aquí tendrás la posibilidad de crear una entrada para que los demás puedan verla. Llena los campos del formulario y luego presiona el botón Crear entrada .'
                        "
                        title="Ten una pequeña ayuda"
                      >
                        <b-icon
                          icon="question-circle-fill"
                          variant="success"
                          font-scale="1.5"
                        ></b-icon>
                      </b-button>
                    </b-nav-item>
                    <!--El botón de ayuda termina aquí-->
                  </b-navbar-nav>
                </b-navbar>
              </div>
              <!--Aquí termina la navbar-->

              <!--Aquí comienza el primer input; es el encargado de capturar la información correspondiente al título de la entrada -->
              <div class="form-row">
                <label>Título de la entrada</label>
                <b-input-group class="mb-2 col-md-12">
                  <b-input-group-prepend is-text>
                    <b-icon icon="bookmark-star-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    v-model="Formulario.Título"
                    required
                    placeholder="Ingrese el título de su nueva entrada"
                  ></b-form-input>
                </b-input-group>
              </div>
              <!--Aquí termina el primer input-->

              <!--Aquí comienza el segundo input; es el encargado de capturar la información correspondiente a la descripción de la entrada-->
              <div class="form-row">
                <label>Descripción de la entrada</label>
                <b-input-group class="mb-2 col-md-12">
                  <b-input-group-prepend is-text>
                    <b-icon icon="card-heading"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    v-model="Formulario.Descripción"
                    required
                    placeholder="Ingrese una breve descripción de su entrada"
                  >
                  </b-form-input>
                </b-input-group>
                <small class="form-text text-muted"
                  >Añade una descripción para explicar el contenido tu entrada
                  en pocas palabraas</small
                >
              </div>
              <!--Aquí termina el segundo input-->

              <!--Aquí comienza el primer y único textarea; -->
              <br />
              <div class="form-row">
                <label>Contenido de la entrada</label>
                <b-input-group class="mb-2 col-md-12">
                  <b-input-group-prepend is-text>
                    <b-icon icon="file-text-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-textarea
                    rows="5"
                    style="resize: none"
                    v-model="Formulario.Contenido"
                    required
                    placeholder="Ingrese el contenido principal de la entrada"
                  ></b-form-textarea>
                </b-input-group>
              </div>
              <!--Aquí termina el primer y único textarea -->
              <div class="Ordenar_Botones">
                <b-button type="submit" variant="outline-success">
                  Crear entrada
                </b-button>
              </div>
            </b-form>
          </div>
        </b-col>

        <!--Aquí terminan las / columnas correspondientes al formulario-->

        <!--Aquí comienza la visualización de la entrada; dispondrán de 5 columnas de la página (12 columnas en total)-->
        <b-col cols="5" class="p-1">
          <!--Este es el componente que construye la estructura de la visualización-->
          <Mis_Entradas :Alerta="Alerta" :EliminarEntrada="EliminarEntrada" :Entrada="Entrada" />
        </b-col>
        <!--Aquí termina la visualización de la entrada-->
      </b-row>

      <!--Aquí termina la primer fila-->
    </b-container>
    <!--Aquí termina el sistema grid-->
  </div>
</template>

<script>
import Mis_Entradas from "./Mis_Entradas.vue";
import Pre_Visualizar from "@/components/Blog/Pre_Visualizar.vue";

export default {
  name: "Formulario",
  components: {
    Mis_Entradas,
    Pre_Visualizar,
  },
  data() {
    return {
      show: true,
      //Se crea un objeto para poder utilizarlo en el v-model
      Formulario: {
        Título: "",
        Descripción: "",
        Contenido: "",
      },
    };
  },
  mounted() {
    this.$emit("Formulario", this.Formulario);
  },
  //Se crea una instancia de las propiedades importadas
  props: {
    Alerta: Object,
    Entrada: {
      type: Array,
    },
    CrearEntrada: {
      type: Function,
      default: null,
    },
    EliminarEntrada: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style scoped>
.Navbar {
  margin-bottom: 15px;
}
.container {
  padding: 15px;
}
.Ordenar_Botones {
  display: flex;
  justify-content: space-between;
}
</style>