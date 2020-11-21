<template>
  <div class="card">
    <div>
      <slot></slot>
      <div class="body-card">
        <p class="font-weight-bold">Reservaciones disponibles</p>
        <p>{{ numberReservation }}</p>
        <p>$100</p>
        <button
          id="btn-reserva"
         @click="getPromo"
          type="button"
          class="btn btn-light mt-2"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          :disabled="Estado"
        >
          {{Stack}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxPromociones",
  data() {
    return {
      numberReservation: 2,
      Stack: "Reserva",
      Estado: false,
      Descuentos:["s4ssr3r", "s3r33ssr3", "s3rsr3"],
      n: 0
    };
  },
  methods: {
    modal() {
      this.$swal({
        title: "Desa adquirir la promocion",
        text: this.Descuentos[this.n],
        type: "warning",
        confirmButtonText: "Adquirir",
        showCloseButton: true,
      }).then((result) => {
        if (result.value) {
          this.$swal(
            "¡Gracias!",
            "La solitud se ha enviado con exito",
            "success"
          );
          this.numberReservation = this.numberReservation -= 1;
          this.n = this.n += 1
          if (this.numberReservation <= 0) {
            this.Stack = "Agotado"
            this.numberReservation = 0;
            this.Estado = true;
          }
        } else {
          this.$swal("Reservacion cancelada");
        }
      });
    },
    getPromo(){
      this.$router.push({name: 'Peticion', params: {id: "5facd73d9253959afc1a04ca"}})
    }
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 500px;
  border-radius: 8px;
  margin: 10px;
  overflow: hidden;
  background: #42b983;
  color: #fff;
}
.body-card {
  padding: 5px;
  text-align: center;
}
span {
  display: block;
}
#btn-reserva{
  border-radius: 15px;
}
p {
  margin: 0;
}
</style>
