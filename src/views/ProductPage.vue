<template>
    <v-container>
        <h1>{{ blocoFilter.name }}</h1>
        <v-img 
            :src="blocoFilter.photo" 
            alt="Teste">
        </v-img>
        <p>{{ blocoFilter.address}}</p>
        <p>{{ blocoFilter.description }}</p>
    </v-container>    
</template>

<script>
export default {
    name: "productPage",
    data() {
        return {
            select: this.$route.params.name,
            listaDeBlocos: []
        }
    },
    computed: {
        blocoFilter() {
            let blocoFilter = this.listaDeBlocos.filter(
                (bloco) => bloco.name == this.select
            )
            let blocoSelect = blocoFilter[0]
            
            return blocoSelect
        }
    },
    created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json')
            .then(response => response.json())
            .then(json => {this.listaDeBlocos = json});
    },
}
</script>

<style scoped>


</style>