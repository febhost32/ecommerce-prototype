// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { user } from "@/assets/assetController"


interface userPropTypes {
    userId: String,
    name: String,
    email: String,
    password: String
}

function authenticate(requestBody : String, user: any) {
    let valid = false

    const request = JSON.parse(requestBody.toString())

    const findUser = user.filter((user: userPropTypes) => user.email === request.email)

    if (findUser.length > 0) {
      if (findUser[0].password == request.password) {
        valid = true
      } 
    } 

    return valid
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const isUserValid = authenticate(req.body, user)

  if (req.method == "POST") {
    if (isUserValid) {
        res.status(200).json({ "success": true })
     } else {
        res.status(401).json({ "success": false })
     }
  }
}