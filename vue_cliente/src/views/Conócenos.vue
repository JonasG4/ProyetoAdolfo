<template>
  <div id="Conócenos">
    <!--Se importa el componente para poder mostrarlo en la vista-->
    <Información_Empresa />
  </div>
</template>

<script>
import Información_Empresa from "@/components/Conócenos/Información_Empresa.vue";

export default {
  name: "Conócenos",
  components: {
    Información_Empresa,
  },
};
</script>

<style scoped>
</style>