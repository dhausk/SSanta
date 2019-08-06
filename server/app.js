const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const valid = require('./validation')
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (res) => {
  res.json({
    message: "welcome to the SSanta Gift exchange back end. please go to SSanta.com."
  });
});

function validForm(state) {
  const hasVehId = typeof state.peoples == 'number';
  return hasVehId;
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
