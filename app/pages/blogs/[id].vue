<template>

<div>
    <h1> product ID: {{ id }}</h1>
    <h1> {{ prod.title }}</h1>

    <p>[id].vue is a dynamic route page in Nuxt that
     captures route parameters from the URL.</p>
</div>



 </template> 
 
 <script setup>

const route = useRoute()
const id = route.params.id

const {data:prod,
    pending, 
    error,
    refresh 
} = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);

console.log(prod.value.title);


</script>