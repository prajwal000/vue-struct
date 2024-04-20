<script>
import Navbar from "../components/Navbar.vue"

import axios from 'axios';
    try{
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
    
    console.log(response);
   
  })

    }
    catch(error){
        console.log(error)
    }
  

</script>
<template>

<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

</template>
