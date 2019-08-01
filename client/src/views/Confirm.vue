<template >
  <div>
    <div class="progress">
      <div class="progress-bar"
      role="progressbar"
      style="width: 75%;"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"> </div>
    </div>
      <h1>Please confirm if all the information is correct.</h1>
      <section class="container">
        <h3>There are {{groupSize}} in your Secret Santa group.</h3>
        <div class="row">
          <p>The Administrator has elected to</p>
          <p v-if="showData">not have the master list of pairs.</p>
          <p v-else >to have a copy of all pairs.</p>

        </div>
      </section>
      <section class="container">
        <div v-for="people in peoples" v-bind:key="people.id" class="card">
          <h3>{{people.name}}</h3>
          <p>{{people.email}}</p>
          <p v-if="people.admin">This person is an Administrator</p>
        </div>
      </section>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Confirm',
  computed: {
    ...mapState(['peoples', 'groupSize', 'showData']),
  },
};
</script>

<style scoped>
</style>
