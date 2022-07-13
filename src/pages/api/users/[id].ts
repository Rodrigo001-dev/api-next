import { NextApiRequest, NextApiResponse } from "../../../../node_modules/next/dist/shared/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ ok: true });
};