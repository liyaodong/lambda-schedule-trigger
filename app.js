const http = require("http");
const { PORT = 3000 } = process.env;

http
  .createServer((req, res) => {
    res.end(`This function triggered on time ${Date.now()}`);
  })
  .listen(PORT);
