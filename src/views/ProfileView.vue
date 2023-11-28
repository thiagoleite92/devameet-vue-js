<script lang="ts">
import FooterComponent from '@/components/general/FooterComponent.vue';
import HeaderComponent from '@/components/general/HeaderComponent.vue';
import AvatarInput from '@/components/general/AvatarInput.vue';
import { defineComponent } from 'vue';
import ActionHeader from '@/components/profile/ActionHeader.vue';
import { LoginServices } from '@/services/LoginServices';
import router from '@/router';
import { UserServices } from '@/services/UserServices';

const loginServices = new LoginServices();
const userServices = new UserServices();

export default defineComponent({
  components: { HeaderComponent, FooterComponent, AvatarInput, ActionHeader },
  data() {
    return {
      name: localStorage.getItem('name'),
      avatar: localStorage.getItem('avatar') as string,
      image: ''
    };
  },
  methods: {
    async finishUpdate() {
      try {
        if (!this.name) {
          return;
        }

        const body = {} as any;

        if (this?.name) {
          body.name = this.name;
        }

        if (this?.image) {
          body.avatar = this.image;
        } else {
          body.avatar = this.avatar;
        }

        await userServices.update(body);

        if (this?.name) {
          localStorage.setItem('name', this.name);
        }

        if (this?.image) {
          localStorage.setItem('avatar', this.image);
        }
        return router.back();
      } catch (e: any) {
        if (e?.response?.data?.message) {
          console.log('Erro ao atualizar usuário.', e?.response?.data?.message);
        } else {
          console.log('Erro ao atualizar usuário.', e?.response?.data?.message);
        }
      }
    },
    setImage(s: string) {
      this.image = s;
    },
    clearName() {
      this.name = '';
    },
    logout() {
      loginServices.logout();
    }
  },
  computed: {
    getImagem() {
      return this?.image && this.image?.length > 0 ? this.image : this?.avatar;
    }
  }
});
</script>

<template>
  <HeaderComponent :hide="true" />
  <div class="container-profile">
    <ActionHeader @actionCallback="finishUpdate" />
    <AvatarInput :image="getImagem" @setImage="setImage" />
    <div class="input">
      <span>Nome</span>
      <input v-model="name" type="text" placeholder="Informe seu nome" />
      <img src="../assets/images/clear.svg" alt="Limpar" @click="clearName" />
    </div>
    <div class="logout">
      <div @click="logout">
        <img src="../assets/images/logout.svg" alt="Sair" />
        <span>Sair</span>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<style src="../assets/styles/profile.scss" lang="scss"></style>
