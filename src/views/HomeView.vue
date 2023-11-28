<script lang="ts">
import FooterComponent from '@/components/general/FooterComponent.vue';
import HeaderComponent from '@/components/general/HeaderComponent.vue';
import MeetHome from '@/components/meet/MeetHome.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { HeaderComponent, FooterComponent, MeetHome }
});
</script>

<template>
  <HeaderComponent />
  <MeetHome />
  <FooterComponent />
</template>

<style src="../assets/styles/principal.scss" lang="scss"></style>
