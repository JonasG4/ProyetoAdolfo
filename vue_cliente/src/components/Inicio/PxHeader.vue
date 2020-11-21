<template>
  <div>
    <main>
      <nav
        class="navbar navbar-light background-nav d-flex justify-content-center mb-5 "
      >
        <h1 class="navbar-brand text-center text-white" href="#">
          Aprovecha Nuestras Promociones
        </h1>
      </nav>
    </main>
    <div class="container" v-if="dayOfWeeknd === 'Lunes'">
      <h1 class="text-center">
        {{ dayOfWeeknd }}
      </h1>
      <div class="row">
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/promo.jpg" alt="" />
            <p class="card-header text-center font-weight-bold">
              Solicita una reserva de local para Boda y llevate dos solo por
              hoy. ¡Aprovecha!
            </p>
          </px-promociones>
        </div>
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/promo1.jpg" alt="" />
            <p class="card-header text-center font-weight-bold">
              Aproveha y obten el 50% de descuento en tu reservación
            </p>
          </px-promociones>
        </div>
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/promo3.png" alt="" />
            <p class="card-header text-center font-weight-bold">
              15% de Descuento en decoraciones
            </p>
          </px-promociones>
        </div>
      </div>
    </div>
    <div class="container" v-if="dayOfWeeknd === 'Miercoles'">
      <h1 class="text-center ">
        {{ dayOfWeeknd }}
      </h1>
      <div class="row">
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/promo1.jpg" alt="" />
            <p class="card-header text-center font-weight-bold">
              Aproveha y obten el 50% de descuento en tu reservación
            </p>
          </px-promociones>
        </div>
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/promo.jpg" alt="" />
            <p class="card-header text-center font-weight-bold">
              Solicita una reserva y llevate dos solo por hoy. ¡Aprovecha!
            </p>
          </px-promociones>
        </div>
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/promo3.png" alt="" />
            <p class="card-header text-center font-weight-bold">
              15% de Descuento en decoraciones
            </p>
          </px-promociones>
        </div>
      </div>
    </div>
    <div class="container" v-if="dayOfWeeknd === 'Viernes'">
      <h1 class="text-center ">
        {{ dayOfWeeknd }}
      </h1>
      <div class="row">
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/friday.png" alt="" />
            <p class="card-header text-center font-weight-bold">
              Solo hoy por la reserva de tu local nosotros te brindamos el
              postre!
            </p>
          </px-promociones>
        </div>
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/friday1.jpg" alt="" />
            <p class="card-header text-center font-weight-bold">
              Aprovecha solo hoy local premiun con un 20% de descuento.
            </p>
          </px-promociones>
        </div>
        <div class="col-4">
          <px-promociones>
            <img class="img-promo mb-2" src="../../assets/friday2.jpg" alt="" />
            <p class=" card-header text-center font-weight-bold">
              10% de descuento en locales para cumpleaños.
            </p>
          </px-promociones>
        </div>
      </div>
    </div>
    <px-error
      v-if="dayOfWeeknd === 'Martes' || dayOfWeeknd === 'Jueves'"
    ></px-error>
    
  </div>
</template>

<script>
import PxPromociones from "@/components/Inicio/PxPromociones";
import PxError from "@/components/Inicio/PxError";
export default {
  name: "PxHeader",
  components: {
    PxPromociones,
    PxError,
  },
  data() {
    return {
      dayOfWeeknd: "",
    };
  },
  created() {
    this.getDay();
  },
  methods: {
    getDay() {
      let fecha = new Date();
      let day = fecha.getDay();
      let days = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ];
      this.dayOfWeeknd = days[day];
    },
  },
};
</script>

<style scoped>
.img-promo {
  width: 300px;
  height: 250px;
}
.background-nav {
  background: #42b983;
}
.container{
  margin-bottom: 70px;
}
.card-header{
  height: 100px;
}
h1{
  color: #fff !important
}
</style>
