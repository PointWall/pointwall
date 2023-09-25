import NextAuth, { Account } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

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
    // async session ({ session, token, user }: any) {
    //   console.log({ session, token, user })
    //   // Send properties to the client, like an access_token and user id from a provider.
    //   session.accessToken = token.accessToken
    //   session.user.id = token.id

    //   return session
    // },
    // async jwt ({ token, account, profile }: { token: JWT, account: Account, profile: Profile }) {
    //   // Persist the OAuth access_token and or the user id to the token right after signin
    //   console.log('TOKEN', token)
    //   console.log('ACOUNT', account)
    //   console.log('PRIFLE', profile)
    //   if (account.id_token === undefined || account.token_type === undefined) return {}
    //   token.accessToken = account.access_token
    //   token.idToken = account.id_token
    //   const res = await fetch('https://api.pointwall.com.ar/api/user', {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `${account.token_type} ${account.id_token}`
    //     }
    //   })
    //   const user = await res.json()
    //   console.log('USER DE BD', user)
    //   return token
    // },
    async signIn ({ account, profile }: { account: Account, profile: GoogleProfile }) {
      console.log('CUENTA', account)
      console.log('PERFIL', profile)

      if (account.provider !== 'google') return false
      if (account.id_token === undefined || account.token_type === undefined) return false
      const res = await fetch('https://api.pointwall.com.ar/api/user', {
        method: 'POST',
        headers: {
          Authorization: `${account.token_type} ${account.id_token}`
        }
      })
      const user = await res.json()
      console.log('USER DE BD', user)
      return true
    }
  }
}

export default NextAuth(authOptions)
