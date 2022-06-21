<template>
  <img
    :src="placeholder ?? src"
    :alt="alt ?? ''"
    :class="class"
    :width="width"
    :height="height"
  />
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
    class: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    height: {
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
          lazyImage.onerror = () => {
            lazyImage.src = this.$props.placeholder;
          };
        }
      });
    });

    lazyImageObserver.observe(this.$el);
  },
});
</script>
