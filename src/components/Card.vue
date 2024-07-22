<template>
  <div class="card flex flex-col gap-0 rounded-xl relative overflow-hidden">
    <header id="card-header">
      <slot name="header"></slot>
    </header>
    <div id="card-content">
      <slot></slot>
    </div>
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
  background-color: var(--c-bg-lighter);
  box-sizing: border-box;
}
</style>
