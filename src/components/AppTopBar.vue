<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      dark
      shrink-on-scroll
      src="https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 120px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>


export default {};
</script>

<style scoped>

</style>