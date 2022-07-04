<template>
  <Badge
    :type="readOnly ? 'normal' : 'tip'"
    :text="readOnlyText"
    vertical="middle"
  />
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { usePageLang } from "@vuepress/client";

const props = defineProps({
  readOnly: {
    type: Boolean,
    default: true,
  },
});

const pageLang = usePageLang();

const readOnlyText = ref("Read Only");

function setReadOnlyLang() {
  switch (pageLang.value) {
    case "en-US":
      readOnlyText.value = "Read Only";
      break;
    case "es":
      readOnlyText.value = "Sólo Lectura";
      break;
    default:
      break;
  }
}

function setModifiableLang() {
  switch (pageLang.value) {
    case "en-US":
      readOnlyText.value = "Modifiable: read/write";
      break;
    case "es":
      readOnlyText.value = "Modificable: lectura/escritura";
      break;
    default:
      break;
  }
}

if (props.readOnly) {
  setReadOnlyLang();
} else {
  setModifiableLang();
}
</script>
