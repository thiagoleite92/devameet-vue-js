<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
  methods: {
    goBack() {
      router.back();
    }
  }
});
</script>

<template>
  <div class="container-action-header">
    <span @click="goBack">Cancelar</span>
    <strong>Editar Perfil</strong>
    <span class="principal" @click="$emit('actionCallback')">Concluir</span>
  </div>
</template>

<style src="../../assets/styles/actionHeader.scss" lang="scss"></style>
