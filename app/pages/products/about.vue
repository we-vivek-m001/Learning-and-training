<template>
<h2> product About page</h2>


<NuxtLink to="/products/about"> go to product's about page</NuxtLink>
</template>

<script setup>
definePageMeta({
  middleware: (to, from) => {
    console.log('Inline middleware running')

    if (to.path === '/products/about') {
      return navigateTo('/products/admin')
    }

    
  }
})






</script>