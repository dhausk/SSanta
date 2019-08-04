<template >
  <div>
    <div class="progress mb-4">
      <div class="progress-bar"
      role="progressbar"
      style="width: 75%;"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"> </div>
    </div>
      <section class="container justify-content-center text-center">
        <h2 class="mb-2">Please confirm if all the information is correct.</h2>
        <p class="">There are {{groupSize}} in your gift exchange group.</p>
        <div class="row justify-content-center">
          <p class="mr-1">The Administrator has elected to </p>
          <p v-if="showData">have a copy of all pairs sent to them.</p>
          <p v-else>not have the master list of pairs sent to them.</p>
        </div>
      </section>
      <section class="container mb-2 ">
        <div v-for="people in peoples" v-bind:key="people.id"
        class="card p-3 mb-1 justify-content-center">
          <h3>Person {{people.id}}</h3>
          <p>Name: {{people.name}}</p>
          <p>Their email: {{people.email}}</p>
          <p v-if="people.admin">This person is an Administrator</p>
        </div>
      </section>
      <div class="container row justify-content-center text-center">
        <router-link to="SSList" class="nav-link d-flex justify-content-center">
          <button class="btn btn-primary">Whoops lets go back and fix it.</button>
        </router-link>
        <router-link to="/SentRes" class="nav-link d-flex justify-content-center">
          <button v-on:click="sendListToServer" class="btn btn-success">
            Looks good. Send it!
          </button>
        </router-link>
      </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Confirm',
  computed: {
    ...mapState(['peoples', 'groupSize', 'showData']),
  },
  methods: {
    ...mapActions(['sendListToServer']),
  },
};
</script>
