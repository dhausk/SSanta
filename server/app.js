const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Merry Christmas Ya Little Jerk!"
  });
});

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
