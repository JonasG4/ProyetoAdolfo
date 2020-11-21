<template>
  <div id="Contacto">
    <!--En esta ocasión, se han llamado (o importado) dos componentes que conformarán la vista llamada CONTACTO-->
    <Otros_Contactos />
    <Formulario_Contacto />
  </div>
</template>

<script>
import Formulario_Contacto from "@/components/Contacto/Formulario.vue";
import Otros_Contactos from "@/components/Contacto/Otros_Contactos.vue";

export default {
  name: "Contacto",
  components: {
    Formulario_Contacto,
    Otros_Contactos,
  },
};
</script>

<style>
</style>