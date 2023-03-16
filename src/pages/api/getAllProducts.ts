// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { products } from "@/assets/assetController"

type Data = {
    productId: String,
    title: String,
    desc: String,
    price: String,
    rating: String,
    imageUrl: String
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(products)
}