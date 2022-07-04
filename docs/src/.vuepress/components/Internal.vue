<template>
  <Badge type="normal" :text="internalText" vertical="middle" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePageLang } from "@vuepress/client";

const pageLang = usePageLang();

const internalText = ref("Internal");

switch (pageLang.value) {
  case "en-US":
    internalText.value = "Internal";
    break;
  case "es":
    internalText.value = "Interno";
    break;
  default:
    break;
}
</script>
