"use client";

import Link from "next/link";
import { routes, secondaryRoutes } from "@/lib/navRoutes";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const NavBar = () => {
  const path = usePathname();

  return (
    <nav
      className="
        z-10
        flex

        h-20
        w-full

        justify-around
        items-center
        
        pt-3
        pb-5
        bg-secondary-bg-light
        dark:bg-secondary-bg-dark

        sm:hidden

        fixed
        -bottom-1.5
      "
    >
      {routes.map((route, index) => (
        <Link
          href={route.href}
          key={index}
          className="flex size-8 place-content-center items-center"
        >
          {path === route.href ? route.activeIcon : route.icon}
        </Link>
      ))}
      <Link href={"/createproject"}>
        <Button variant={"default"} size={"sm"}>
          <Plus
            size={24}
            className="text-primary-text-dark dark:text-primary-text-light"
          />
        </Button>
      </Link>
      {secondaryRoutes.map((route, index) => (
        <Link
          href={route.href}
          key={index}
          className="flex size-8 place-content-center items-center"
        >
          {path === route.href ? route.activeIcon : route.icon}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
