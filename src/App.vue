<script setup>
import { onMounted } from "vue";
import NavBar from "@/components/layout/NavBar.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

onMounted(() => {
  storeNotes.getNotes();
});
</script>

<template>
  <!-- <RouterLink to="/" class="button">Notes</RouterLink> |
  <RouterLink to="/stats" class="button">Stats</RouterLink> -->
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <Router-View />
  </div>
</template>

<style>
@import "bulma/css/bulma.min.css";
</style>
