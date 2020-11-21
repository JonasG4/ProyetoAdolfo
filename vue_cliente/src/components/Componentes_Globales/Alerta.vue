<template>
  <!--Este componente construye una alerta que cambiará de aspecto según la información proporcionada a través de las 'props' del componente-->
  <div id="Alerta">
    <b-alert show v-if="Alerta.MostrarAlerta" :variant="Alerta.ColorAlerta">
      {{ Alerta.TextoCondicional }}
      <router-link v-if="Alerta.MostrarB" :to="{path: Alerta.Direccion}"><b-button :variant="Alerta.BColor"> {{Alerta.BTexto}} </b-button></router-link>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "Alerta",
  //la siguiente propiedad la obtendrá de los componentes padres
  props: {
      Alerta: Object
  },
};
</script>

<style scoped>
button{
    margin: 5px;
}
#Alerta {
  margin: 20px;
  text-align: center;
}
</style>