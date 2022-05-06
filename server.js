const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
var path = require("path");
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(express.static(path.resolve(__dirname, "./client/build")));

// Upload Endpoint
app.post("/upload", (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No file uploaded" });
    } else {
      const file = req.files.file;
      file.mv(`${__dirname}/public/${file.name}`);

      res.json({ fileName: file.name, filePath: `/${file.name}` });
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
