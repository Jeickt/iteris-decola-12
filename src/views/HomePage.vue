<template>
<div>
  <h1 id="title" class="text-h2 text-center mb-3 mt-5">Happy Passaport</h1>
  <p>O carnaval está chegando e nós vamos curtir juntos!!!
O Happy passaport que te dar a oportunidade de curtir e se divertir na sua casa, com conforto, segurança e acessibilidade!
Você e sua família, poderão curtir juntinhos esse bloco animado! </p>
<v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</div>
</template>


<script>
export default {};
</script>

<style scoped>

#title {
  color: #C51162;
  font-family: 'Lobster', cursive;
  font-size: 30px;
}

</style>