<script lang="ts">
import { defineComponent } from 'vue';
import MeetUserHeader from './MeetUserHeader.vue';
import MeetList from './MeetList.vue';
export default defineComponent({
  components: { MeetUserHeader, MeetList }
});
</script>

<template>
  <div class="container-principal">
    <div class="container-meet">
      <MeetUserHeader />
      <MeetList />
    </div>
  </div>
</template>

<style src="../../assets/styles/principal.scss" lang="scss"></style>
