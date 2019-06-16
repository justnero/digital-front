import Vue from 'vue'
import boilerplate from '@/store/modules/boilerplate'
import VuexPersist from 'vuex-persist'
import createLogger from "vuex/dist/logger"
import Vuex from "vuex"

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const vuexPersist = new VuexPersist({
    key: 'digital-front',
    storage: localStorage
});

export default new Vuex.Store({
    modules: {
        boilerplate,
    },
    strict: debug,
    plugins: [vuexPersist.plugin, ...(debug ? [createLogger()] : [])],
})
