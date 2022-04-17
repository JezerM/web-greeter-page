<template>
  <Introduction />
  <Features />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Introduction from "@/components/Introduction.vue";
import Features from "@/components/Features.vue";

export default defineComponent({
  components: {
    Introduction,
    Features,
  },
  setup() {},
});
</script>
