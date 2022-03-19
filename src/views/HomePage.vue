<template>
  <div>
    <div>
      <v-text-field class="mt-9" label="Nome" v-model="name"></v-text-field>
    </div>
    <router-link :to="{ name: 'ListaBlocos', params: { uf: name } }">
      <v-btn class="mr-4" type="submit"> Submeter </v-btn>
    </router-link>
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
</style>