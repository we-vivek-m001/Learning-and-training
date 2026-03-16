<script setup>
const route = useRoute();
</script>
<template>
    <h2>Oops! page not found</h2>
    <p> you tried to access: <strong>  {{ route.params.slug.join('/') }}</strong></p>
    <NuxtLink to="/blogs">Go to blogs page </NuxtLink>
</template>