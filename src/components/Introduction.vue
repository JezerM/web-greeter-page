<template>
  <section id="introductionDiv">
    <h1>A Web Based Greeter For <span class="greenGradient">LightDM</span></h1>
    <h4>
      A program that allows you to create and use wonderful themes in your Login
      Manager
    </h4>

    <div id="introductionDivButtonGroup">
      <a class="button" href="https://github.com/JezerM/web-greeter">GitHub</a>
      <a class="button" href="">Install</a>
    </div>
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

  margin: 25vh 15%;
}
#introductionDiv h1 {
  margin: 20px 0px;
  max-width: 800px;
}
#introductionDivButtonGroup {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin: 15px;
}
#introductionDivButtonGroup button {
  font-size: 16px;
}
</style>
