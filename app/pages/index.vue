

<script setup>
import NewComponent from '~/components/newComponent.vue';
import Usefetch from './usefetch.vue';


    const route = useRoute();
  const {data: products} = await useFetch('https://fakestoreapi.com/products' )
  
//   const {id} = useRoute().params
//   const url = 'https://fakestoreapi.com/products' + id
  
//   const {data: product} = await useFetch(url);

   //const {data: products, pending, error } = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`)



useHead({
  title: 'Products Page',
  meta: [
    {
      name: 'description',
      content: 'List of all products'
    }
  ]
})



 </script>
<template>
<div> 
    <h2>  product dynamic page</h2>
    
     
     <div v-for = "p in products">
        <!-- <NuxtLink :to="`/products/${p.id}`"> {{ p.title }}</NuxtLink> -->


    

    


     </div>
     <NewComponent/>
     <ProductCard />
</div>    
</template>
