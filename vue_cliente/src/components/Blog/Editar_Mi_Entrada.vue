<template>
  <!--En el siguiente compoente se recupera la información correspondiente a un ID determinado (que llegó a este componente desde 'Mis_Entradas' como un parámetro). Dicho ID ayuda a identificar un documento dentro de la colección, llamarlo y con otro método, poder editarlo-->
  <div id="Editar_Mi_Entrada">
    <br />
    <!--El Jumbotron comienza aquí; servirá como una especia de background-->
    <b-jumbotron bg-variant="dark" text-variant="light" fluid>
      <template #header> Editando la entrada: {{ Entrada.Título }} </template>
      <div class="container modal-content">
        <!--En el siguiente formulario, se muestran los datos del documento (Título, Descripción y contenido). Se añaden los respectivos v-model para volver a capturar la información editada-->
        <b-form @submit.prevent="Actualizar_Entrada" v-if="show">
          <!--Aquí comienza el título-->
          <div class="form-row">
            <label class="form-text text-muted">Título de la entrada</label>
            <b-input-group class="mb-2 col-md-12">
              <b-input-group-prepend is-text>
                <b-icon icon="bookmark-star-fill"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                v-model="Entrada.Título"
                required
              ></b-form-input>
            </b-input-group>
          </div>
          <!--Aquí termina el título-->

          <!--Aquí comienza la descripción-->
          <div class="form-row">
            <label class="form-text text-muted"
              >Descripción de la entrada</label
            >
            <b-input-group class="mb-2 col-md-12">
              <b-input-group-prepend is-text>
                <b-icon icon="card-heading"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                required
                v-model="Entrada.Descripción"
              ></b-form-input>
            </b-input-group>
          </div>
          <!--Aquí termina la descripción-->

          <!--Aquí comienza el contenido-->
          <div class="form-row">
            <label class="form-text text-muted">Contenido de la entrada</label>
            <b-input-group class="mb-2 col-md-12">
              <b-input-group-prepend is-text>
                <b-icon icon="file-text-fill"></b-icon>
              </b-input-group-prepend>
              <b-form-textarea
                type="text"
                style="resize: none"
                rows="5"
                required
                v-model="Entrada.Contenido"
              ></b-form-textarea>
            </b-input-group>
          </div>
          <!--Aquí termina el contenido-->
          <br />

          <div class="AjustarBotones">
            <b-button type="submit" variant="outline-success">
              Actualizar entrada
            </b-button>
            <b-button to="/blog" @click="Aviso_Cancelacion"  variant="outline-danger">
              Cancelar actualización
            </b-button>
          </div>
        </b-form>
        <!--Aquí termina el formulario-->
      </div>
    </b-jumbotron>
    <!--El Jumbotron termina aquí-->
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Editar_Mi_Entrada",
  data() {
    return {
      //Se obtienen los datos ingresados en los v-model
      Entrada: [],
      show: true,
    };
  },
  //Al cargar la página, se obtienen los datos de la entrada correspondiente al parámetro enviado
  async mounted() {
    const respuesta = await axios.get("/api/entrada/get/" + this.$route.params.id);
    this.Entrada = respuesta.data;
    console.log(respuesta.data)
  },
  methods: {
    //Con los v-model y el ID como parámetro, se actualizaron los datos gracias a axios.put
    async Actualizar_Entrada() {
      await axios.put("/api/entrada/" + this.Entrada._id, {
        Título: this.Entrada.Título,
        Descripción: this.Entrada.Descripción,
        Contenido: this.Entrada.Contenido,
      });
      //Alert responsivo para notificar al usuario que se ha actualizado la entrada
      Swal.fire(
        "Entrada actualizada con éxito",
        "Entrada editada: " + this.Entrada.Título,
        "success"
      );
      //Redirección a la vista BLOG
      this.$router.push("/blog");
    },
    Aviso_Cancelacion() {
      //Alert responsivo para notificar al usuario que se ha cancelado la actualización
      Swal.fire(
        "Actualización cancelada",
        'Se ha cancelado la actualización de la entrada',
        "error"
      );
    }
  },
};
</script>

<style scoped>
.container {
  padding: 15px;
}
.AjustarBotones {
  display: flex;
  justify-content: space-between;
}
</style>