<template>
  <section id="homeView">
    <Introduction />
    <Projects />
    <Features />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Introduction from "@/components/Introduction.vue";
import Projects from "@/components/Projects.vue";
import Features from "@/components/Features.vue";

export default defineComponent({
  components: {
    Introduction,
    Projects,
    Features,
  },
  setup() {},
});
</script>
