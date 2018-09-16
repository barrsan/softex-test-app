<template>
  <div
    :class="{
      'alert-message': true,
      'alert-message_error': type === 'error',
      'alert-message_success': type === 'success',
    }"
    v-if="type && active"
    @click="handleClick"
  >
    {{message}}
  </div>
</template>


<script>
export default {
  name: 'AppAlert',

  props: {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },

  computed: {
    active() {
      return this.type && this.message;
    },
  },

  methods: {
    handleClick() {
      this.onClick({
        type: '',
        text: '',
      });
    },
  },
};
</script>


<style>
.alert-message {
  width: 100%;
  padding: 20px;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
}

.alert-message_error{
  background: rgba(241, 64, 112, 1);
}

.alert-message_success{
  background: rgba(106, 183, 83, 1);
}
</style>
