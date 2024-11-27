<template>

    <div>
    <div class="grid grid-cols-4 gap-5">
<div v-for="p in products">
   <!--<NuxtLink :to="`/products/${p.id}`"> {{ p.title }} </NuxtLink>--> 
<ProductCard :product="p"/>
</div>


    </div>  


    </div>
</template>
<!--specifie the layout for this page-->

<script setup>

definePageMeta({
    layout:'products'
    
})

//fetch the products
const{data: products} = await useFetch('https://fakestoreapi.com/products')

useHead({
title:'prooductt',
meta: [
    {name:'description' , content:'Nuxt 3 march'}
]

})
</script>

<style scoped>
h2 {
margin-bottom: 20px;
font-size: 36px;
}
p {
    margin:20px 0;
}
</style>