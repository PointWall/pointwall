// @ts-nocheck
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./auth/[...nextauth]";

export default async function handler (req: NextRequest, res: NextResponse): Promise<void> {
  // const session = await getServerSession(req, res, authOptions));
  if (req.method === 'POST') {
    // if(!session) return res.status(401).json({ error: 'Not Authorized'  })

    const { title, author, location, artType, userType } = req.body as {
      title: string
      images: string
      author: { id: number, email: string }
      location: string
      artType: string
      userType: string
    }
    console.log(req.body)
    const newPost = await prisma.post.create({
      data: {
        title,
        author: {
          connect: {
            id: author.id
          }
        },
        artType,
        userType,
        location
      }
    })

    return res.status(200).json({ newPost })
  }

  if (req.method === 'GET') {
    const posts = await prisma.post.findMany()
    return res.status(200).json({ posts })
  }

  //  if (req.method == "PUT") {
  //    return res.status(200).json({ message: "ok" });
  //  }

  //  if (req.method == "DELETE") {
  //    return res.status(200).json({ message: "ok" });
  //  }
}
