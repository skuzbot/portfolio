const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

const routes = require('./routes.js');

app.prepare()
.then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use('/api', routes);

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Listening on port: ${PORT}`)
  });
})
.catch((ex) => {
  console.log(ex.stack);
  process.exit(1);
})



