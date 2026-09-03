<script setup lang="ts">
import { onMounted } from "vue";
import { withBase } from "vitepress";

onMounted(() => {
  window.location.replace(withBase("/fr/"));
});
</script>

<template>
  <p>
    Redirection vers
    <a :href="withBase('/fr/')">le wiki français</a>
    …
  </p>
</template>
