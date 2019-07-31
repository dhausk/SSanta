<template>
  <div>
    <div class="progress">
      <div class="progress-bar"
        role="progressbar"
        style="width: 50%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100">
      </div>
    </div>
      <section>
      <form v-on:submit.prevent="" form-inline>
        <fieldset>
          <legend>Step 2: Enter your Group memembers names and emails.</legend>
          <div class="form-group container">
            <div v-for="people in peoples" v-bind:key="people.id" class="row card">
              <div class="card-body" >
                <label for="name">Person {{people.id}}'s name.</label>
                <input type="text" class="form-control" :id=people.id
                v-model="people.name" placeholder="Name">
              </div>
              <div class="card-body">
                <label for="email">Email address for person {{people.id}}</label>
                <input type="email" class="form-control" :id=people.id
                v-model="people.email" placeholder="Email address example - ' email@derp.com'">
              </div>
              <div class="form-check card-body">
                <input
                  v-model="people.admin"
                  class="form-check-input"
                  type="checkbox"
                  value="">
                <label class="form-check-label">
                  Is this person the Group Administrator?
                </label>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary"
          v-on:click="addGroupMember">Add person</button>
          <button type="button" class="btn btn-primary"
          v-on:click="deleteGroupMember">delete last person</button>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Next Step</button>
          </fieldset>
      </form>
    </section>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

import { mapMultiRowFields } from 'vuex-map-fields';

export default {
  name: 'SSList',
  computed: {
    ...mapMultiRowFields(['peoples']),
  },
  methods: {
    ...mapMutations(['addGroupMember', 'deleteGroupMember']),
  },
};

</script>
