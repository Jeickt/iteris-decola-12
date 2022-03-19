<template class="searchBar mt-10" color="transparent" height="50px">
  <div class="toolbar">
    <v-icon class="mr-3 ml-3">mdi-magnify</v-icon>
    <v-text-field
      class="field mt-4"
      placeholder="Busca?"
      v-model="texto"
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-select
      class="field mt-4 mr-3"
      :items="estados"
      label="Estado"
      dense
      v-model="selected"
    ></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      texto: "",
    };
  },
  watch: {
    selected() {
      this.$emit("estadoSelecionado", this.selected);
    },
    texto() {
      this.$emit("nomeDoBlocoSelecionado", this.texto);
    },
  },
  props: {
    estados: [],
  },
};
</script>

<style scoped>
.searchBar {
  width: 100%;
  margin: 60px;
}
.field {
  max-width: 30%;
}
.toolbar {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
</style>