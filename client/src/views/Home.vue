<template>
  <div class="home">
    <h1>
     SSanta Generator
     <small class="text-muted">S is for Secret ;)</small>
     </h1>
     
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
