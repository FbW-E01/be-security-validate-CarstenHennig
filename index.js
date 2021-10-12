import express from "express";
import { validationResult } from "express-validator";
import userValidators from "./validators/userCreateValidators.js";

const server = express();
server.use(express.json());
server.use((req, res, next) => {
  console.log(` [Req] ${req.method} ${req.path} `);
  next();
});

server.post("/users", userValidators, (req, res) => {
  console.log(req.body);

  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400);
    res.json({ errors: result.errors });
    return;
  }
  console.log(result);

  res.send(":-)");
});

server.listen(9001, () => {
  console.log("listening on http://localhost:9001");
});
