import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { hello } from './functions/hello';
import { echo } from './functions/echo';

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const stage = express.Router();
const v1 = express.Router();
app.use('/stage', stage);
app.use('/v1', v1);

stage.get('/hello', hello);
stage.post('/echo', echo);

v1.get('/hello', hello);
v1.post('/echo', echo);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('🚀 Server ready on port', port);
});
