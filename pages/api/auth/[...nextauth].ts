import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db";
import { DefaultSession } from "next-auth";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    session: async ({
      session,
    }: {
      session: DefaultSession;

    }) => {
      console.log(session);
      if (session?.user) {
        //Check if exist, if not create user
        let user = await prisma.user.findUnique({
          where: {
            email: session?.user?.name || "",
          },
        });
        if (!user) {
          user = await prisma.user.create({
            data: {
              firstName: session?.user?.name?.split(" ")[0] || "",
              lastName: session?.user?.name?.split(" ")[1] || "",
              posts: {},
              email: session?.user?.email || "",
              isAdmin: false,
            },
          });
          console.log("User Created!");
        }
        session.user = user;
      }
      console.log({session})
      return session;
    },
  },
};

export default NextAuth(authOptions);
