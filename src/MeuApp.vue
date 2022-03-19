<template>
  <div>
    <HomePage/>
    <router-view />   
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue'

export default {
  name: "App",
  components: {
    HomePage,
  },
 
};
</script>