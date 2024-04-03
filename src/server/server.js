const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "..", "dist")));
console.log(__dirname);

app.get("*", (req, res) => {
  console.log(__dirname);
  console.log(__dirname);
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
