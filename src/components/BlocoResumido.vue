<template>
  <router-link :to="{ name: 'ProductPage', params: { name: bloco.name } }">
    <v-card :loading="loading" class="mx-auto my-12" max-width="250">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="125" :src="bloco.photo"></v-img>

      <v-card-title>{{ bloco.name }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <div class="my-4 text-subtitle-2">
          <strong>Cidade:</strong> {{ bloco.address }}
        </div>
        <div
          class="my-4 text-justify text-subtitle-2"
          :class="descricaoCurta ? descricaoCurta : descricaoLonga"
        >
          <strong>Descrição:</strong> {{ bloco.description }}
        </div>
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    descricaoCurta: true,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    mudarDescricao() {
      this.descricaoLonga = !this.descricaoLonga;
    },
  },
  props: {
    bloco: { type: Object, required: true },
  },
};
</script>

<style scoped>
.descricaoCurta {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.descricaoLonga {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 20;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>