const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(valid(req))

app.get("/", (res) => {
  res.json({
    message: "welcome to the SSanta Gift exchange back end. please go to SSanta.com."
  });
});

function validForm(state){
  const size = propGroupSize(state.peoples.length);
  const showData = propShowData(state.showData);
  const groupAdmin = propGroupAdmin(state.peoples);
  return size && showData && groupAdmin;
}
function propGroupSize(size){
  const bigEnough = size >= 3;
  return bigEnough;
}
function propShowData(show){
  return typeof show == 'Boolean';
}
function propGroupAdmin(peoples){
  let admin = 0;
  for (let i = 0; i < peoples.length; i++) {
    if (peoples[i].admin === true) {
      admin += 1;
    };
  }
  return (admin >= 1) ? true : false;
}

app.post('/', (req, res, next) => {
  if (validForm(req.body)) {
      res.json({message: 'good job, its valid.'})
  } else {
    next(new Error('form not valid. please double check your form.'))
  }
})

app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
