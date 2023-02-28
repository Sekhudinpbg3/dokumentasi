import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ data: "hello world" });
});

app.get("/hello/world", (req, res) => {
  res.json({ data: {
    path: req.path,
    param: req.params,
    hostname: req.hostname,
    url: req.originalUrl,
    secure: req.secure

  } });
});

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
});

export default app;
