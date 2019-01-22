<template >
<div>
  <div>
    <H1>You have Reached the Email Form</H1>
  </div>
  <nav class="form-nav" >
    <router-link to="SSList" class="nav-link">List </router-link>
    <router-link to="EmailSignUp" class="nav-link">Sign Up</router-link>
  </nav>
    <router-view></router-view>
</div>
  


</template>
<script>

export default {
  name: 'SSForm'
};
</script>

<style scoped>

</style>