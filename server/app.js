const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const valid = require("./validate");
const list = require("./createList");
const emailObj= require("./emailObj");
app.disable('x-powered-by')

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use(valid());
app.use(list());
app.use(emailObj());

app.post('/form', (req, res, next) => {
  if (req.valid) {
      req.list;
      req.emailObj;
      res.json({message: 'good job it likes the list gen'})
  } else {
    next(new Error(`nope it didn't take.`))
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
