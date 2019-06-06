<template >
  <div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100">
    	</div>
  	</div>
    <form @submit.prevent="createSSGroup">
      <fieldset>
        <legend>Start by filling out your email and name </legend>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
          </div>
        </div>
        <div class="form-group">
          <label for="creatorName">Your Name</label>
          <input type="text" v-model="setName" class="form-control" id="creatorName" placeholder="Your Name Here" required>
          
          <label for="exampleInputEmail1"> Your Email address</label>
          <input type="email" v-model="setEmail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
          <small id="emailHelp" class="form-text text-muted">We never share your email with anyone outside your group.</small>
      
          <label for="number of people">Number of people in your group, including yourself</label>
          <input type="number" v-model="setGroup" class="form-control" id="number of people" min="3" max="300" placeholder="Number of people" aria-describedby="numberHelp" required>
          <small id="numberHelp" class="form-text text-muted">You need to have three or more people to play SSanta.</small>
          
          <div class="form-check">
            <label class="form-check-label">
              <input v-model="setShowHide" class="form-check-input" type="checkbox" value="" checked="">
              Do you want to keep your results hidden?
            </label>
          </div>
        </div>
        
        
        <router-link to="SSList" class="nav-link">
          <button type="submit" class="btn btn-primary">Next Step</button>
        </router-link>

      </fieldset>
    </form>
  </div>


</template>
<script>
import {mapMutations, mapActions} from 'vuex';
export default {
  computed:{
    setName: {
      get() {
        return this.$store.state.creatorName;
      },
      set(value){
        this.$store.commit('setNewName', value);
      }
    },
    setEmail: {
      get() {
        return this.$store.state.creatorEmail;
      },
      set(value){
        this.$store.commit('setNewEmail', value);
      }
    },
    setGroup: {
      get() {
        return this.$store.state.groupSize;
      },
      set(value){
        this.$store.commit('setGroupSize', value);
      }
    },
    setShowHide: {
      get() {
        return this.$store.state.showData;
      },
      set(value){
        this.$store.commit('setShowData', value);
      }
    },
    ...mapActions(['createSSGroup'])
  },

  name: 'EmailSignUp',
}
</script>

<style scoped>
</style>
