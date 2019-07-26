<template >
  <div>
    <nav class="form-nav" >
      <router-link to="EmailSignUp" class="nav-link">Sign Up</router-link>
      <router-link to="SSList" class="nav-link">List People</router-link>
      <!-- <router-link to ="confirm" class="nav-link">Confirmation</router-link> -->
    </nav>
      <router-view></router-view>
      <h1>Confirmation page</h1>
  </div>
</template>
<script>

export default {
  name: 'confirmation',
};
</script>

<style scoped>
  .form-nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
