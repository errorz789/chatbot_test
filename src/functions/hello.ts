import { Request, Response } from 'express';

export const hello = (req: Request, res: Response): void => {
  res.send('world!');
};
