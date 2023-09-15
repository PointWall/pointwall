import NextAuth, { DefaultSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/db'
// import { redirect } from 'next/navigation'

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
    session: async ({ session }: { session: DefaultSession }) => {
      console.log('Session at begining', session)
      if (session?.user !== null) {
        const user = await prisma.user.findUnique({
          where: {
            email: session?.user?.email ?? ''
          }
        })
        if (user === null) {
          // @ts-expect-error
          session.user.registered = false // temporary, to handle redirection with LoginButton
          console.log('----- USER SHOULD BE REDIRECTED -----')
          return session
          // redirect('/registro')
        }
        // @ts-expect-error
        session.user.registered = true // temporary, to handle redirection with LoginButton
        console.log(`${session.user?.name ?? 'User'} is already registered`)
      }
      return session
    }
  }
}

export default NextAuth(authOptions)
