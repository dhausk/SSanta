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

          <div v-for=" gr in group" v-bind:key="gr">
            <p>{{gr.name}}</p>
            <p>turds</p>
<!--           
          <label for="name">Name</label>
					<input type="text" class="form-control" :id="n" :placeholder="n">
          <label for="email1">Email address</label>
          <input type="email" class="form-control" id="email1" placeholder="Their email"> -->

          </div>

				</div>
          
				<button type="button" class="btn btn-primary" >Add another person</button>

        <button type="submit" class="btn btn-primary btn-lg btn-block">Next Step</button>
			</fieldset>
		</form>
	</div>
</template>
<script>
  import {mapState} from 'vuex';
export default {
  name: 'SSList',
  computed: {
    ...mapState(['group', 'groupSize']),
  }
};

</script>

<style scoped>
</style>
