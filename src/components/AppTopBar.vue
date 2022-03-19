 <template>
   <div class="app-top-bar">
     <v-app-bar
          app
          dark
        >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
         
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
            >
            <router-link to="/">
              <v-list-item>
                <v-list-item-title>Início</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to="/ListaBlocos" >
              <v-list-item>
                <v-list-item-title>Blocos de Carnaval</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link to='/CadastroDeUsuario' >
              <v-list-item>
                <v-list-item-title>Cadastro</v-list-item-title>
              </v-list-item>
            </router-link>

            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
   </div>
 </template>

 <script>
 export default {
   name: 'AppTopBar',
   data(){
     return {
       drawer: false,
        group: null
     }
   }
   
 }
 </script>

 <style scoped>
.app-top-bar a{
  text-decoration: none;
}
 
 </style>