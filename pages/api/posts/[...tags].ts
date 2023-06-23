// @ts-nocheck
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method == 'GET') {
    const { tags } = req.query
    console.log(tags)

    const searchedPosts = await prisma.post.findMany({
      where: {
        OR: tags.map((tag) => ({
          tags: {
            some: {
              value: {
                contains: tag,
              },
            },
          },
        })),
      },
    })

    return res.status(200).json({ searchedPosts })
  }
}
