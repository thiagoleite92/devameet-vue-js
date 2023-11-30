<script lang="ts">
import FooterComponent from '@/components/general/FooterComponent.vue';
import HeaderComponent from '@/components/general/HeaderComponent.vue';
import MeetAdd from '@/components/meet/MeetAdd.vue';
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { HeaderComponent, FooterComponent, MeetAdd },
  setup() {
    return {
      mobile: window.innerWidth <= 992
    };
  },
  beforeCreate() {
    if (this.mobile) {
      router.push({ name: 'home' });
    }
  }
});
</script>

<template>
  <HeaderComponent />
  <MeetAdd />
  <FooterComponent />
</template>
