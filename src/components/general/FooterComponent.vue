<script lang="ts">
import { defineComponent } from 'vue';
import NavigationComponentVue from './NavigationComponent.vue';

export default defineComponent({ components: { NavigationComponentVue } });
</script>

<template>
  <div class="container-footer">
    <NavigationComponentVue />
  </div>
</template>

<style src="../../assets/styles/footer.scss" lang="scss"></style>
