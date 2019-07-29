<template>
  <div class="peepEmail">
    <h3>Dope</h3>
    <label for="email1">Email address for person {{item}}</label>
    <input type="email" class="form-control" :id=index placeholder="Their email">
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: ['item', 'index'],
  setEmail: {
      get() {
        return this.$store.state.creatorEmail;
      },
      set(value){
        this.$store.commit('setNewEmail', value);
      },
    },
    name: 'NewEmail',
}
</script>
<style scoped>
  peepEmail {
    color: rebeccapurple;
  }
</style>
