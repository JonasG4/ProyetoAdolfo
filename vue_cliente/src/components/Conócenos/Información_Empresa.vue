<template>
  <div id="Información_Equipo">
    <!--Este componente es el encargado de mostrar la información respectiva a la plataforma-->

    <!--Aquí comienza el primer Jumbotron; funciona como un contenedor-->
    <div>
      <b-jumbotron bg-variant="light" fluid>
        <template #header> ¿Quiénes somos? </template>
        <template #lead> </template>
        <b-card>
          <b-media>
            <template #aside>
              <img src="IMG/PajaritosSV2.png" width="100" />
            </template>

            <h5 class="mt-0">Nuestros valores nos rigen</h5>
            <p>
              Gracias a la responsabilidad y ética que manejamos, las
              reservaciones se controlan en base al tiempo de solicitud sin
              preferencia algunaa usuarios determinados.
            </p>
            <p>
              Tanto los precios como las promociones mostradas en la página no
              se alteran en ningún momento; la factura confirmará la rectitud en
              nuestros precios.
            </p>
          </b-media>
          <hr />
          <b-media right-align vertical-align="center">
            <template #aside>
              <img src="IMG/PajaritosSV.png" width="100" />
            </template>
            <h5 class="mt-0">Atención las 24H</h5>
            <p>
              Nuestros servicios estarán disponibles siempre que tú los
              necesites. No olvides checar todo lo que ofrecemos.
            </p>
          </b-media>
        </b-card>
      </b-jumbotron>
    </div>
    <!--Aquí termina el primer Jumbotron-->

    <!--Aquí empieza el segundo Jumbotron-->
    <div>
      <b-jumbotron bg-variant="dark" text-variant="light" fluid>
        <template #header>¿En dónde puedes encontrarnos?</template>
        <b-card>
          <b-media>
            <div id="Inicio">
              <b-card overlay img-src="IMG/ciudad.jpg" text-variant="white">
                <b-card-text>
                  <h3>
                    9 AV OTE Y 2 CALLE NTE, LOCAL N° 129. Frente a antiguo
                    parqueo "Cuscatlán".
                  </h3>
                </b-card-text>
              </b-card>
            </div>
          </b-media>
        </b-card>
      </b-jumbotron>
    </div>
    <!--Aquí termina el segundo Jumbotron-->

    <!--Aquí empieza el tercer Jumbotron-->
    <div>
      <b-jumbotron bg-variant="light" fluid>
        <template #header>Miembros de Pajaritos SV</template>
        <p>
          Estos son los miembros responsables de la creación de este sitio web;
          conóceles y mantente en contacto con ellos.
        </p>
        <div>
          <!--Se crea un grupo de cards que muestra la información de los desarrolladores de la plataforma-->
          <b-card-group deck>
            <!--Aquí comienza el primer integrante-->
            <b-card
              title="David Coreas"
              img-src="IMG/I1.jpg"
              img-alt="Image"
              img-top
              footer-bg-variant="dark"
            >
              <b-card-text>
                Residente en Lolotique, miembro de la banda "El Toro"; su
                instrumento favorito es el clarinete.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>
            <!--Aquí termina el primer integrante-->

            <!--Aquí comienza el segundo integrante-->
            <b-card
              title="Jonás García"
              img-src="IMG/I2.jpg"
              img-alt="Image"
              img-top
              footer-bg-variant="dark"
            >
              <b-card-text>
                Residente de Villa San Antonio, fanático de leer libros y tomar
                café en épocas de lluvias.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>
            <!--Aquí termina el segundo integrante-->

            <!--Aquí comienza el tercer integrante-->
            <b-card
              title="Kevin García"
              img-src="IMG/I3.jpg"
              img-alt="Image"
              img-top
              footer-bg-variant="dark"
            >
              <b-card-text>
                Residente de San Miguel, San Miguel; un apasionado por los
                videojuegos y los libros.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>
            <!--Aquí termina el tercer integrante-->
          </b-card-group>
          <!--Aquí termina el grupo de cards-->
        </div>
      </b-jumbotron>
    </div>
    <!--Aquí termina el tercer Jumbotron-->
  </div>
</template>

<script>
export default {
  name: "Información_Empresa",
  components: {},
};
</script>

<style>
</style>