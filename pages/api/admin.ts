import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/db'
import { User } from '@prisma/client'
import { generateToken } from '@/lib/utils'

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(403).json({ error: 'Method not allowed' })
  }
  const user: User | null = await prisma.user.findUnique({ where: { id: req.body.id } })
  if (user === null) {
    return res.status(404).json({ error: 'User does no exist' })
  }
  if (!user.isAdmin) {
    return res.status(403).json({ error: 'Not authorized' })
  }
  const token = generateToken(user.email)
  return res.status(200).json({ data: { ...user, token } })
}
