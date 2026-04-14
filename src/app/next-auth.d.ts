import { DefaultUser } from "next-auth";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUser {
    id: string;
    avatar?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    avatar?: string | null;
  }
}
