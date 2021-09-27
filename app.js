const express = require("express");
const app = express();

//Static files
app.use(express.static("public"));

app.get("/api/:dateStr", (req, res) => {
  const { dateStr } = req.params;

  let date = "";
  if (!dateStr) {
    date = new Date();
  } else {
    if (!isNaN(dateStr)) {
      date = new Date(parseInt(dateStr));
    } else {
      date = new Date(dateStr);
    }
  }
  if (date.toString() === "Invalid Date") {
    res.status(500).json({ error: date.toString() });
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

//port to listen to
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
