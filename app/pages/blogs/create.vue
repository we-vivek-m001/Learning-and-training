<script setup>
const formData = {
    title: "test product",
    price: 45.5,
    description: "this is new product",
};
   const addProduct = async () =>
   {
    const {data:prod,
    pending, 
    error,
    refresh 
        } = await useFetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "application/json",
            }
        });
   }  
              

</script>

<template>
        <button @click="addProduct()"> add Product </button>
</template>