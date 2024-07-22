<template>
  <section id="themesView">
    <h1>Themes</h1>
    <h4>
      Discover new <span class="greenGradient">LightDM</span> themes here!
    </h4>

    <section id="defaultThemes" v-if="Themes.default.length != 0">
      <h2 class="mt-12 mb-6">Default themes</h2>
      <CardContainer>
        <Card
          class="col-span-12 md:col-span-6 2xl:col-span-4 2k:col-span-3"
          v-for="theme in Themes.default"
          :key="theme.name"
        >
          <template #header>
            <CardImage :theme="theme" />
          </template>

          <div class="p-8 text-left">
            <h3>{{ theme.name }}</h3>
            <h5>{{ theme.author }}</h5>
            <h5 v-if="theme.multiMonitor == true">Multi monitor support</h5>
            <p>{{ theme.description }}</p>

            <a
              class="button buttonRepo"
              :href="theme.repo"
              target="_blank"
              title="Visit theme's repository"
              >{{ getRepoHost(theme.repo) }}</a
            >
          </div>
        </Card>
      </CardContainer>
    </section>

    <section id="communityThemes" v-if="Themes.community.length != 0">
      <h2 class="mt-12 mb-6">Community themes</h2>

      <CardContainer>
        <Card
          class="col-span-12 md:col-span-6 2xl:col-span-4 2k:col-span-3"
          v-for="theme in Themes.community"
          :key="theme.name"
        >
          <template #header>
            <CardImage :theme="theme" />
          </template>

          <div class="p-8 text-left">
            <h3>{{ theme.name }}</h3>
            <h5>{{ theme.author }}</h5>
            <h5 v-if="theme.multiMonitor == true">Multi monitor support</h5>
            <p>{{ theme.description }}</p>

            <a
              class="button buttonRepo"
              :href="theme.repo"
              target="_blank"
              title="Visit theme's repository"
              >{{ getRepoHost(theme.repo) }}</a
            >
          </div>
        </Card>
      </CardContainer>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardContainer from "@/components/CardContainer.vue";
import CardImage from "@/components/CardImage.vue";
import Card from "@/components/Card.vue";
import Themes from "@/assets/themes.json";

export default defineComponent({
  components: {
    CardContainer,
    CardImage,
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
    getRepoHost(repo: string) {
      if (repo.match(/(github\.com\/).*/)) {
        return "GitHub";
      } else if (repo.match(/(gitlab\.com\/).*/)) {
        return "GitLab";
      } else {
        return "Repo";
      }
    },
  },
  setup() {
    console.log(Themes);
  },
});
</script>

<style>
#defaultThemes,
#communityThemes {
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: center;

  margin: 0px 5vw;
}
#defaultThemes p,
#communityThemes p {
  margin-bottom: 1.2rem;
}

.buttonRepo {
  background-color: var(--c-bg-light);
}
.buttonRepo:hover,
.buttonRepo:focus {
  background-color: var(--c-bg);
}
</style>
