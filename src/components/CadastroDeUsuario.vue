<template>
   <div class= 'form'>
   <h2>Tela de cadastro para Happy Passport</h2>
   <p>Preencha seu nome completo:{{nome}}</p>
   <input class="input" v-model="cadastro" 
   placeholder="Nome Completo" 
   type="text">
   <p>Preencha seu e-mail:{{mail}}</p>
   <input class="input" v-model="cadastro" 
   placeholder="e-mail" 
   type="text">
   <p>Preencha seu telefone:{{tel}}</p>
   <input class="input" v-model="cadastro" 
   placeholder="Telefone" 
   type="text">
    <p>Preencha sua data de nascimento:{{DataDenascimento}}</p>
   <input class="input" v-model="cadastro" 
   placeholder="data de nascimento" 
   type="date">

   <div id="botao">
    <button class="botao" v-on:click="enviar('Enviado com sucesso')">Enviar</button>
  </div>
   </div>
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
.input{
  border: 2px solid rgb(234, 0, 255);
  border-radius: 4px;
}
.botao {
   background: #F63DC8;
   background-image: -webkit-linear-gradient(top, #F63DC8, #E178DF);
   background-image: -moz-linear-gradient(top, #F63DC8, #E178DF);
   background-image: -ms-linear-gradient(top, #F63DC8, #E178DF);
   background-image: -o-linear-gradient(top, #F63DC8, #E178DF);
   background-image: -webkit-gradient(to bottom, #F63DC8, #E178DF);
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 20px;
   color: #FFFFFF;
   font-family: Arial;
   font-size: 17px;
   font-weight: 400;
   padding: 12px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;
}
</style>