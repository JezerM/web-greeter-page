<template>
  <MenuBar />
  <Introduction />
  <Features />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBar from "./components/MenuBar.vue";
import Introduction from "./components/Introduction.vue";
import Features from "./components/Features.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    MenuBar,
    Introduction,
    Features,
    Footer,
  },
});
</script>

<style>
html {
  background-color: #1a1a1a;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 60px 0px 10px 0px;
}
</style>
