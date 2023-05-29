// nextauth.d.ts
import { DefaultSession } from 'next-auth'
import type { User } from '@prisma/client'

interface PointwallSession extends DefaultSession {
  user?: User
}
