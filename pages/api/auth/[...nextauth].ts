import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

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
    async jwt ({ token, account }: any) {
      // Persist the OAuth access_token to the token right after signin
      if (account !== undefined) {
        token.accessToken = account.access_token
        token.idToken = account.id_token
      }
      return token
    },
    async session ({ session, token, user }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.idToken = token.idToken as string
      const res = await fetch('https://api.pointwall.com.ar/api/user', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session.idToken}`
        }
      })
      if (res.status === 202) {
        session.user = await res.json()
      } else session.user = null
      return session
    }
  }
}

// @ts-expect-erro
export default NextAuth(authOptions)
