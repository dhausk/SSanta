<template >
  <div class="container">
    <nav class="form-nav nav nav-pill">
      <router-link to="EmailSignUp" class="nav-link nav-item ">Sign Up</router-link>
      <router-link to="SSList" class="nav-link nav-item">Create group</router-link>
      <router-link to ="confirm" class="nav-link nav-item">Confirm</router-link>
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
