<template>
  <Badge type="danger" :text="deprecatedText" vertical="middle" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePageLang } from "@vuepress/client";

const pageLang = usePageLang();

const deprecatedText = ref("Deprecated");

switch (pageLang.value) {
  case "en-US":
    deprecatedText.value = "Deprecated";
    break;
  case "es":
    deprecatedText.value = "Obsoleto";
    break;
  default:
    break;
}
</script>
