import Vuex from 'vuex';
import Vue from 'vue';
import Todos from '~/components/Todos.vue'

//Load Vuex
Vue.use(Vuex)

//Create store

export const store = new Vuex.Store({
    modules: {
      Todos
    }
})

