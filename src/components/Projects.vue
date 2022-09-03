<template>
  <section id="projectsSection">
    <CardContainer>
      <Card class="col-span-12 md:col-span-4">
        <template #header>
          <img
            class="projectIcon"
            src="/icons/web-greeter-icon.png"
            alt="Web Greeter icon"
            width="128"
          />
          <h3>Web Greeter</h3>
          <p>
            A modern, visually appealing greeter for LightDM, that allows to
            create web based themes with HTML, CSS and JavaScript. Made in
            Python with PyQt5 and PyGObject.
          </p>

          <a
            class="button buttonRepo"
            href="https://github.com/JezerM/web-greeter"
            target="_blank"
            title="Web Greeter GitHub repository"
          >
            GitHub
          </a>
        </template>
      </Card>

      <Card class="col-span-12 md:col-span-4">
        <template #header>
          <img
            class="projectIcon"
            src="/icons/nody-greeter-icon.png"
            alt="Nody Greeter icon"
            width="128"
          />
          <h3>Nody Greeter</h3>
          <p>
            LightDM greeter that allows to create wonderful themes with web
            technologies. Made in Node.js with Electron.js and NodeGTK.
          </p>

          <a
            class="button buttonRepo"
            href="https://github.com/JezerM/nody-greeter"
            target="_blank"
            title="Nody Greeter GitHub repository"
          >
            GitHub
          </a>
        </template>
      </Card>

      <Card class="col-span-12 md:col-span-4">
        <template #header>
          <img
            class="projectIcon"
            src="/icons/sea-greeter-icon.png"
            alt="Sea Greeter icon"
            width="128"
          />
          <h3>Sea Greeter</h3>
          <p>
            Sea (like C) greeter for LightDM allows to create themes with web
            technologies, the same as web-greeter, nody-greeter and the outdated
            lightdm-webkit2-greeter. Made in C with GTK and Webkit2-GTK.
          </p>
          <p>Still in development.</p>
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
#projectsSection {
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: center;

  margin: 0px 5vw 5em;
}
#projectsSection p {
  margin-bottom: 1.2rem;
}
#projectsSection #card-header {
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
}

.projectIcon {
  margin: 0em 2em 1em;
}

.buttonRepo {
  background-color: var(--c-bg-light);
}
.buttonRepo:hover,
.buttonRepo:focus {
  background-color: var(--c-bg);
}
</style>
