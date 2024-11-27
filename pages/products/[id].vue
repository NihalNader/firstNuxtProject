<template>
    <div>
<!--<p> {{ product.title }}</p>
<p> {{ product.price }}</p>
<p> {{ product.id }}</p>-->

<Head>
    <Title>Product||{{ product.title }}</Title>
    <Meta name="description" :content="product.description"/>
</Head>

<ProductDetails :product="product"/>

    </div>
</template>

<script setup>
const{id}=useRoute().params
const uri='https://fakestoreapi.com/products/' + id

//fetch the product
//we use the key because fetch wont make anew request for onther id only the first 
const {data:product}=await useFetch(uri,{key:id})

if(!product.value){
    throw createError({statusCode:404,statusMessage:'product not found'})
}

definePageMeta({
    layout:'products'
    
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