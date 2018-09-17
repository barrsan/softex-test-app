<template>
  <div class="contact-form-container">
    <form
      class="contact-form"
      @submit.prevent="handleSubmit"
    >
      <div
        class="contact-form__alert"
        v-if="statusMessage.type"
      >
        <app-alert
          :type="statusMessage.type"
          :message="statusMessage.text"
          :on-click="setStatusMessage"
        ></app-alert>
      </div>
      <div class="contact-form__control-group">
        <label
          class="contact-form__label"
          for="name">Name</label>
        <input
          :class="{
            'contact-form__input': true,
            'contact-form__input_error': $v.name.$error,
          }"
          placeholder="Name"
          name="name"
          type="text"
          v-model.trim="$v.name.$model"
          @blur="$v.name.$touch()"
        />
        <div
          class="contact-form__error-message"
          v-if="$v.name.$error && !$v.name.required"
        >
          Required
        </div>
        <div
          class="contact-form__error-message"
          v-if="$v.name.$error && !$v.name.minLength"
        >
          Less than 3 characters
        </div>
      </div>
      <div class="contact-form__control-group">
        <label
          class="contact-form__label"
          for="phone"
        >
          Phone
        </label>
        <input
          :class="{
            'contact-form__input': true,
            'contact-form__input_error': $v.phone.$error,
          }"
          placeholder="Phone"
          name="phone"
          type="tel"
          v-mask="'+7##########'"
          v-model="$v.phone.$model"
          @blur="$v.phone.$touch()"
        />
        <div
          class="contact-form__error-message"
          v-if="$v.phone.$error && !$v.phone.required"
        >
          Required
        </div>
        <div
          class="contact-form__error-message"
          v-if="$v.phone.$error && !$v.phone.correctPhone"
        >
          Illegal phone number
        </div>
      </div>
      <div class="contact-form__control-group">
        <label
          class="contact-form__label"
          for="message"
        >
          Message
        </label>
        <textarea
          :class="{
            'contact-form__input': true,
            'contact-form__input_textarea': true,
            'contact-form__input_error': $v.message.$error,
          }"
          placeholder="Message"
          name="message"
          rows="4"
          v-model.trim="$v.message.$model"
          @input="handleInputMessage"
          @blur="$v.message.$touch()"
        />
        <div class="contact-form__textarea-symbols-counter">
          {{$v.message.$model.length}}
        </div>
        <div
          class="contact-form__error-message"
          v-if="$v.message.$error && $v.message.maxLength"
        >
          Length exceeds 250 characters
        </div>
      </div>
      <div class="contact-form__control-group">
        <button
          :class="{
            'contact-form__button': true,
            'contact-form__button_disabled': disabledButton,
          }"
          type="submit"
          :disabled="disabledButton"
        >
          {{submitting ? 'Wait please...' : 'Submit'}}
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import { mask } from 'vue-the-mask';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { mapActions, mapGetters } from 'vuex';
import AppAlert from './AppAlert';


export default {
  name: 'AppContactForm',

  components: {
    AppAlert,
  },

  directives: {
    mask,
  },

  props: {
    nameValue: {
      type: String,
      default: '',
    },

    phoneValue: {
      type: String,
      default: '',
    },

    messageValue: {
      type: String,
      default: '',
    },

    submitting: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      name: this.nameValue,
      phone: this.phoneValue,
      message: this.messageValue,
    };
  },

  computed: {
    ...mapGetters([
      'statusMessage',
    ]),
    disabledButton() {
      return this.submitting || this.$v.$invalid;
    },
  },

  validations: {
    name: {
      required,
      minLength: minLength(3),
    },

    phone: {
      required,
      correctPhone(newPhone) {
        // eslint-disable-next-line
        const regex = new RegExp(/^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}/);
        const valid = regex.test(newPhone);
        return !this.$v.phone.required ? true : !!valid;
      },
    },

    message: {
      maxLength: maxLength(250),
    },
  },

  methods: {
    ...mapActions([
      'sendForm',
      'setStatusMessage',
    ]),

    handleSubmit() {
      const { name, phone, message } = this;
      const data = { name, phone, message };
      if (!this.$v.$invalid) {
        this.sendForm(data);
      }
    },

    handleInputMessage() {
      if (this.message.length > 250) {
        this.message = this.message.substring(0, 250);
      }
    },
  },

  mounted() {
    if (this.statusMessage.type) {
      this.setStatusMessage({
        type: '',
        text: '',
      });
    }
  },
};
</script>


<style scoped>
.contact-form {
  padding: 20px 0 0;
  width: 100%;
  max-width: 700px;
}

.contact-form__control-group {
  width: 100%;
  margin-bottom: 24px;
}

.contact-form__label {
  font-size: 1.1rem;
  font-weight: 700;
}

.contact-form__input {
  width: 100%;
  margin: 6px 0 0;
  padding: 10px 12px;
  font-size: 1.1rem;
  border: 1px solid rgba(189, 190, 195, 1);
  border-radius: 0;
  -webkit-appearance: none;
}

.contact-form__input_error {
  border-color: rgba(241, 64, 112, 1);
}

.contact-form__error-message {
  padding: 8px 0 0;
  font-size: 0.9rem;
  color: rgba(241, 64, 112, 1);
}

.contact-form__button {
  padding: 12px 40px;
  font-size: 1.1rem;
  color: white;
  background: rgba(0, 101, 156, 1);
  border: 0;
  cursor: pointer;
}

.contact-form__button:hover {
  background: rgba(48, 151, 206, 1);;
}

.contact-form__button_disabled {
  background: grey;
  pointer-events: none;
}

.contact-form__textarea-symbols-counter {
  font-weight: 700;
  text-align: right;
}

.contact-form__alert {
  padding-bottom: 20px;
}

@media screen and (max-width: 575px) {
  .contact-form__button {
    width: 100%;
  }
}
</style>

