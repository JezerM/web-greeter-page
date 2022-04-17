<template>
  <div class="card">
    <header id="card-header" class="px-8 pt-8 text-left">
      <slot name="header"></slot>
    </header>
    <header id="card-content" class="px-8 pb-8">
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
  background-color: #333333;
  position: relative;
  border-radius: 25px;
}
</style>
<style>
#card-header h3 {
  margin: 0;
}
</style>
