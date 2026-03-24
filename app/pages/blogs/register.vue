<template>

<div>
    <h2>register</h2>
    <input v-model="name" placeholder="enter name">
    <input v-model="age" placeholder="enter name">

    <button @click="submitForm">submit</button>
    <P> {{ response }}</P>
</div>


</template>

<script setup>
const name = ref('');
const age = ref('');
const response = ref('');

const submitForm = async ()=>{
const res = await $fetch('/api/items/register', {
    method: 'POST',
    body: {
        name: name.value,
        age:age.value
    }
})
response.value = res.message
console.log(response.value);
}



</script>

