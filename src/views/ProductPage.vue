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
        <ul>
            <li>A cerveja que você preferir :)</li>
            <li>Amendoim</li>
            <li>Confetes</li>
            <li>Espuma</li>
            <li>Fitilho</li>
        </ul>
        <table class="table">
                <thead class="table">
                    <tr>
                        <th>Bloco</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody class="table">
                    <tr>
                        <td>Vip</td>
                        <td>R$ 45,00</td>
                    </tr>
                    <tr>
                         <td>Camarote</td>
                        <td>R$ 145,00</td>
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
.table{
    border: 1px solid black;
    border-spacing: 15px;
}
</style>