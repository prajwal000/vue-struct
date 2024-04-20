<script>
import Navbar from "./components/Navbar.vue";
import axios from 'axios';

export default {
  components: {
    Navbar // Register the Navbar component
  },
  mounted() {
    try {
      axios.get("https://fakestoreapi.com/products")
        .then(response => {
          console.log(response);
        })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<template>
  <div>
    <Navbar /> <!-- Use the Navbar component here -->
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
</template>
