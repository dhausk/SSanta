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
            <div class="input-group form-size custom-control custom-switch">
              <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
              v-model="setShowHide"
              checked="">
              <label class="custom-control-label" for="customSwitch1">No/Yes</label>
            </div>
          </div>
        </div>
        <div class="form-group card">
          <div class="form-check card-body">
            <label class="form-check-label">
              What is the Gift amount Limit? ex. $10
            </label>
                <div class="input-group mb-3 form-size">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input type="number"
                  min="0"
                  v-model="setGLimit"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)">
            </div>
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
    setGLimit: {
      get() {
        return this.$store.state.giftLimit;
      },
      set(value) {
        this.$store.commit('setGiftLimit', value);
      },
    },
  },
  name: 'EmailSignUp',
};

</script>

<style scoped>
.form-size {
  width: 100%;
}
@media (min-width: 768px) {
  .form-size{
    width: 50%;
  }
 }

</style>
