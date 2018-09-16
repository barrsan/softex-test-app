import Vue from 'vue';
import Vuex from 'vuex';
import contactForm from './contactForm';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contactForm,
  },
});
