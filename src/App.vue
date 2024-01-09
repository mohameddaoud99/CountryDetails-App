<!-- src/App.vue -->

<template>
  <div id="app">
    <CountryList />
  </div>
</template>

<script>
import CountryList from "@/components/CountryList.vue";

export default {
  components: {
    CountryList,
  },
};
</script>

<style>
/* Add your global styles here */
</style>
