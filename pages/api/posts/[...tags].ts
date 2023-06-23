// @ts-nocheck
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method == 'GET') {
    const { tags } = req.query
    console.log(tags)

    const searchedPosts = await prisma.post.findMany({
      where: {
        OR: [
          {
            tags: {
              some: {
                value: {
                  contains: tags[0],
                },
              },
            },
          },
          {
            tags: {
              some: {
                value: {
                  in: tags,
                },
              },
            },
          },
        ],
      },
    })

    return res.status(200).json({ searchedPosts })
  }
}
