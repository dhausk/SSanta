<template >
  <div>
    <div class="container">
      <div class="progress mb-4">
        <div class="progress-bar"
        role="progressbar"
        style="width: 100%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"> </div>
      </div>
    </div>
    <section>
      <h2>Your gift exchange emails have been sent.</h2>
      <p>{{messageResponse}}</p>
    </section>
  </div>
</template>
<script>
export default {
  name: 'SentRes',
  computed: {
    messageResponse: {
      get() {
        return this.$store.state.resMessage;
      },
    },
  },
};
</script>
