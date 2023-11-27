<script lang="ts">
import CustomInput from '@/components/general/CustomInput.vue';
import { defineComponent } from 'vue';

import loginIcon from '../assets/images/mail.svg';
import passwordIcon from '../assets/images/key.svg';
import { LoginServices } from '@/services/LoginServices';
import router from '@/router';

const loginServices = new LoginServices();

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
  },
  methods: {
    setLogin(v: string) {
      this.login = v;
    },
    setPassword(v: string) {
      this.password = v;
    },
    async doLogin() {
      try {
        if (
          !this.login ||
          !this.login.trim() ||
          !this.password ||
          !this.password.trim()
        ) {
          return (this.error = 'Por favor, informar login e senha.');
        }

        this.loading = true;

        await loginServices.login({
          login: this.login,
          password: this.password
        });

        return router.push('/');
      } catch (e: any) {
        console.log('Erro ao efetuar login:', e.message);

        if (e?.response?.data?.message) {
          return (this.error = e?.response?.data?.message);
        } else {
          this.error = 'Não foi possível efetuar o login, tente novamente!';
        }
      } finally {
        this.loading = false;
      }
    }
  }
});
</script>

<template>
  <div class="container-public">
    <img src="../assets/images/logo.svg" alt="Logo Devammet" class="logo" />

    <form>
      <p v-if="$route?.query?.success" class="success">
        Cadastro efetuado com sucesso, realize o login para continuar.
      </p>
      <p v-if="error" class="error">{{ error }}</p>

      <CustomInput
        :icon="loginIcon"
        alt="Login"
        name="login"
        placeholder="Login"
        :model-value="login"
        @setInput="setLogin"
      />
      <CustomInput
        :icon="passwordIcon"
        alt="Senha"
        name="password"
        placeholder="Senha"
        :model-value="password"
        @setInput="setPassword"
        type="password"
      />

      <button type="button" @click="doLogin">{{ buttonText }}</button>

      <div class="link">
        <p>Não possui conta?</p>
        <router-link to="/register">Faça o seu cadastro agora</router-link>
      </div>
    </form>
  </div>
</template>

<style src="@/assets/styles/public.scss"></style>
