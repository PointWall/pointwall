import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
//import { getServerSession } from "next-auth/next";
//import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: NextRequest, res: NextResponse) {
  //const session = await getServerSession(req, res, authOptions));
  if (req.method == "POST") {
  //if(!session) return res.status(401).json({ error: 'Not Authorized'  })

    const { title, images, authorId, location, artType, userType }: { title:any, images:any, authorId:any, location:any, artType:any, userType:any } = req.body;
    console.log(req.body);
    const newPost = await prisma.post.create({
      data: {
        title,
        images: images,
        author: {
          connect: {
            id: authorId,
          },
        },
        artType,
        userType,
        location
      },
    });

    return res.status(200).json({ newPost });
  }

  if (req.method == "GET") {
    const posts = await prisma.post.findMany()
    return res.status(200).json({ posts });
  }

//  if (req.method == "PUT") {
//    return res.status(200).json({ message: "ok" });
//  }

//  if (req.method == "DELETE") {
//    return res.status(200).json({ message: "ok" });
//  }
}
