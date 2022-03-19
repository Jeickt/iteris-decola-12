<template>
    <v-container>
        <h1>{{ blocoFilter.name }}</h1>
        <v-img 
            :src="blocoFilter.photo" 
            alt="">
        </v-img>
        <p>{{ blocoFilter.address}}</p>
        <h2>Quem somos:</h2>
        <p>{{ blocoFilter.description }}</p>
        <h2>Vem pra festa:</h2>
        <p>Junto com seu Abadá, você ganha um Kit festa pra arrasar na folia: </p>
        <table>
            <tbody>
                <tr>
                    <th>A cerveja que você preferir :)</th>
                </tr>
                <tr>
                   <th>Amendoim</th>
                </tr>
                <tr>
                    <th>Confets</th>
                </tr>
                <tr>
                    <th>Espuma</th>
                </tr>
                <tr>
                    <th>Fitilho</th>
                </tr>
            
            </tbody>
        </table>
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