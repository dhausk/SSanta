<template >
  <form>
    <fieldset>
      <legend>Start by filling out your email and name and adding </legend>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com">
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We never share your email with anyone else besides the messaging company.</small>
      </div>
      <div class="form-group">
        <label for="number of people">Number of people</label>
        <input type="number" class="form-control" id="number of people" min="3" max="300" placeholder="Number of people">
        <small id="emailHelp" class="form-text text-muted">Gotta have three or people to play SSanta.</small>
      </div>
      <fieldset class="form-group">
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" value="" checked="">
            Do you want to keep your results hidden?
          </label>
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Next Step</button>
    </fieldset>
  </form>


</template>
<script>

export default {
  name: 'SSForm'
};
</script>

<style scoped>
</style>