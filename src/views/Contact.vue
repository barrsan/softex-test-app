<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <app-contact-form
      :nameValue="name"
      :phoneValue="phone"
      :messageValue="message"
      :submitting="submitting"
    ></app-contact-form>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import AppContactForm from '../components/AppContactForm';


export default {
  name: 'Contact',

  components: {
    AppContactForm,
  },

  computed: {
    ...mapGetters([
      'name',
      'phone',
      'message',
      'submitting',
    ]),
  },
};
</script>
