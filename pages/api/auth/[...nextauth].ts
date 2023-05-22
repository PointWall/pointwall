import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
      
    })
    // ...add more providers here
  ],
  callbacks: {
    session: async ({ session, token, user }: { session:any, token:any, user:any }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
}

export default NextAuth(authOptions)
