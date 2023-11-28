
// IMPORTIAMO LE FUNZIONI DI VUE ROUTER
import { createRouter, createWebHistory } from 'vue-router';

// IMPORTIAMO LE PAGINE DA USARE
import Homepage from '../pages/HomePage.vue';
import PostPage from '../pages/PostPage.vue';


// DEFINIAMO LE ROTTE E IL ROUTER
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Homepage },
        { path: '/restaurants/:id', name: 'restaurant', component: PostPage },

        // da lasciare sempre per ultima
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
    ]
});

export { router }

