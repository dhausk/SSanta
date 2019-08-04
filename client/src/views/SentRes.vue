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
      <!-- need to have message response from server side showing all succesful emails and
      form validations
      once cleared have the state cleared and ready for the next batch. -->
    </section>
  </div>
</template>
<script>
export default {
  name: 'SentRes',
  // async mounted() {

  // },
};
</script>
