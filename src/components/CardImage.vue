<template>
  <div
    class="grid grid-rows-6 grid-cols-6 box-border aspect-video overflow-hidden"
    v-if="props.theme.imageSecondary"
  >
    <img
      class="col-start-1 col-end-5 row-start-1 row-end-5 drop-shadow-2xl"
      :src="props.theme.imageSecondary"
      :alt="props.theme.name + ' Secondary image'"
    />
    <img
      class="col-start-2 col-end-7 row-start-2 row-end-7 drop-shadow-2xl"
      :src="props.theme.imagePrimary"
      :alt="props.theme.name + ' Primary image'"
    />
  </div>
  <div v-else class="aspect-video overflow-hidden">
    <img
      :src="props.theme.imagePrimary"
      :alt="props.theme.name + ' image'"
      class="aspect-video object-cover"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ theme: any }>();
</script>
