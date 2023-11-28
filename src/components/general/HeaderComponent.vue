<script lang="ts">
import { defineComponent } from 'vue';
import NavigationComponentVue from './NavigationComponent.vue';

export default defineComponent({
  components: { NavigationComponentVue },
  props: {
    hide: Boolean
  }
});
</script>

<template>
  <div class="container-header" :class="{ hide }">
    <img src="../../assets/images/logo.svg" alt="Logo Devameet" class="logo" />
    <NavigationComponentVue />
  </div>
</template>

<style src="../../assets/styles/header.scss" lang="scss"></style>
