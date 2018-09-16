import axios from 'axios';


const delay = duration => new Promise(resolve => setTimeout(resolve, duration));


export default {
  state: {
    form: {
      name: '',
      phone: '',
      message: '',
    },
    submitting: false,
    statusMessage: {
      type: '',
      text: '',
    },
  },


  /* eslint-disable no-param-reassign */
  mutations: {
    setFormValues(state, payload) {
      state.form = payload;
    },

    setSubmitting(state, payload) {
      state.submitting = payload;
    },

    setStatusMessage(state, payload) {
      state.statusMessage = payload;
    },
  },
  /* eslint-enable no-param-reassign */


  actions: {
    async sendForm({ dispatch, commit }, payload) {
      commit('setSubmitting', true);
      try {
        await axios.get(
          'data.json',
          {
            params: {
              format: 'json',
            },
          },
        );
        await delay(2000);
        dispatch('setStatusMessage', {
          type: 'success',
          text: 'Successfully submitted form',
        });
        dispatch('setFormValues', payload);
      } catch (error) {
        commit('setStatusMessage', {
          type: 'error',
          text: 'Form not sent',
        });
      } finally {
        commit('setSubmitting', false);
      }
    },

    setFormValues({ commit }, payload) {
      commit('setFormValues', payload);
    },

    setStatusMessage({ commit }, payload) {
      commit('setStatusMessage', payload);
    },
  },


  getters: {
    name: ({ form }) => form.name,
    phone: ({ form }) => form.phone,
    message: ({ form }) => form.message,
    submitting: ({ submitting }) => submitting,
    statusMessage: ({ statusMessage }) => statusMessage,
  },
};
