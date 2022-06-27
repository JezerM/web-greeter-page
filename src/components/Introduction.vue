<template>
  <section id="introductionDiv">
    <h1>A Web Based Greeter For <span class="greenGradient">LightDM</span></h1>
    <h4>
      A program that allows you to create and use wonderful themes in your Login
      Manager
    </h4>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style>
#introductionDiv {
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: center;

  margin: 28vh 15%;
}
#introductionDiv h1 {
  margin: 20px 0px;
  max-width: 800px;
}
</style>
