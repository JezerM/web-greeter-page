<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter } = useData();

console.log(frontmatter.value);
</script>

<template>
  <div class="container">
    <section>
      <h1>Default themes</h1>
      <div class="grid-container">
        <a
          v-for="theme in frontmatter.default"
          :key="theme.name"
          :href="theme.repo"
          target="_blank"
          class="card"
        >
          <div class="card-image">
            <img :src="theme.image" :alt="`${theme.name} image`" />
          </div>
          <div class="card-content">
            <h2 class="title">
              {{ theme.name }}
              <Badge text="Multi-monitor" v-if="theme.multiMonitor" />
            </h2>
            <span class="author">{{ theme.author }}</span>
            <p class="description">{{ theme.description }}</p>
          </div>
        </a>
      </div>
    </section>

    <section>
      <h1>Community themes</h1>
      <div class="grid-container">
        <a
          v-for="theme in frontmatter.community"
          :key="theme.name"
          :href="theme.repo"
          target="_blank"
          class="card"
        >
          <div class="card-image">
            <img :src="theme.image" :alt="`${theme.name} image`" />
          </div>
          <div class="card-content">
            <h2 class="title">
              {{ theme.name }}
              <Badge text="Multi-monitor" v-if="theme.multiMonitor" />
            </h2>
            <span class="author">{{ theme.author }}</span>
            <p class="description">{{ theme.description }}</p>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 6rem;
}

section {
  max-width: 1152px;
  margin: auto;
}

h1 {
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.grid-container {
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.card {
  display: block;
  grid-column: span 12 / span 12;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
}

.card:hover {
  background-color: var(--vp-c-default-soft);
}

.card-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.title {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  padding-bottom: 0.25rem;
}
.author {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 0.15rem;
  color: var(--vp-c-text-2);
}
.description {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

.card-image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.card-image img {
  aspect-ratio: 16 / 9;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

@media screen and (min-width: 768px) {
  .card {
    grid-column: span 6 / span 6;
  }
}

@media screen and (min-width: 1280px) {
  .card {
    grid-column: span 4 / span 4;
  }
}
</style>
