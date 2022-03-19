<template>
    <v-container>
        <div class= 'form'>
        <h2>Tela de cadastro para o carnaval</h2>
        <p>Preencha seu nome completo:{{nome}}</p>
        <input v-model="cadastro" 
        placeholder="Nome Completo" 
        type="text">
        <p>Preencha seu e-mail:{{mail}}</p>
        <input v-model="cadastro" 
        placeholder="e-mail" 
        type="text">
        <p>Preencha seu telefone:{{tel}}</p>
        <input v-model="cadastro" 
        placeholder="Telefone" 
        type="text">
            <p>Preencha sua data de nascimento:{{tel}}</p>
        <input v-model="cadastro" 
        placeholder="data de nascimento" 
        type="date">
        <div id="botao">
            <button v-on:click="enviar('Enviado com sucesso')">Enviar</button>
        </div>
        </div>
   </v-container>
</template>

<script>
export default {
   name:'CadastroDeUsuarios',
data(){
    return{ 
        enviado: 'Cadastro realizado com sucesso!'
    }
},
methods: {
    enviar: function (message) {
      alert(message)
    }
  }
}
</script>
<style scoped>

</style>