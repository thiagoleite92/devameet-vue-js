<script lang="ts">
import { defineComponent } from 'vue';
import MeetListItem from './MeetListItem.vue';
import { MeetServices } from '@/services/MeetServices';

const meetServices = new MeetServices();

export default defineComponent({
  data() {
    return {
      meets: [] as any,
      selectedId: null as string | null,
      showModal: false
    };
  },
  methods: {
    async getMeets() {
      try {
        const result = await meetServices.getMeets();

        if (result?.data) {
          this.meets = result.data;
        }
      } catch (error) {
        console.log(error, 'ocorreu erro ao listar reuniões');
      }
    },
    selectItem(id: string) {
      this.selectedId = id;
    },
    selectToRemove(id: string) {
      this.selectedId = id;
      this.showModal = true;
    },
    async confirmDelete() {
      try {
        if (this.selectedId) {
          await meetServices.deleteMeetById(this.selectedId);

          const meetIndex = this.meets?.findIndex(
            (meet: any) => meet?.id === this.selectedId
          );

          if (meetIndex >= 0) {
            this.meets?.splice(meetIndex, 1);
          }
          this.showModal = false;
        }
      } catch (error) {
        console.log(error, 'ocorreu erro ao remover uma reunião');
      }
    }
  },
  components: { MeetListItem },
  mounted() {
    this.getMeets();
  }
});
</script>

<template>
  <div class="container-meet-list">
    <div class="empty" v-if="meets.length === 0">
      <img src="../../assets/images/empty.svg" />
      <p>Você ainda não possui reuniões criadas :(</p>
    </div>
    <MeetListItem
      v-else
      v-for="meet in meets"
      :meet="meet"
      :selectedId="selectedId || ''"
      :key="meet?.id"
      @selectItem="selectItem"
      @selectToRemove="selectToRemove"
    />
  </div>
  <GDialog v-model="showModal">
    <div class="wrapper">
      <div class="content">
        <div class="container">
          <span>Deletar Reunião?</span>
          <p>Deseja deletar a reunião?</p>
          <p>Essa ação não poderá ser desfeita</p>
        </div>
        <div class="actions">
          <span @click="showModal = false">cancelar</span>
          <button @click="confirmDelete">Confirmar</button>
        </div>
      </div>
    </div>
  </GDialog>
</template>

<style src="../../assets/styles/meetList.scss" lang="scss"></style>
