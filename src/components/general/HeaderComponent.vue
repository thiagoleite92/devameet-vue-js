<script lang="ts">
import { defineComponent } from 'vue';
import NavigationComponentVue from './NavigationComponent.vue';

export default defineComponent({ components: { NavigationComponentVue } });
</script>

<template>
  <div class="container-header">
    <img src="../../assets/images/logo.svg" alt="Logo Devameet" class="logo" />
    <NavigationComponentVue />
  </div>
</template>

<style src="../../assets/styles/header.scss" lang="scss"></style>
