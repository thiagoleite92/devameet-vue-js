<script lang="ts">
import CustomInput from '@/components/general/CustomInput.vue';
import { defineComponent } from 'vue';

import loginIcon from '../assets/images/mail.svg';
import passwordIcon from '../assets/images/key.svg';

export default defineComponent({
  components: { CustomInput },
  setup() {
    return {
      loginIcon,
      passwordIcon
    };
  },
  data() {
    return {
      login: '',
      password: '',
      error: '',
      loading: false
    };
  },
  computed: {
    buttonText() {
      return this.loading ? 'Signing in...' : 'Sign in';
    }
  }
});
</script>

<template>
  <div class="container-public">
    <img src="../assets/images/logo.svg" alt="Logo Devammet" class="logo" />

    <form>
      <p v-if="error" class="error"></p>

      <CustomInput
        :icon="loginIcon"
        alt="Login"
        name="login"
        placeholder="login "
      />
      <CustomInput
        :icon="passwordIcon"
        alt="Senha"
        name="password"
        placeholder="Senha"
      />

      <button>{{ buttonText }}</button>

      <div class="link">
        <p>Não possui conta?</p>
        <router-link to="/register">Faça o seu cadastro agora</router-link>
      </div>
    </form>
  </div>
</template>

<style src="@/assets/styles/public.scss"></style>
