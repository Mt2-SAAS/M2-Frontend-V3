const port = process.env.PORT || 4200;
const fs = require('fs'),
  https = require('http');

const server = require('./dist/metin2/server/main');

// const options = {
//   key: fs.readFileSync('./ssl/ssl.key'),
//   cert: fs.readFileSync('./ssl/ssl.crt')
// };

const app = server.app();
https.createServer(app)
  .listen(port, () => {
    console.log("Express server listening on port " + port);
  });
