<template>
  <div class="card">
    <header id="card-header" class="px-8 pt-8 text-left">
      <slot name="header"></slot>
    </header>
    <header id="card-content">
      <slot></slot>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    backgroundColor: String,
  },
  setup() {},
});
</script>

<style scoped>
.card {
  display: flex;
  position: relative;

  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  background-color: #333333;
  border-radius: 25px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
<style>
#card-header h3 {
  margin: 0;
}
</style>
