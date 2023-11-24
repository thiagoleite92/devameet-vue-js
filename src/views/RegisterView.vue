<script lang="ts">
import { defineComponent } from 'vue';
import CustomInput from '@/components/general/CustomInput.vue';
import AvatarInput from '@/components/general/AvatarInput.vue';
import { RegisterServices } from '@/services/RegisterServices';

import router from '@/router';

import userIcon from '@/assets/images/user.svg';
import loginIcon from '@/assets/images/mail.svg';
import passwordIcon from '@/assets/images/key.svg';

const registerServices = new RegisterServices();

export default defineComponent({
  components: { CustomInput, AvatarInput },
  setup() {
    return {
      userIcon,
      loginIcon,
      passwordIcon
    };
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      loading: false,
      image: ''
    };
  },
  methods: {
    setName(v: string) {
      this.name = v;
    },
    setEmail(v: string) {
      this.email = v;
    },
    setPassword(v: string) {
      this.password = v;
    },
    setConfirmPassword(v: string) {
      this.confirmPassword = v;
    },
    setUser(v: string) {
      this.email = v;
    },
    setImage(v: string) {
      this.image = v;
    },
    async doRegister() {}
  },
  computed: {
    buttonText() {
      return this.loading ? 'Registering in...' : 'Register';
    }
  }
});
</script>

<template>
  <div class="container-public">
    <img src="../assets/images/logo.svg" alt="Logo Devammet" class="logo" />

    <form>
      <AvatarInput :image="image" @setImage="setImage" />
      <p v-if="error" class="error">{{ error }}</p>

      <CustomInput
        :icon="userIcon"
        alt="Nome"
        name="name"
        placeholder="Nome"
        :model-value="name"
        @setInput="setName"
      />

      <CustomInput
        :icon="loginIcon"
        alt="Login"
        name="login"
        placeholder="Login"
        :model-value="email"
        @setInput="setEmail"
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
      <CustomInput
        :icon="passwordIcon"
        alt="Confirmar Senha"
        name="confirmPassword"
        placeholder="Confirmar Senha"
        :model-value="confirmPassword"
        @setInput="setConfirmPassword"
        type="password"
      />

      <button type="button" @click="doRegister">{{ buttonText }}</button>

      <div class="link">
        <p>Já possui uma conta?</p>
        <router-link to="/login">Faça seu login agora</router-link>
      </div>
    </form>
  </div>
</template>

<style src="@/assets/styles/public.scss"></style>
