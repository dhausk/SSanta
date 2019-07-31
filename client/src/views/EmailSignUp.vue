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
    <form @submit.prevent="">
      <fieldset>
        <legend>
          Start by saying if you would like the results hidden or shown to the administraitor.
        </legend>
        <div class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              Do you want to keep your results hidden?
            </label>
            <input
              v-model="setShowHide"
              class="form-check-input"
              type="checkbox"
              value=""
              checked="">
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
export default {
  computed: {
    setShowHide: {
      get() {
        return this.$store.state.showData;
      },
      set(value) {
        this.$store.commit('setShowData', value);
      },
    },
  },
  name: 'EmailSignUp',
};
</script>

<style scoped>
</style>
