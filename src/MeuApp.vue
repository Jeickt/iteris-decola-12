<template>
  <div id="App">
    <v-app>
      <AppTopBar/>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>  
  </div>
</template>

<script>
import AppTopBar from './components/AppTopBar'

export default {
  name: "App",
  components: {
    AppTopBar,
  },
}

</script>