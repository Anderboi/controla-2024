"use client";

import Link from "next/link";
import { routes, secondaryRoutes } from "@/lib/navRoutes";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();

  return (
    <nav
      className="
        z-10
        flex

        h-16
        w-full

        justify-around
        
        px-6
        py-4
        bg-secondary-bg-light
        dark:bg-secondary-bg-dark

        sm:hidden

        fixed
        bottom-0
      "
    >
      {routes.concat(secondaryRoutes).map((route, index) => (
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
