import express, { Request, Response } from 'express';

import { print } from 'functions/fn';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  print('hello from another world');

  res.send('hello world');
});

const PORT = 6000;

app.listen(PORT, () => {
  console.log(`SR - Servidor corriendo en el puerto ${PORT} ! 👌`);
});
