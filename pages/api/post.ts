// @ts-nocheck
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
//import { getServerSession } from "next-auth/next";
//import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: NextRequest, res: NextResponse) {
  //const session = await getServerSession(req, res, authOptions));
  if (req.method == 'POST') {
    //if(!session) return res.status(401).json({ error: 'Not Authorized'  })
    const {
      title,
      description,
      artType,
      userType,
      images,
      location,
      getInContact,
      author,
      tags,
    } = req.body

    console.log(req.body)

    const [lat, long]: Number[] = location
      .split(',')
      .map((n) => Number.parseFloat(n))

    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        author: {
          connect: {
            id: author.id,
          },
        },
        tags: {
          connectOrCreate: tags.split(', ').map((tag: string) => {
            return {
              where: { value: tag },
              create: { value: tag },
            }
          }),
        },
        /*         images: {
          create: images.map((image) => ({ url: formatImage(image) }))
        }, */
        artType,
        userType,
        lat,
        long,
      },
    })

    return res.status(200).json({ newPost })
  }

  if (req.method == 'GET') {
    const posts = await prisma.post.findMany()
    return res.status(200).json({ posts })
  }

  if (req.method == 'PUT') {
    const {
      title,
      description,
      artType,
      userType,
      images,
      location,
      getInContact,
      author,
      tags,
    } = req.body

    const [lat, long]: Number[] = location
      .split(',')
      .map((n) => Number.parseFloat(n))

    const updatedPost = await prisma.post.create({
      data: {
        title,
        description,
        author: {
          connect: {
            id: author.id,
          },
        },
        tags: {
          connectOrCreate: tags.split(', ').map((tag: string) => {
            return {
              where: { value: tag },
              create: { value: tag },
            }
          }),
        },
        /*         images: {
          create: images.map((image) => ({ url: formatImage(image) }))
        }, */
        artType,
        userType,
        lat,
        long,
      },
    })

    return res.status(200).json({ updatedPost })
  }

  if (req.method == 'DELETE') {
    const { id } = req.body
    await prisma.post.delete({
      where: {
        id: id,
      },
    })
    return res.status(200).json({ message: 'ok' })
  }
}
