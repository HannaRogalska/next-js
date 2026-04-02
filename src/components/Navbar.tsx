"use client"

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import Link from "next/link";
import { useSession } from "next-auth/react";

const AppNavbar = () => {

  const { data: session } = useSession();
  console.log(session);

  return (
    <Navbar className="mt-2">
      <NavbarBrand>
        <Link href="/">TaskFlow</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/tasks" className="hover:text-blue-500">
            Tasks
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/profile" className="hover:text-blue-500">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/register">Register</Link>
        </NavbarItem>
        {session ?(
          <NavbarItem className="hidden lg:flex">
            <Link href="/auth/signin">Login</Link>
          </NavbarItem>
        ): (
            <NavbarItem className="hidden lg:flex">
            <Link href="#">Logout</Link>
          </NavbarItem>
        )  }
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
