<template>
  <section id="featuresSection">
    <h2 class="mb-6">Features</h2>

    <CardContainer>
      <Card class="col-span-12 sm:col-span-7">
        <template #header>
          <h3>Create themes with web technologies</h3>
          <p>
            Use HTML, CSS and JavaScript to create simple, or very complex,
            themes, which should work seamlessly between all of our greeters.
          </p>
        </template>
      </Card>

      <Card class="col-span-12 sm:col-span-5">
        <template #header>
          <h3>Simple and powerful API</h3>
          <p>
            Use LightDM API in a simple way through JavaScript.<br />
            Also, make use of more utils that allows to access the config and
            filesystem while being secure.
          </p>
        </template>
      </Card>

      <Card class="col-span-12 sm:col-span-6">
        <template #header>
          <h3>Battery and Brightness control</h3>
          <p>Listen to the changes. Get and set the properties.</p>
        </template>
      </Card>

      <Card class="col-span-12 sm:col-span-6">
        <template #header>
          <h3>Multi-monitor support</h3>
          <p>
            Use a multi-monitor setup with multiple windows that can communicate
            with each other instantly. <br />
            (Only available in Nody Greeter)
          </p>
        </template>
      </Card>
    </CardContainer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
import CardContainer from "./CardContainer.vue";

export default defineComponent({
  components: {
    Card,
    CardContainer,
  },
  setup() {},
});
</script>

<style>
#featuresSection {
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: center;

  margin: 0px 5vw;
}
</style>
