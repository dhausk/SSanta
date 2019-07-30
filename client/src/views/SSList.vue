<template>
  <div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0"
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
          <div v-for="(item, index) in group" 
          v-bind:key="item.id"
          v-bind:index="index"
          v-bind:item="item"
          v-bind:group="group">
            <label for="name">Person {{item.id}}'s name.</label>
            <input type="text" class="form-control" :id=index  placeholder="Name"> 
            <label for="email1">Email address for person {{item.id}}</label>
            <input type="email" class="form-control" :id=index placeholder="Email address">
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



export default {
  name: 'SSList',
  computed: {
    ...mapState(['group']),
  }
};

</script>

<style scoped>
</style>
