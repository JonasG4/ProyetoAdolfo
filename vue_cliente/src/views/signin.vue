<template>
   <div class="flex-center">
   <b-jumbotron bg-variant="dark" text-variant="light" fluid>
      <b-form @submit.prevent="enviar" class="Form">
    <div class="Form-Header">
      <h1>Registro <span style="color: #42b983">Usuario</span></h1>
    </div>
    <div class="Form-Content" >
      <div class="textfield">
        <input type="text" v-model="datos.Nombre" required autocomplete="off" />
        <label class="lbl-text">
          <span class="s-text">Ingrese su nombre completo
            <b-iconstack font-scale="1" v-if="datos.Nombre.length > 3">
              <b-icon stacked icon="circle"></b-icon>
              <b-icon stacked icon="check" variant="success"></b-icon>
            </b-iconstack>
          </span>
        </label>
      </div>
      <br />
      <div class="textfield" v-if="!errs.uservalid">
        <input
          type="text"
          autocomplete="off"
          v-model.trim="datos.Usuario"
          required      
        />
        <label class="lbl-text" >
          <span class="s-text">Ingrese su Usuario
            <b-iconstack font-scale="1" v-if="datos.Usuario.length > 3">
              <b-icon stacked icon="circle"></b-icon>
              <b-icon stacked icon="check" variant="success"></b-icon>
            </b-iconstack>
          </span>
        </label>
      </div>
       <div class="textfield" v-if="errs.uservalid">
        <input
          type="text"
          autocomplete="off"
          v-model.trim="datos.Usuario"
          required      
        />
        <label class="lbl-text-error">
          <span class="s-text-error">Ingrese su Usuario
          <b-icon icon="exclamation-circle-fill" variant="danger" />
          </span>
        </label>
      </div>
       <span class="s_error" v-if="errs.uservalid"
        >Nombre de usuario no disponible</span
      >
      <br />
      <div class="textfield" v-if="!errs.passvalid && datos.Password.length == 0 || datos.Password.length >= 6">
        <input type="password" v-model="datos.Password" required />
        <label class="lbl-text">
          <span class="s-text"
            >Ingrese su Contraseña
            <b-iconstack font-scale="1" v-if="datos.Password.length >= 6">
              <b-icon stacked icon="circle"></b-icon>
              <b-icon stacked icon="check" variant="success"></b-icon>
            </b-iconstack>
          </span>
        </label>
      </div>
      <!-- Si la contraseña es inferior a 6 caracteres-->
      <div class="textfield" v-if="errs.passvalid || datos.Password.length > 0 && datos.Password.length < 6">
        <input type="password" v-model="datos.Password"/>
        <label class="lbl-text-error">
          <span class="s-text-error">Ingrese su Contraseña
         <b-icon icon="exclamation-circle-fill" variant="danger" />
          </span>
        </label>
      </div>
       <span style="font-size: 14px" class="s_error" v-if="datos.Password.length > 0 && datos.Password.length < 6"
        >Debe ser mayor o igual a 6 caracteres</span
      >
      <br />
 
      <div class="textfield" v-if="C_pass.length == 0 || datos.Password ==C_pass">
        <input type="password" v-model="C_pass" required />
        <label class="lbl-text">
          <span class="s-text"
            >Confirmar Contraseña
            <b-iconstack font-scale="1" v-if="C_pass.length >= 6">
              <b-icon stacked icon="circle"></b-icon>
              <b-icon stacked icon="check" variant="success"></b-icon>
            </b-iconstack>
          </span>
        </label>
      </div>
      <!-- Si las contraseñas no coinciden-->
      <div class="textfield" v-if="C_pass.length > 0 && datos.Password != C_pass">
        <input type="password" v-model="C_pass"/>
        <label class="lbl-text-error">
          <span class="s-text-error"
            >Confirmar Contraseña
            <b-icon icon="exclamation-circle-fill" variant="danger" />
          </span>
        </label>
      </div>
      <span class="s_error" v-if="C_pass.length > 0 && datos.Password != C_pass"
        >Las contraseñas no coinciden</span
      >
      <br />
      <input
        type="submit"
        class="btn btn-block"
        value="Registrarse"
      />
    </div>
    <div class="Form-Footer"></div>
      </b-form>
    </b-jumbotron>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import Swal from 'sweetalert2';

export default {
  name: "signin",
  data() {
    return {
      datos: {
        Nombre: "",
        Usuario: "",
        Password: "",
      },
      C_pass: "",
      validar: {
        Nombre: "",
        Pass: "",
        Usuario: "",
      },
      errs: {
        uservalid: "",
        passvalid: "",
      },
    };
  },
  async mounted() {},
  methods: {  
    async enviar() {
      const res = await axios.get("api/users/" + this.datos.Usuario);
      //validaciones
      console.log(res.data);
      if (res.data == null) {
        this.validar.Usuario = ".";
      } else {
        this.validar = res.data;
      }

      if (this.datos.Usuario == this.validar.Usuario) {
        this.errs.uservalid = "active";
      } else if (this.datos.Password.length < 6) {
        this.errs.passvalid = "active";
      } else {
          await axios
          .post("api/users/registrar", {
            Nombre: this.datos.Nombre,
            Usuario: this.datos.Usuario,
            Password: this.datos.Password
          })
          .then( res => 
            console.log(res),
            Swal.fire({
              title: 'Usuario registrado con éxito',
              text: 'Ahora debes iniciar sesion para empezar a reservar locales.', 
              icon:'success',
              showConfirmButton: false
               }),
            setTimeout(() => window.location.href="/login", 2000)
            )
          .catch((err) => console.log(err));
      }
    },
   ...mapActions(["signin"]),

  },
};
</script>

<style scoped>
@import url("../../public/css/form.css");
.btn{
  background: #42b983;
  color: #fff;
  opacity: 0.8;
}
.btn:hover{
  opacity: 1;
}
.s_error {
  color: red;
}

</style>