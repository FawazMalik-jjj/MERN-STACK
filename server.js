const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const nodeAddressesRouter = require("./api/nodeAddresses");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/nodeAddresses", nodeAddressesRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${3001}`);
});