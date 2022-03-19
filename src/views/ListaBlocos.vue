<template>
  <v-layout column wrap>
    <BarraDeBusca
      :estados="estados"
      @nomeDoBlocoSelecionado="selecaoDoNomeDoBloco"
      @estadoSelecionado="selecaoDoEstado"
    />
    <BlocoResumido
      v-for="bloco of blocos"
      :key="bloco.name"
      :bloco="bloco"
      @estados="estados"
    />
  </v-layout>
</template>

<script>
import BlocoResumido from "../components/BlocoResumido.vue";
import BarraDeBusca from "../components/BarraDeBusca.vue";

export default {
  components: { BlocoResumido, BarraDeBusca },
  data() {
    return {
      apiBlocos: [],
      blocos: [],
      estados: [],
      estado: "",
      texto: "",
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json")
      .then((response) => response.json())
      .then(
        (json) =>
          (this.apiBlocos = json.sort(function (a, b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          }))
      );
  },
  methods: {
    selecaoDoEstado(estado) {
      this.estado = estado;
      this.filter();
    },
    selecaoDoNomeDoBloco(texto) {
      this.texto = texto;
      this.filter();
    },
    filter() {
      if (this.estado && this.texto) {
        console.log(this.apiBlocos[0]);
        this.blocos = this.apiBlocos
          .filter((b) => b.address.slice(-2) === this.estado)
          .filter((b) =>
            b.name.toLowerCase().includes(this.texto.toLowerCase())
          );
      } else if (this.estado)
        this.blocos = this.apiBlocos.filter(
          (b) => b.address.slice(-2) === this.estado
        );
      else if (this.texto)
        this.blocos = this.apiBlocos.filter((b) =>
          b.name.toLowerCase().includes(this.texto.toLowerCase())
        );
      else this.blocos = this.apiBlocos;
    },
  },
  watch: {
    apiBlocos() {
      this.blocos = this.apiBlocos;
      const set = new Set();
      this.apiBlocos.forEach((b) => set.add(b.address.slice(-2)));
      this.estados = Array.from(set).sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      });
    },
  },
};
</script>

<style scoped>
</style>