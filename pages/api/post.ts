// @ts-nocheck
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./auth/[...nextauth]";

export default async function handler (req: NextRequest, res: NextResponse): Promise<any> {
  // const session = await getServerSession(req, res, authOptions));
  if (req.method === 'POST') {
  // if(!session) return res.status(401).json({ error: 'Not Authorized'  })

    const { title, author, artType, userType, description, location } = req.body
    console.log(req.body)
    const [lat, long] = location.split(',').map(n => Number.parseFloat(n))
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        author: {
          connect: {
            id: author.id
          }
        },
        artType,
        userType,
        lat,
        long
      }
    })

    return res.status(200).json({ newPost })
  } else if (req.method === 'GET') {
    const posts = await prisma.post.findMany()
    return res.status(200).json({ posts })
  }

  //  else if (req.method == "PUT") {
  //    return res.status(200).json({ message: "ok" });
  //  }

  //  else if (req.method == "DELETE") {
  //    return res.status(200).json({ message: "ok" });
  //  }
}
