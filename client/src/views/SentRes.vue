<template >
  <div>
    <div class="progress mb-4">
      <div class="progress-bar"
      role="progressbar"
      style="width: 100%;"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"> </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'SentResponse',
};
</script>
