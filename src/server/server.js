const express = require("express");
const path = require("path");
const app = express();

// 'dist' 디렉토리에 있는 파일을 정적 파일로 제공
app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
