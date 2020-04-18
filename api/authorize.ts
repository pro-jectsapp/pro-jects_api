import { NowRequest, NowResponse } from '@now/node';
import axios from 'axios';

const config = {
  client_id: '435bb3ee9ba9d983cb60',
  client_secret: process.env.CLIENT_SECRET,
};

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (!req.query.code) {
    res.status(400).json({ error: 'No auth code passed' });
  }

  axios
    .post(
      'https://github.com/login/oauth/access_token',
      {
        ...config,
        code: req.query.code,
      },
      {
        headers: { Accept: 'application/json' },
      },
    )
    .then(({ data }) => {
      res.json(data);
    });
};
