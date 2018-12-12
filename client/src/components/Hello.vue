<template>
  <div class="hello">
    <div class="jumbotron">
    <h1 class="display-3">Hello! Welcome!</h1>
    <p class="lead">to the simple gift exchange generator</p>
      <hr class="my-4">
        <p>
          We do not keep your email adresses or names, we just assign a person to eachother 
          and send them an email of who they have. And of course we send the person 
          organizing a list of who everyone has, in case they forget or loose their email.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Lets get started!</a>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
