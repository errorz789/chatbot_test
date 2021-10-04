import { Request, Response } from 'express';

export const echo = (req: Request, res: Response): void => {
  res.status(200).json({ message: req.body.message }).end();
};
