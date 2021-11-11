const http = require("http");
const { PORT = 3000 } = process.env;
const moment = require("moment");

http
  .createServer((req, res) => {
    const result = `This function triggered on time ${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}`;

    console.log(result);
    res.end(result);
  })
  .listen(PORT);
