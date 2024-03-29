import { prisma } from '@/lib/db'
import  authOptions from './auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export default async function handler(req: any, res: any) {
  /*
  const session = await getServerSession(req, res, authOptions)
  console.log({ session })
  if(!session) return res.status(401).json({ error: 'Not Authorized'  })
  */

  if (req.method == 'POST') {
    console.log("a!")
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

    const [lat, long]: number[] = location
      .split(',')
      .map((n: string) => Number.parseFloat(n))

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
        images: {
          create: images.map((image: string) => ({ url: image }))
        }, 
        artType,
        userType,
        lat,
        long,
      },
    })

    return res.status(200).json({ newPost })
  }

  if (req.method == 'GET') {
    const posts = await prisma.post.findMany({
      where: {
        accepted: false
 //     accepted: session.user.isAdmin ? undefined : true,
      },
    })
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

    console.log(req.body)

    const [lat, long]: number[] = location
      .split(',')
      .map((n: string) => Number.parseFloat(n))

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
        images: {
          create: images.map((image: string) => ({ url: image }))
        }, 
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
