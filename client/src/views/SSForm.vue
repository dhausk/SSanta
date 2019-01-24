<template >
  <div>
    <nav class="form-nav" >
      <router-link to="EmailSignUp" class="nav-link">Sign Up</router-link>
      <router-link to="SSList" class="nav-link">List People</router-link>
    </nav>
      <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'SSForm',
};
</script>

<style scoped>
  .form-nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
