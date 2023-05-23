<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
// import router view
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style>
@import 'assets/css/styles.css';
</style>

<!-- <header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
</header>

<RouterView /> -->