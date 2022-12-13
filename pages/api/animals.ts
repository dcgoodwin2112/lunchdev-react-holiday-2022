// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const animals = [
  "wolves",
  "alligators",
  "abominable snow-persons",
  "chickens",
  "gerbils",
  "opossums",
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({ name: animals[Math.floor(Math.random() * animals.length)] });
}
