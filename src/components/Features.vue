<template>
  <section id="featuresSection">
    <h2 class="mb-6">Features</h2>

    <CardContainer>
      <Card
        class="col-span-12 row-span-2 md:col-span-7 webTechGradient p-8 text-left"
      >
        <h3>Create themes with web technologies</h3>
        <p>
          Use HTML, CSS and JavaScript to create simple, or very complex,
          themes, which should work seamlessly between all of our greeters.
        </p>
      </Card>

      <Card class="col-span-12 md:col-span-5 apiGradient p-8 text-left">
        <h3>Simple and powerful API</h3>
        <p>
          Use LightDM API in a simple way through JavaScript.<br />
          Also, make use of more utils that allows to access the config and
          filesystem while being secure.
        </p>
      </Card>

      <Card class="col-span-12 md:col-span-5 batteryGradient p-8 text-left">
        <h3>Battery and Brightness control</h3>
        <p>
          Listen to the changes.<br />
          Get and set the properties.
        </p>
      </Card>

      <Card
        class="col-span-12 flex-col md:!flex-row multiMonGradient text-left"
      >
        <template #header>
          <div class="p-8">
            <h3>Multi-monitor support</h3>
            <p>
              Use a multi-monitor setup with multiple windows that can
              communicate with each other instantly.
            </p>
          </div>
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
  background: rgb(236, 204, 156);
  background: linear-gradient(
    180deg,
    rgba(236, 204, 166, 1) 0%,
    rgba(208, 123, 123, 1) 100%
  );
}
html.dark .webTechGradient {
  background: rgb(87, 55, 44);
  background: linear-gradient(
    0deg,
    rgba(70, 44, 35, 1) 0%,
    rgba(110, 82, 41, 1) 100%
  );
}

.apiGradient {
  background: rgb(210, 183, 240);
  background: linear-gradient(
    180deg,
    rgba(210, 183, 240, 1) 0%,
    rgb(228, 145, 180, 1) 100%
  );
}
html.dark .apiGradient {
  background: rgb(51, 46, 52);
  background: linear-gradient(
    0deg,
    rgba(55, 51, 73, 1) 0%,
    rgba(92, 52, 80, 1) 100%
  );
}

.batteryGradient {
  background: rgb(200, 237, 181);
  background: linear-gradient(
    180deg,
    rgba(200, 237, 181, 1) 0%,
    rgba(112, 207, 178, 1) 100%
  );
}
html.dark .batteryGradient {
  background: rgb(58, 66, 58);
  background: linear-gradient(
    0deg,
    rgba(36, 41, 36, 1) 0%,
    rgba(32, 48, 38, 1) 100%
  );
}

.multiMonGradient {
  background: rgb(247, 230, 242);
  background: linear-gradient(
    180deg,
    rgba(247, 230, 242, 1) 0%,
    rgba(130, 112, 207, 1) 100%
  );
}
html.dark .multiMonGradient {
  background: rgb(62, 58, 66);
  background: linear-gradient(
    0deg,
    rgba(48, 46, 52, 1) 0%,
    rgba(44, 51, 68, 1) 100%
  );
}
</style>
