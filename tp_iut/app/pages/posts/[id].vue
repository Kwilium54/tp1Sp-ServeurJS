<script setup>
const route = useRoute()
// Lorsque vous accédez à /posts/1, route.params.id vaudra 1
console.log(route.params.id)
</script>

<template>
  <div>
    <h1 v-if="route.params.id == 1">C'est l'heure du duel</h1>
    <h1 v-else-if="route.params.id == 2">En avant Pikachu</h1>
    <NuxtLink to="/posts/1">Article 1</NuxtLink>
    <NuxtLink to="/posts/2">Article 2</NuxtLink>
  </div>
</template>