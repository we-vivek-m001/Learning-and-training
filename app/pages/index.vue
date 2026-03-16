

<script setup>
    const route = useRoute();
 </script>
<template>
<div> 
    <h2>  product dynamic page</h2>
     <p>you are viewing product with ID: {{route.params.id}} </p>
     <NuxtLink to="/contact"> Contactm</NuxtLink> <br>
     <NuxtLink to="/products"> product</NuxtLink>
     <NuxtLink to="/products/1"> dynamic 1</NuxtLink> <br>
     <NuxtLink to="/blogs"> blog</NuxtLink>
</div>    
</template>
