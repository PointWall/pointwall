import NextAuth, { DefaultSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/db'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  secret: process.env.NEXT_PUBLIC_SECRET ?? 'B19823B971B2397DBY123789DB8B80B',
  callbacks: {
    session: async ({
      session
    }: {
      session: DefaultSession

    }) => {
      if ((session?.user) != null) {
        // Check if exist, if not create user
        console.log({ session })
        let user = await prisma.user.findUnique({
          where: {
            email: session?.user?.email ?? ''
          }
        })
        console.log({ user })
        if (user === null) {
          user = await prisma.user.create({
            data: {
              firstName: session?.user?.name?.split(' ')[0] ?? '',
              lastName: session?.user?.name?.split(' ')[1] ?? '',
              posts: {},
              email: session?.user?.email ?? '',
              isAdmin: false,
              image: session?.user?.image ?? ''
            }
          })
          console.log('User Created!')
        }
        session.user = user
      }
      console.log({ session })
      return session
    }
  }
}

export default NextAuth(authOptions)
