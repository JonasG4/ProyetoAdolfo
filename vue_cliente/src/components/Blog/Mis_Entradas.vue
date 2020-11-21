<template>
  <!--Este componente podrá obtener los datos enviados desde el componente formulario en tiempo real, o sea, al crear la entrada se podrá visualizar instantáneamente la entrada-->
  <div id="Mis_Entradas">
    <div class="container modal-content">
      <!--Aquí comienza la navbar que contendrá el texto 'Mis entradas'-->
      <div class="Navbar">
        <b-navbar type="dark" variant="dark">
          <b-navbar-brand>Mis entradas</b-navbar-brand>

          <b-navbar-nav class="ml-auto">
            <!--El siguiente botón le da una idea al usuario, al pasar el mouse encima de dicho botón, de cómo funciona el componente-->
            <b-nav-item right>
              <b-button
                variant="dark"
                v-b-popover.hover.top="
                  'En esta sección se mostrarán las entradas que tú publiques; podrás editarlas y/o eliminarlas si así lo deseas.'
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
      <!--Aquí termina la navbar que contendrá el texto 'Mis entradas'-->

      <!--Aquí comienza el scroll infinito-->
      <div
        class="container modal-content"
        style="height: 415px; overflow-y: scroll"
      >
        <Alerta :Alerta="Alerta" />
        <!--El ciclo for permite estructurar la entrada según los datos almacenados en MongoDB Atlas-->
        <div v-for="(Mi_Entrada, i) in Entrada" :key="Mi_Entrada._id">
          <b-card
            border-variant="info"
            header-tag="header"
            footer-tag="footer"
            footer-bg-variant="dark"
          >
            <template #header>
              <div class="AjustarBotones">
                <!--Aquí comienza el Router link; permite viajar al componente EDITAR_ENTRADA y enviarle como parámetro el id de la entrada-->
                <router-link
                  v-bind:to="{
                    name: 'Editar_Entrada',
                    params: { id: Mi_Entrada._id },
                  }"
                >
                  <b-button
                    variant="light"
                    v-b-popover.hover.top="'Editar entrada'"
                  >
                    <b-icon
                      variant="primary"
                      icon="pencil-fill"
                      font-scale="1.6"
                    ></b-icon>
                  </b-button>
                </router-link>
                <!--Aquí termina el router link-->
                <b-button
                  variant="light"
                  @click="EliminarEntrada(Mi_Entrada, i)"
                  v-b-popover.hover.top="'Eliminar entrada'"
                >
                  <!--Aquí comienza el icono con la función EliminarEntrada; Al hacer clic en el icono, permite eliminar la entrada-->
                  <b-icon
                    variant="danger"
                    icon="trash-fill"
                    font-scale="1.6"
                  ></b-icon>
                  <!--Aquí termina el icono con la función EliminarEntrada-->
                </b-button>
              </div>
            </template>

            <b-card-body>
              <!--Aquí comienza el título de la entrada-->
              <b-form>
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon icon="bookmark-star-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    :placeholder="Mi_Entrada.Título"
                    disabled
                  ></b-form-input>
                </b-input-group>
                <!--Aquí termina el título de la entrada-->

                <!--Aquí comienza la descripción de la entrada-->
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon icon="card-heading"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    disabled
                    :placeholder="Mi_Entrada.Descripción"
                  ></b-form-input>
                </b-input-group>
                <!--Aquí termina la descripción de la entrada-->

                <!--Aquí comienza el contenido de la entrada-->
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon icon="file-text-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-textarea
                    style="resize: none"
                    rows="5"
                    disabled
                    :placeholder="Mi_Entrada.Contenido"
                  ></b-form-textarea>
                </b-input-group>
                <!--Aquí termina el contenido de la entrada-->
              </b-form>
            </b-card-body>
            <template #footer>
              <!--Aquí comienzan los detalles de la entrada-->
              <span>
                <b-badge
                  id="Fecha_Creación"
                  variant="dark"
                  v-b-popover.hover.top="'Fecha de creación de la entrada.'"
                  >{{ Mi_Entrada.Fecha }}
                </b-badge>
                <span v-if="0">{{ i + 1 }}</span>
              </span>
              <!--Aquí terminan los detalles de la entrada-->
            </template>
          </b-card>
          <br />
        </div>
        <!--Aquí termine el for-->
      </div>
      <!--Aquí termine el scroll infinito-->
    </div>
    <br />
  </div>
</template>

<script>
import Alerta from "../Componentes_Globales/Alerta.vue";

export default {
  name: "Mis_Entradas",
  components: {
    Alerta,
  },
  data() {
    return {};
  },
  //Se importan como propiedades el array Entrada y la función EliminarEntrada
  props: {
    Alerta: Object,
    Entrada: Array,
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
.AjustarBotones {
  display: flex;
  justify-content: space-between;
}
</style>