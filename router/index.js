import { createRouter, createWebHistory } from 'vue-router';
import Step1 from '../src/views/Step1.vue'
import Step2 from '../src/views/Step2.vue'
import Step3 from '../src/views/Step3.vue'

const routes = [
    {
        path: '/',
        name: 'Step1',
        component: Step1,
    },
    {
        path: '/Step2',
        name: 'Step2',
        component: Step2,
    },
    {
        path: '/Step3',
        name: 'Step3',
        component: Step3,
    }
]   

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
