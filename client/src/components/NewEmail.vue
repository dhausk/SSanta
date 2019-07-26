<template>
  
</template>
<script>
import { mapActions } from 'vuex';
export default {
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
<style>

</style>
