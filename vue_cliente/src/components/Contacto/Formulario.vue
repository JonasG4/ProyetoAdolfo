<template>
  <!--Este componente permite al usuario enviar sus inquietudes, sugerencias y comentarios al correo de la empresa Pajaritos SV. Se utilizó EmailJS para configurar el servicio de correo y las plantillas a utilizar-->
  <div id="Formulario_Contacto">
    <b-jumbotron bg-variant="dark" text-variant="light" fluid>
      <template #header> Contáctanos a través de correo electrónico</template>
      <div class="container modal-content">
        <!--Aquí comienza la navbar que contendrá el texto 'Envíanos tus comentarios'-->
        <div class="Navbar">
          <b-navbar type="dark" variant="dark">
            <b-navbar-brand>Envíanos tus comentarios</b-navbar-brand>

            <b-navbar-nav class="ml-auto">
              <!--El siguiente botón le da una idea al usuario, al pasar el mouse encima de dicho botón, de cómo funciona el componente-->
              <b-nav-item right>
                <b-button
                  variant="dark"
                  v-b-popover.hover.top="
                    'Puedes enviar un correo electrónico a los administradores de este sitio web para aclarar tus dudas, presentar una sugerencia o un reclamo. Asegúrate de escribir correctamente tu correo electrónico; nos mantendremos en contacto.'
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
        <!--El formulario (a través de 'name') será capaz de enviar los campos respectivos a la plantilla-->
        <b-form id="Formulario" @submit.prevent="Enviar_Correo" v-if="show">
          <!--Aquí comienza el asunto del mensaje-->
          <label class="form-text text-muted">Asunto</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="bookmarks-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="text"
              name="asunto"
              required
              placeholder="Ingresa el asunto de tu correo electrónico"
            />
          </b-input-group>
          <!--Aquí termina el asunto del mensaje-->

          <!--Aquí comienza el correo electrónico del usuario-->
          <label class="form-text text-muted">Correo electrónico</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="envelope-open-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="email"
              name="correo_usuario"
              required
              placeholder="Ingresa tu correo electrónico"
            />
          </b-input-group>
          <!--Aquí termina el correo electrónico del usuario-->

          <!--Aquí comienza el contenido del mensaje-->
          <label class="form-text text-muted">Contenido del mensaje</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="border-style"></b-icon>
            </b-input-group-prepend>
            <b-form-textarea
              type="text"
              name="mensaje"
              style="resize: none"
              rows="10"
              required
              placeholder="Ingresa el contenido de tu correo electrónico"
            ></b-form-textarea>
          </b-input-group>
          <br />
          <!--Aquí termina el contenido del mensaje-->

          <b-button type="submit" variant="success">Enviar correo</b-button>
        </b-form>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
//Importando la funcionalidad del servicio de correo
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

export default {
  name: "Formulario_Contacto",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    //El siguiente correo llama las configuraciones realizadas en la plantillas y el servicio electrónico, enviando los datos necesarios para crear una conexión con Gmail (en este caso) y así poder concretar el envío del mensaje
    Enviar_Correo: (e) => {
      emailjs
        .sendForm(
          "contact_service",
          "formulario_contacto",
          e.target,
          "user_c4mzUEJurrcJfYovWtgqF"
        )
        .then(
          (result) => {
            console.log("Correo enviado con éxito", result.status, result.text);
            document.getElementById("Formulario").reset();
            Swal.fire('¡Correo enviado con éxito!', 'Te contactaremos pronto', "success" )
          },
          (error) => {
            console.log(
              "Ha ocurrido un problema con el envío del correo",
              error
            );
          }
        );
    },
  },
};
</script>

<style scoped>
.container {
  padding: 15px;
}
.Navbar {
  margin-bottom: 15px;
}
</style>