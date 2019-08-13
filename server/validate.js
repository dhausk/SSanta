module.exports = function (options) {
  return function (req, res, next) {
  // return req.valid = to true or false \
    req.valid = validForm(req);   
    next()
  }
  function validForm(state) {
    // check each part of the form to make sure it is correct. 
    const size = propGroupSize(state.peoples.length);
    const showData = propShowData(state.showData);
    const groupAdmin = propGroupAdmin(state.peoples);
    return size && showData && groupAdmin;
  }
  function propGroupSize(size) {
    const bigEnough = size >= 3;
    return bigEnough;
  }
  function propShowData(show) {
    return typeof show == 'Boolean';
  }
  function propGroupAdmin(peoples) {
    let admin = 0;
    for (let i = 0; i < peoples.length; i++) {
      if (peoples[i].admin === true) {
        admin += 1;
      };
    }
    return (admin >= 1 && admin <=10) ? true : false;
  } 
}