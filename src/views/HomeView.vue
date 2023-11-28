<script lang="ts">
import FooterComponent from '@/components/general/FooterComponent.vue';
import HeaderComponent from '@/components/general/HeaderComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { HeaderComponent, FooterComponent }
});
</script>

<template>
  <HeaderComponent />
  <FooterComponent />
</template>

<style src="../assets/styles/principal.scss" lang="scss"></style>
