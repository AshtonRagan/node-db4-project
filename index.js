const server = require("./server");
const port = 4000;

server.listen(port, () => {
  console.log("We in this captian", port);
});
