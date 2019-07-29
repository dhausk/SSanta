<template>
  <div class="peepName">
    <label for="name">Person {{item}}'s name.</label>
    <input type="text" class="form-control" :id=index v-model="PersonName" placeholder="name">
  </div>
</template>

<script>
export default {
  name: 'NewName',
  props: ['item', 'index'],
  computed: {
    personName: {
      get() {
        return this.$store.state.group;
      },
      set(value) {
        this.$store.commit('setNewName', value);
      },
    },
  },
};
</script>
<style scoped>
  /* peepName{
    font-size: 1.3rem;
  } */

</style>
