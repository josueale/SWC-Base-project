import express, { Request, Response } from 'express';

import { print } from 'functions/fn';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  print('hello from another world');

  res.send('hello world');
});

app.listen(6000, () => {
  console.log('listening on port 6000');
});
