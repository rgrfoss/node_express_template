const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://domain.com/*"],
    credentials: true,
  })
);
app.use(helmet());

let user_routes = require("./routes/user");
app.use(user_routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
