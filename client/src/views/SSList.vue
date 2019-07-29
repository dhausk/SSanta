<template>
  <div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100">
      </div>
    </div>
    <form>
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
          <div v-for="(item, index) in group" 
          v-bind:key="item.id"
          v-bind:index="index"
          v-bind:item="item"
          v-bind:group="group" >
            <NewName v-bind:item="item.id" v-bind:index="index"></NewName>
            <NewEmail v-bind:item="item.id" v-bind:index="index"></NewEmail>
            <h2>Hello</h2>
          </div>
        </div>
        <button type="button" class="btn btn-primary" >Add another person</button>
        <button type="submit" class="btn btn-primary btn-lg btn-block">Next Step</button>
        </fieldset>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import NewName from '../Components/NewName.vue';

import NewEmail from '../Components/NewEmail.vue';

export default {
  name: 'SSList',
  components: {
    NewName,
    NewEmail,
  },
  computed: {
    ...mapState(['group', 'groupSize']),
    // personName: {
    //   get() {
    //     return this.$store.state.group;
    //   },
    //   set(value){
    //     this.$store.commit('setNewName', value);
    //   }
    // },
    // setEmail: {
    //   get() {
    //     return this.$store.state.creatorEmail;
    //   },
    //   set(value){
    //     this.$store.commit('setNewEmail', value);
    //   },
    // },
  },
};

</script>

<style scoped>
</style>
