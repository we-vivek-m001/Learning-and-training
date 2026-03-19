<template>
    <div>
        <h2> Pinia example</h2>
        <h1> counter: {{ counter.count }}</h1>
        <h2> double: {{ counter.doublecount }}</h2>
        <button @click="counter.increment">+</button>
        <button @click="counter.decrement">-</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();

</script>