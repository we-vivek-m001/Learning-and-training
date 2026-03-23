<script setup>
const {even } = useNuxtApp();
</script>

<template>
    <div>
        <h1> Home Page </h1>
        <h2>Even Numbers: {{ even(20) }}</h2>
    </div>
</template>