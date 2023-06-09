// @ts-nocheck
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export default async function handler (req: NextRequest, res: NextResponse): void {
  if (req.method === 'POST') {
    const { firstName, lastName, email, isAdmin } = req.body
    console.log(req.body)
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        posts: {},
        email,
        isAdmin
      }
    })
    return res.status(200).json({ newUser })
  }

  //  if (req.method == "GET") {
  //    return res.status(200).json({ message: "ok" });
  //  }

  //  if (req.method == "PUT") {
  //    return res.status(200).json({ message: "ok" });
  //  }

    if (req.method == "DELETE") {
      console.log("Delete")
      try {
        await prisma.user.delete({
          where: {
            id: req.body.id
          }
        })
      }
      catch (error) {
        return res.status(400).json({ error });
      }
      return res.status(200).json({ message: "user deleted" });
    }
}
