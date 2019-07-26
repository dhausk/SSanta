<template>
  
</template>
<script>
export default {
  computed: {
    personName: {
      get() {
        return this.$store.state.group;
      },
      set(value){
        this.$store.commit('setNewName', value);
      }  
    },
    name: 'NewName',
  }
}
</script>
<style scoped>

</style>



