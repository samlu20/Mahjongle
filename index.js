const express = require("express");
const cors = require("cors");

// Initialize app
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({ exampleMessage: "React client connected to the Express server!" });
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);