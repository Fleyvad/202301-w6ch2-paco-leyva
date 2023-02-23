import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
// Import bunyan from 'bunyan';
import debug from 'debug';

/*
Const log = bunyan.createLogger({ name: 'DemoApp' });
log.level((process.env.BUNYAN_LEVEL as Loglevel) ?? 'info');
*/
const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});
app.use(express.json());

app.listen(port, () => {
  debug(`Server started in port ${port}`);
});
