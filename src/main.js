import Vue from 'vue'
import Fragment from 'vue-fragment'
import AsyncComputed from 'vue-async-computed'
import BootstrapVue from 'bootstrap-vue'
import vSelect from 'vue-select'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faFirstAid,
    faShoppingBasket,
    faGraduationCap,
    faUtensils,
    faBus,
    faHospital,
    faFilm,
    faTheaterMasks,
    faKey,
    faClock,
    faMapMarker,
    faUsers,
    faUserTie,
    faUser,
    faChild,
    faMale,
    faBabyCarriage,
    faRubleSign,
    faSkullCrossbones,
    faMapMarkerAlt,
    faRoad,
    faUserNinja,
    faWineBottle,
    faStar,
    faStarHalfAlt,
    faPlus,
    faMinus,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {LMap, LTileLayer, LMarker, LPolygon, LTooltip} from 'vue2-leaflet'
import {Icon} from 'leaflet'
import VueCarousel from 'vue-carousel'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index'
import '@/scss/index.scss';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

library.add(
    faFirstAid,
    faShoppingBasket,
    faGraduationCap,
    faUtensils,
    faBus,
    faHospital,
    faFilm,
    faTheaterMasks,
    faKey,
    faClock,
    faMapMarker,
    faUsers,
    faUserTie,
    faUser,
    faChild,
    faMale,
    faBabyCarriage,
    faRubleSign,
    faSkullCrossbones,
    faMapMarkerAlt,
    faRoad,
    faUserNinja,
    faWineBottle,
    faStar,
    faStarHalfAlt,
    faPlus,
    faMinus,
);

Vue.use(AsyncComputed);
Vue.use(Fragment.Plugin);
Vue.use(AsyncComputed);
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

Vue.component('fa-icon', FontAwesomeIcon);
Vue.component('v-select', vSelect);
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-polygon', LPolygon);
Vue.component('l-marker', LMarker);
Vue.component('l-tooltip', LTooltip);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
