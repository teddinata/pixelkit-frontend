<script setup>
import { RouterLink } from "vue-router";
import Categories from "./Card/Categories.vue";
import { ref } from "vue";

// data dummy for categories
const categories = ref([
  {
    id: 1,
    title: "Mobile UI Kit",
    image: "categories-1.jpg",
    count: 731,
  },
  {
    id: 2,
    title: "Fonts",
    image: "categories-2.jpg",
    count: 657,
  },
  {
    id: 3,
    title: "Icon Set",
    image: "categories-3.jpg",
    count: 83559,
  },
  {
    id: 4,
    title: "Website UI Kit",
    image: "categories-4.jpg",
    count: 83559,
  },
]);
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- categories data -->
      <Categories v-for="category in categories" :key="category" :title="category.title" :count="category.count" :image="category.image" />
      
    </div>
  </div>
</template>