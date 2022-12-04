import express from "express";
import { convert } from "./convert.js"
const app = express();
const port = 3000;

app.use(express.json());

app.use("/", express.static("./dist"));

app.post("/query", (request, response) => {
  if (request.body?.s) {
    convert(request.body.s).then((res) => {
      response.send(res);
    }).catch((res) => {
      response.send("Server error");
    });
  } else {
    response.send("Invalid request");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});