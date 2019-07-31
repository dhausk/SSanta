<template>
  <div class="Home">
    <div class="jumbotron">
    <h1 class="display-3">Hello! Welcome!</h1>
    <p class="lead">To the simple gift exchange generator</p>
      <hr class="my-4">
        <p>
          We do not sell or give away your email adresses or names, we just assign a person to eachother
          and send them an email of who they have. And of course we send the person
          organizing a list of who everyone has, in case someone forgets or looses their email.
        </p>
        <p class="lead">
          <router-link to="/SSForm/EmailSignUp" class="nav-link">
            <button class="btn btn-primary btn-lg btn-block" role="button">Lets get started!</button>
          </router-link>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
