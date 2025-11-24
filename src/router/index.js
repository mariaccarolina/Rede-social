import { createRouter, createWebHistory } from "vue-router";
//São usados para configurar e criar o roteador da aplicação;

//importar as paginas:
import Home from "../pages/Home.vue";
import Mensage from "../pages/Mensage.vue";
import Perfil from "../pages/Perfil.vue";

// criar um array de {mostrando cada rota}
//path -> caminho , o endereço, precisamos escrever sempre em minusculo
//component -> qual arquivo será exibido
const routes = [
    {path:"/", component: Home},
    {path: "/mensagem", component: Mensage},
    {path: "/perfil", component: Perfil}
]
// a pagina inicial terá o caminho com apenas o "/"

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
//liberando a configuração
