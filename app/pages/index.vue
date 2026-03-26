

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


import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};








 </script>
<template>
<div> 
    <h2>  product dynamic page</h2>
    
     
     <div v-for = "p in products">
        <!-- <NuxtLink :to="`/products/${p.id}`"> {{ p.title }}</NuxtLink> -->

     </div>
     <NewComponent/>
     <ProductCard />


     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum magnam blanditiis itaque culpa repudiandae ea laboriosam velit labore consequuntur deserunt impedit dicta maiores facilis, excepturi sunt! Animi, minima consequuntur!
     Assumenda laborum tempora vel libero iusto in ratione voluptatibus fuga aspernatur sapiente! Voluptatibus eos ab cumque voluptatem ullam! Adipisci provident excepturi maxime tempore! Sapiente quia corrupti perferendis nesciunt, et a!
     Quia amet qui delectus quidem nihil maiores nulla eius, ducimus molestiae numquam similique, enim sed, distinctio rem praesentium in. Unde sint voluptatum aspernatur neque officia, modi explicabo in! Vero, est.
     Praesentium voluptas numquam nisi neque reiciendis! Dolorem enim provident sequi repellendus atque dignissimos quidem, nesciunt at dolores officiis iure dolore itaque ad excepturi accusantium vel impedit corporis ipsa molestias exercitationem.
     Harum, nihil odit blanditiis, veniam impedit sapiente illo nemo quos obcaecati ratione eveniet eos voluptate odio labore beatae iure vero qui nesciunt provident. Unde iure maiores in, suscipit accusamus consequuntur.</p>
</div>

</template> 
