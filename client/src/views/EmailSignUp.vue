<template>
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
      <fieldset class="p-md-4">
        <legend>
          Step one:
        </legend>
        <div class="form-group card">
          <div class="form-check card-body">
            <label class="form-check-label">
              Do you want the administrator to have
              a copy of all the gifting pairs?
            </label>
            <input
              v-model="setShowHide"
              class="form-check-input ml-2"
              type="checkbox">
          </div>
        </div>
      </fieldset>
        <router-link to="SSList" class="nav-link d-flex justify-content-center">
          <button type="submit" class="btn btn-primary btn-block">Next Step</button>
        </router-link>
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
