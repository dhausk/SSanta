<template >
  <div>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100">
      </div>
    </div>
    <form @submit.prevent="createSSGroup">
      <fieldset>
        <legend>
          Start by saying if you would like the results hidden or shown to the administraitor.
        </legend>
        <div class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input
              v-model="setShowHide"
              class="form-check-input"
              type="checkbox"
              value=""
              checked="">
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
import { mapActions } from 'vuex';

export default {
  computed: {
    setGroup: {
      get() {
        return this.$store.state.groupSize;
      },
      set(value) {
        this.$store.commit('setGroupSize', value);
      },
    },
    setShowHide: {
      get() {
        return this.$store.state.showData;
      },
      set(value) {
        this.$store.commit('setShowData', value);
      },
    },
    ...mapActions(['createSSGroup']),
  },
  name: 'EmailSignUp',
};
</script>

<style scoped>
</style>
