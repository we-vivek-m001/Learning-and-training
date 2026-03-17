<script setup>
const props = defineProps(['error'])
</script>

<template>
  <div>
    <h2>Oops!</h2>
    <p>Status Code: {{ error.statusCode }}</p>
    <p>{{ error.statusMessage }}</p>

    <NuxtLink to="/">Go Home</NuxtLink>
  </div>
</template>