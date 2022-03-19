<template>
  <div>
    <div class="sucesso">
      <p class="parabens"><strong>Parabéns!!!!</strong></p>
      <p>
        Você acabou de adquirir o passaporte da felicidade, aguardamos ansiosos
        por você no dia 19/09. Em breve, seu Kit festa chegará em sua casa.
      </p>
    </div>

    <div class="confirmacao">
      <p>Você adquiriu {{ produto }}</p>
      <p>Você receberá confirmação da compra via e-mail.</p>
    </div>
    <div class="naoPerca">
      <p>
        <strong>Fique ligado!!</strong>, Acompanhe em nossas redes
        @HappyPassport e não perca nenhuma novidade.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HappyPassport",
  props: {
    produto: { type: String, required: true },
  },
};
</script>

<style scoped>
.sucesso {
  border: 1px solid black;
  padding: 50px;
  border-radius: 50%;
  margin-top: 25px;
}
.parabens {
  text-align: center;
  margin-bottom: 10px;
}
.naoPerca {
  margin-top: 25%;
}
.confirmacao {
  margin-top: 10%;
}
</style>