import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "view-home" */  '@/views/Home');
// const Login = () => import(/* webpackChunkName: "view-login" */  '@/views/Login');
const Search = () => import(/* webpackChunkName: "view-search" */  '@/views/Search');
const Districts = () => import(/* webpackChunkName: "view-districts" */  '@/views/Districts');
const Offer = () => import(/* webpackChunkName: "view-offer" */  '@/views/Offer');

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: Login,
        //     meta: {
        //         guest: true,
        //     },
        // },
        {
            path: '/districts',
            name: 'districts',
            component: Districts,
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
        },
        {
            path: '/offer/:id',
            name: 'offer',
            props: true,
            component: Offer,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('authenticated') == null) {
            next({
                path: '/login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('authenticated') == null) {
            next()
        } else {
            next({name: 'home'})
        }
    } else {
        next()
    }
});


export default router;
