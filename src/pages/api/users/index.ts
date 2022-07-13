import { NextApiRequest, NextApiResponse } from "../../../../node_modules/next/dist/shared/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    data: [
      { id: 1, name: 'Rodrigo' },
      { id: 2, name: 'Rodolfo' },
      { id: 3, name: 'Gabriel' },
    ]
  });
};