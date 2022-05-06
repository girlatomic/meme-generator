const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(
  fileUpload({
    createParentPath: true,
  })
);

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

app.listen(5000, () => console.log("Server Started..."));
