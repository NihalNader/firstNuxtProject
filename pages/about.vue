<template>
    <div>

<h2>about</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure officia nostrum nobis sequi tempora pariatur fugiat ad, odio nulla voluptate repellat asperiores doloremque recusandae porro, vero ex quisquam minima!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure officia nostrum nobis sequi tempora pariatur fugiat ad, odio nulla voluptate repellat asperiores doloremque recusandae porro, vero ex quisquam minima!</p>
<div>{{ data }}</div>
    </div>
</template>

<script setup>
//const {data}=await useFetch('/api/ninja?name=nono',{
  //  method:'post',
    //body:{age:30}
//})
const {data}=await useFetch('/api/currency/GFD')
//const {data}=await useFetch('/api/ninja')
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