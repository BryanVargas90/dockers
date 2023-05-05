import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello docker");
});

app.listen(3000, () => {
  console.log("Listening on https://localhost:3000....");
});
