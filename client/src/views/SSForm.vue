<template >
  <div class="container">
    <nav class="form-nav" >
      <router-link to="EmailSignUp" class="nav-link">Sign Up</router-link>
      <router-link to="SSList" class="nav-link">Create group</router-link>
      <router-link to ="confirm" class="nav-link">Confirmation</router-link>
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
