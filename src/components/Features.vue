<template>
  <section id="featuresSection">
    <h2 class="mb-6">Features</h2>

    <CardContainer>
      <Card class="col-span-12 row-span-2 md:col-span-7 webTechGradient">
        <template #header>
          <h3>Create themes with web technologies</h3>
          <p>
            Use HTML, CSS and JavaScript to create simple, or very complex,
            themes, which should work seamlessly between all of our greeters.
          </p>
        </template>
      </Card>

      <Card class="col-span-12 md:col-span-5 apiGradient">
        <template #header>
          <h3>Simple and powerful API</h3>
          <p>
            Use LightDM API in a simple way through JavaScript.<br />
            Also, make use of more utils that allows to access the config and
            filesystem while being secure.
          </p>
        </template>
      </Card>

      <Card class="col-span-12 md:col-span-5 batteryGradient">
        <template #header>
          <h3>Battery and Brightness control</h3>
          <p>
            Listen to the changes.<br />
            Get and set the properties.
          </p>
        </template>
      </Card>

      <Card class="col-span-12 flex-col md:flex-row multiMonGradient">
        <template #header>
          <h3>Multi-monitor support</h3>
          <p>
            Use a multi-monitor setup with multiple windows that can communicate
            with each other instantly.
          </p>
        </template>
        <LazyImg
          class="self-end"
          src="images/web-greeter-multi-monitor-setup.png"
          placeholder="images/web-greeter-multi-monitor-setup-low.png"
          alt="Web Greeter Multi Monitor Setup"
          width="1920"
        />
      </Card>
    </CardContainer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
import CardContainer from "./CardContainer.vue";
import LazyImg from "./LazyImg.vue";

export default defineComponent({
  components: {
    Card,
    CardContainer,
    LazyImg,
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

.webTechGradient {
  background: rgb(87, 55, 44);
  background: linear-gradient(
    0deg,
    rgba(70, 44, 35, 1) 0%,
    rgba(110, 82, 41, 1) 100%
  );
}
.apiGradient {
  background: rgb(51, 46, 52);
  background: linear-gradient(
    0deg,
    rgba(55, 51, 73, 1) 0%,
    rgba(92, 52, 80, 1) 100%
  );
}
.batteryGradient {
  background: rgb(58, 66, 58);
  background: linear-gradient(
    0deg,
    rgba(36, 41, 36, 1) 0%,
    rgba(32, 48, 38, 1) 100%
  );
}
.multiMonGradient {
  background: rgb(62, 58, 66);
  background: linear-gradient(
    0deg,
    rgba(48, 46, 52, 1) 0%,
    rgba(44, 51, 68, 1) 100%
  );
}
</style>
