<template>
<div>
  <h1 id="title" class="text-h2 text-center mb-3 mt-5">Happy Passport</h1>
  <p>O carnaval está chegando e nós vamos curtir juntos!!!
    O Happy Passport que te dar a oportunidade de curtir e se divertir na sua casa, com conforto, segurança e acessibilidade!
    Você e sua família, poderão curtir juntinhos esse bloco animado!  

    Com o Happy Passport você pode curtir os blocos de carnaval mais desejados do Brasil!
    Ao Adiquirir o Happy Passaport, você terá o ingresso e o Kit maaais animiado desse carnaval! </p>
    
  <router-link :to="{ name: 'ListaBlocos', params: { uf: name } }">
      <v-btn class="mr-4" type="submit"> Vamos Lá! </v-btn>
  </router-link>
  <img src="https://images.pexels.com/photos/1974100/pexels-photo-1974100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "PE",
      
    };
  },
};
</script>

<style scoped>

#title {
  color: #C51162;
  font-family: 'Lobster', cursive;
  font-size: 30px;
}

</style>