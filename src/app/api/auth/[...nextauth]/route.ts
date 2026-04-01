import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import clientPromise from "@/app/lib/mongodb";
import { compare } from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const client = await clientPromise;
        const db = client.db("task-flow");
        const user = await db
          .collection("users")
          .findOne({ email: credentials?.email});
        if (!user) return null;
        const isValid = await compare(credentials?.password, user.password);
        if (!isValid) return null;
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };