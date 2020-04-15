import { NowRequest, NowResponse } from '@now/node';

export default (req: NowRequest, res: NowResponse) => {
  return res.json('dupa');
};
