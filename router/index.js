import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue'
import Step2 from '../src/views/Step2.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Step2',
        name: 'Step2',
        component: Step2,
    },
]   

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
