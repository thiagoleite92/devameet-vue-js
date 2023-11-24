<script lang="ts">
import { defineComponent } from 'vue';

import AvatarIcon from '@/assets/images/avatar.svg';
import { GDialog } from 'gitart-vue-dialog';

export default defineComponent({
  props: {
    image: String,
    alt: String
  },
  data() {
    return {
      showModal: false,
      selected: null as string | null,
      avatars: Array.from({ length: 9 }, (_, index) => ({
        value: `avatar_0${index + 1}`
      }))
    };
  },
  methods: {
    isSelected(avatar: any) {
      return avatar?.value === this.selected ? 'selected' : '';
    },
    getAvatarUrl(avatar: string) {
      const path = `../../assets/objects/avatars/${avatar}_front.png`;
      const imageUrl = new URL(path, import.meta.url);
      return imageUrl.href;
    },
    submitAvatar() {
      if (this.selected) {
        this.$emit('setImage', this.selected);
      }
      this.showModal = false;
    }
  },
  computed: {
    avatarImage() {
      if (this.image && this.image.trim().length > 0) {
        const path = `../../assets/objects/avatars/${this.image}_front.png`;
        const imageUrl = new URL(path, import.meta.url);
        return imageUrl.href;
      }
      return AvatarIcon;
    }
  },
  components: { GDialog }
});
</script>

<template>
  <div class="container-upload-image" @click="showModal = true">
    <div class="avatar">
      <img :src="avatarImage" :alt="alt" />
    </div>
    <GDialog v-model="showModal">
      <div class="wrapper">
        <div class="content">
          <p>Avatar</p>
          <span>Selecione seu Avatar</span>
          <div class="line"></div>
          <div class="avatars">
            <div
              class="container-avatar"
              v-for="avatar in avatars"
              :key="avatar.value"
              :class="isSelected(avatar.value)"
              @click="selected = avatar.value"
            >
              <img :src="getAvatarUrl(avatar.value)" />
            </div>
          </div>
        </div>

        <div class="actions">
          <span @click="showModal = false">Voltar</span>
          <button type="button" @click="submitAvatar">Salvar</button>
        </div>
      </div>
    </GDialog>
  </div>
</template>

<style lang="scss" src="@/assets/styles/inputUpload.scss"></style>
