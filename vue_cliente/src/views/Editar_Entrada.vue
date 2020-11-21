<template>
  <div id="Editar_Entrada">
    <!--Se importa el componente para poder mostrarlo en la vista-->
    <Editar_Mi_Entrada />
  </div>
</template>

<script>
import Editar_Mi_Entrada from "@/components/Blog/Editar_Mi_Entrada.vue";
export default {
  name: "Editar_Entrada",
  components: {
    Editar_Mi_Entrada,
  },
};
</script>

<style>
</style>