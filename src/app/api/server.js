const express = require("express");
const next = require("next");

const port = 3000;
const dev = (process.env.NEXT_ENV = "production");
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    const UserRoute = require("./routes/User");

    server.use("/api/User", UserRoute);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Ready on ${port}`);
    });
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });
