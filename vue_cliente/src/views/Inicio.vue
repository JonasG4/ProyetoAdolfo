<template>
  <div id="Inicio">
    <!--En esta vista, se decidió crear aquí el sistema Grid para mostrar de forma estructurada 3 componentes-->
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <!--El primer y segundo componente dispondrán de 9 columnas de 12 en total-->
          <b-jumbotron bg-variant="dark" text-variant="light"> 
          <Slide />
          </b-jumbotron>
          <Mostrar_Entrada />
        </b-col>
      </b-row>
      <b-row style="background: #343a40">
        <b-col>
          <Promo />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Slide from "@/components/Inicio/Slide.vue";
import Mostrar_Entrada from "@/components/Inicio/Mostrar_Entrada.vue";
import Promo from '@/components/Inicio/Promocion.vue'

export default {
  name: "Inicio",
  components: {
    Slide,
    Mostrar_Entrada,
    Promo
  },
};
</script>

<style scoped>
</style>