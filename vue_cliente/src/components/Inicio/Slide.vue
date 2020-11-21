<template>
    <!--En este componente (Slide.vue) se crea un slide automático para poder visualizar diversas imágenes con texto diferente entre elllas; añade una opción más al usuario para poder desplazarse en la plataforma-->
  <div id="Slide">

    <!--Aquí comienza el CAROUSEL-->
    <div class="Carousel">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        controls
        :interval="3000"
        indicators
      >
        <!--Aquí comienza la primera imagen-->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="../../assets/LocalCard.jpg"
              alt="Alquila_Tu_Local"
            />
          </template>
          <!--Aquí comienza el contenido del Slide-->
          <h3><b>Reserva ahora</b></h3>
          <p>
            Sin importar el motivo de tu reserva, disponemos del local que se
            ajusta a tus necesidades.
          </p>
          <b-button variant="outline-light" :to="{name: 'reserva'}">¡Reserva ya!</b-button>
          <!--Aquí termina el contenido del Slide-->
        </b-carousel-slide>
        <!--Aquí termina la primera imagen-->

        <!--Aquí comienza la segunda imagen-->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="IMG/blog.jpg"
              alt="Publica_Una_entrada"
            />
          </template>
          <!--Aquí comienza el contenido del Slide-->
          <h3><b>Comunica tus ideas</b></h3>
          <p>
            Expresa tus comentarios e ideas a los demás visitantes del sitio.
          </p>
          <b-button variant="outline-light" :to="{name: 'Blog'}">¡Publica ya!</b-button>
          <!--Aquí termina el contenido del Slide-->
        </b-carousel-slide>
        <!--Aquí termina la segunda imagen-->

        <!--Aquí comienza la tercera imagen-->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="IMG/Promociones.jpg"
              alt="Aprovecha_Las_Promociones"
            />
          </template>
          <!--Aquí comienza el contenido del Slide-->
          <h3><b>Aprovecha las ofertas</b></h3>
          <p>
            No dejes pasar estas promociones exclusivas para ti.
          </p>
          <a href="#Reserva"><b-button variant="outline-light">Ver las promociones</b-button></a>
          <!--Aquí termina el contenido del Slide-->
        </b-carousel-slide>
        <!--Aquí termina la segunda imagen-->
      </b-carousel>
      <!--Aquí termina el CAROUSEL-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*Se modifican las dimensiones de todas las imágenes contenidas en este componente (Slide.vue)*/
img {
  width: 100vw;
  height: 350px;
}

/*Dependiendo del tamaño de pantalla que posea el usuario, podrá visualizar un tamaño distinto para el Slide*/
@media screen and (min-width: 1024px) {
  .Carousel {
    margin: auto;
    padding: auto;
    width: 50%;
  }
}
</style>