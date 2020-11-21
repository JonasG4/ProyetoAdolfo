<template>
<div id="login">
 <b-jumbotron bg-variant="dark" text-variant="light" fluid>
  <div>
  <form class="Form" @submit.prevent="login(datos)">
  <div class="Form-Header">
    <h1>Login <span style="color:#42b983">usuario</span></h1>
  </div>
  <div class="Form-Content">
      <span style="color:red" v-if="erros.i">El usuario y/o la contraseñas son incorrectos.</span>
    <div class="textfield">
      <input 
      type="text" 
      v-model="datos.Usuario" 
      required 
      autocomplete="off">
      <label class="lbl-text">
        <span class="s-text">Ingrese su usuario</span></label>
    </div><br>
    <div class="textfield">
      <input 
      type="password" 
      v-model="datos.Password" 
      required>
      <label class="lbl-text"><span class="s-text">Ingrese su contraseña</span></label>
    </div><br>
   <input
        type="submit"
        class="btn btn-block"
        value="Iniciar Sesion"
      />
  </div><br>
  <div class="line"></div>
  <div class="Form-Footer">
    <p>¿No tienes cuenta?</p>
    <b-button :to="{name: 'signin'}" class="link">Registrate ahora</b-button>
  </div>
  </form>
  </div>
  </b-jumbotron>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      datos: {
        Usuario: "",
        Password: "",
      },
      erros: {
        i: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"])
  },
};
</script>
<style scoped>
@import url('../../public/css/form.css');
.btn{
  background: #42b983;
}
.link{
    color: #42b983;
    background: none;
    border: none;
    opacity: 0.8;
}
.link:hover{
    background: #42b983;
    color: #fff;
    opacity: 1.2;
}

</style>