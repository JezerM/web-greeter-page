<template>
  <img :src="placeholder ?? src" :alt="alt ?? ''" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: String,
    placeholder: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: false,
    },
  },
  mounted() {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = this.$props.src;
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImageObserver.observe(this.$el);
  },
});
</script>
