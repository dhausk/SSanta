<template>
  <div class="mb-4">
    <div class="progress mb-4">
      <div class="progress-bar"
        role="progressbar"
        style="width: 50%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100">
      </div>
    </div>
      <section>
      <form @submit.prevent="checkFormEmailsAndNames"  form-inline>
        <fieldset>
          <legend>Step 2: Enter your Group memembers names and emails. Up to 25 people</legend>
          <div class="form-group container align-middle">
            <div v-for="people in peoples" v-bind:key="people.id" class="row card mb-1 p-1">
              <div class="card-body" >
                <label for="name">Person {{people.id}}'s name.</label>
                <input type="text" class="form-control" :id=people.id
                v-model="people.name" required placeholder="Name">
              </div>
              <div class="card-body">
                <label for="email">Email address for person {{people.id}}</label>
                <input type="email" class="form-control" :id=people.id
                v-model="people.email" required placeholder="Email address ex: ' email@derp.com'">
              </div>
              <div class="form-check ml-4">
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
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary m-2"
               v-on:click="addGroupMember">Add person</button>
            <button type="button" class="btn btn-primary m-2"
              v-on:click="deleteGroupMember">delete last person</button>
          </div>
            <div v-if="adminError" class="alert alert-danger">
              <strong>Oh snap! </strong>
              Please Select at least One Administrator and try submitting again.
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Next Step</button>
        </fieldset>
      </form>
    </section>
  </div>
</template>
<script>

import { mapMutations, mapActions } from 'vuex';

import { mapMultiRowFields } from 'vuex-map-fields';

export default {
  name: 'SSList',
  computed: {
    ...mapMultiRowFields(['peoples']),
    adminError: {
      get() {
        return this.$store.state.adminError;
      },
    },
  },
  methods: {
    ...mapMutations(['addGroupMember', 'deleteGroupMember']),
    ...mapActions(['checkFormEmailsAndNames']),
  },
};
</script>
