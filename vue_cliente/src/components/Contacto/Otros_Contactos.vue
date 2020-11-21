<template>
<!--Este coponente sólo contiene información respectiva al sitio web y no es capaz de interactuar con el usuarioo-->
  <div id="Otros_Contactos">
    <div>
      <!--Aquí comienza el Jumbotron; funciona como background-->
      <b-jumbotron bg-variant="light" fluid>
        <template #header> Otras formas de contactarnos</template>
        <!--La siguiente card funciona como un contenedor para b-media-->
        <b-card>
        <!--B-media termina acá y contiene una división para mostrar las imágenes y el texto-->

        <!--Aquí comienza el primer B-MEDIA-->
          <b-media>
            <template #aside>
              <img src="IMG/tel.png" width="100" alt="tel_contacto" />
            </template>

            <h5 class="mt-0">Mantente en contacto</h5>
            <p>
              También puedes comunicarte con nosotros de otras maneras; una de
              ellas es envíandonos un mensaje al número <b>+503 8899-6622</b> o
              llamarnos al número <b>+503 2277-8822</b>.
            </p>
          </b-media>
        <!--Aquí termina el primer B-MEDIA-->
        
          <hr />
        <!--Aquí comienza el segundo B-MEDIA-->
          <b-media right-align text-align="center">
            <template #aside>
              <img src="IMG/New Project.png" width="150" alt="" />
            </template>
            <h5 class="mt-0">Síguenos en nuestras redes sociales</h5>
            <p>
              Si quieres mantener un trato cercano a nosotros y estar al día de
              nuestras publicaciones, puedes seguirnos en nuestras redes
              sociales:
            </p>
            <ul>
              <li>
                Síguenos en <font color="blue">Facebook</font> como
                <b>El Pajarito SV</b>
              </li>
              <li>
                Síguenos en <font color="#ff33cc">Ins</font
                ><font color="#ff8533">tag</font
                ><font color="#cc0099">ram</font> como <b>El_Pajarito_SV</b>
              </li>
              <li>
                Síguenos en <font color="#33ccff">Twitter</font> como
                <b>@ElPajaritoSV</b>
              </li>
            </ul>
          </b-media>
        <!--Aquí termina el segundo B-MEDIA-->
        <!--B-media termina acá-->
        </b-card>
        <!--La card termina acá-->
      </b-jumbotron>
      <!--Aquí termina el Jumbotron-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Otros_Contactos",
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>