

<script setup>

const {data:prod,
    pending, 
    error,
    refresh 
} = await useFetch('https://jsonplaceholder.typicode.com/posts');


</script>

<template>

<div>
    <h1> Posts</h1>
    <div v-for="p in prod" :key="p.id">
        <p>{{ p.id }}</p>
       <NuxtLink :to="`/blogs/${p.id}`"> {{ p.title }}</NuxtLink>
        <h1 v-if="error"> Oops! error encountered: {{ error }}</h1>
    </div>
</div>
</template>    

