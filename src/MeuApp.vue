<template>
  <div id="App">
    <v-app>
      <CadastroDeUsuario/>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>  
  </div>
</template>

<script>
import CadastroDeUsuario from './components/CadastroDeUsuario'

export default {
  name: "App",
  components: {
    CadastroDeUsuario,
  },
}

</script>