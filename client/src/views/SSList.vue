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
    <form >
      <fieldset>
        <legend>Legend</legend>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly="" class="form-control-plaintext" id="staticEmail"
            value="email@example.com">
          </div>
        </div>
        <div class="form-group">
          <div v-for="people in peoples"
          v-bind:key="people.id"
          v-bind:item="people"
          v-bind:group="people">
            <label for="name">Person {{people.id}}'s name.</label>
            <input type="text" class="form-control" :id=people.id v-model="people.name"
            placeholder="Name">
            <label for="email">Email address for person {{people.id}}</label>
            <input type="email" class="form-control" :id=people.id v-model="people.email"
            placeholder="Email address">
          </div>
        </div>
        <button type="button"
        class="btn btn-primary"
        v-on:click="addGroupMember">
        Add another person
        </button>
        <button type="button"
        class="btn btn-primary"
        v-on:click="deleteGroupMember">
        delete last person from the list
        </button>
        <button type="submit" class="btn btn-primary btn-lg btn-block">Next Step</button>
        </fieldset>
    </form>
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
