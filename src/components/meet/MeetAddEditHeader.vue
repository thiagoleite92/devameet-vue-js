<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    name: String,
    color: String
  },
  emits: {
    setName: null,
    setColor: null
  },
  data() {
    return {
      showColors: false,
      colors: ['#25cbd3', '#3bd32d', '#f0f5ff', '#a7fae9', '#d44231'],
      selected: null as string | null
    };
  },
  computed: {
    model: {
      get() {
        return this.name;
      },
      set(v: any) {
        this.selected = v;
        this.$emit('setName', v);
      }
    }
  },
  methods: {
    selectedColor() {
      if (this.selected) {
        this.$emit('setColor', this.selected);
      }
      this.showColors = false;
    }
  }
});
</script>

<template>
  <div class="container-meet-user-header">
    <div>
      <span>Nova reunião</span>
      <input
        type="text"
        placeholder="Digite o nome de sua reunião"
        v-model="model"
      />
    </div>
    <div class="color-select" @click="showColors = true">
      <div class="circle" :style="{ backgroundColor: color }" />
      <img src="../../assets/images/arrow_down.svg" alt="Selecionar cor" />
    </div>
  </div>
  <GDialog v-model="showColors">
    <div class="wrapper">
      <div class="content">
        <div class="container">
          <span>Selecione a cor da reunião:</span>
          <div>
            <div
              v-for="color in colors"
              :key="color"
              :style="{ backgroundColor: color }"
              class="color"
              :class="color === selected ? 'selected' : ''"
              @click="selected = color"
            />
          </div>
        </div>
        <div class="actions">
          <span @click="showColors = false">cancelar</span>
          <button @click="selectedColor">Confirmar</button>
        </div>
      </div>
    </div>
  </GDialog>
</template>

<style src="../../assets/styles/meetUserHeader.scss" lang="scss"></style>
