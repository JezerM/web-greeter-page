<template>
  <section id="themesView">
    <h1>Themes</h1>
    <h4>
      Discover new <span class="greenGradient">LightDM</span> themes here!
    </h4>

    <h2 class="mt-12 mb-6">Default themes</h2>

    <section id="defaultThemes">
      <CardContainer>
        <Card
          class="col-span-12 md:col-span-6"
          v-for="theme in Themes.default"
          :key="theme.name"
        >
          <template #header>
            <h3>{{ theme.name }}</h3>
            <p>{{ theme.description }}</p>
          </template>

          <div
            class="grid pl-6 pt-6 grid-rows-6 grid-cols-6 box-border"
            v-if="theme.imageSecondary"
          >
            <img
              class="col-start-1 col-end-5 row-start-1 row-end-5 drop-shadow-2xl"
              :src="getImageUrl(theme.imageSecondary)"
              alt="Theme image"
            />
            <img
              class="col-start-2 col-end-7 row-start-2 row-end-7 drop-shadow-2xl"
              :src="getImageUrl(theme.imagePrimary)"
              alt="Theme image"
            />
          </div>
          <div v-else>
            <img :src="getImageUrl(theme.imagePrimary)" alt="Theme image" />
          </div>
        </Card>
      </CardContainer>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardContainer from "@/components/CardContainer.vue";
import Card from "@/components/Card.vue";
import Themes from "@/assets/themes.json";

export default defineComponent({
  components: {
    CardContainer,
    Card,
  },
  data() {
    return {
      Themes,
    };
  },
  methods: {
    getImageUrl(path: string) {
      return path;
    },
  },
  setup() {
    console.log(Themes);
  },
});
</script>

<style>
#defaultThemes {
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: center;

  margin: 0px 5vw;
}
</style>
