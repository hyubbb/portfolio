const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "..", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
