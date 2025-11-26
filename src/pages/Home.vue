<script setup>
import {ref} from "vue";
// ref() cria variaveis reativas

const likes = ref(0);

//texto digitado do input
const texto = ref("");

//lista de comentarios
const comentarios = ref([]);

const mostrar = ref(false);
</script>

<template>
    <h1>Bem vindos ao feed</h1>
    <section class="post">
        <img src="https://www.tribunapr.com.br/wp-content/uploads/2025/11/25093318/gracyanne-barbosa-ovos.jpg" alt="Foto da GracyOvos">
        <div class="like">

            <button @click="likes++">{{ likes }} 💗</button>

            <p v-if="likes >= 2">Esse post está ficando popular!</p>
        </div>
<!-- v-show remove, ou escode do html -->
<div   class="comentarios">
    <h4>Comentários:</h4>
        <!-- campo de comentário -->
         <!-- v-model  faz a ligação entre o imput e a variavel de texto-->
          <!-- v-for é repetir um elemento -->
            <!-- c é o comentario -->
             <!-- i indice -->
        <p v-for="(c, i) in comentarios" :key="i"> {{ c }}</p>

        <input v-model="texto" type="text">

        <button @click="comentarios.push(texto)">Enviar</button>
</div>
        
    </section>
</template>

<style scoped>
img{
    width: 30vw;
    border-radius: 10px;
}




</style>