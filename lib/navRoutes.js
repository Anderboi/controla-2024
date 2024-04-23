import { Button } from "@/components/ui/button";
import { Users, LayoutDashboard, BookOpen, Bell, Bolt } from "lucide-react";

export const routes = [
  {
    icon: (
      <Button variant={"ghost"} size={"icon"}>
        <LayoutDashboard
          size={24}
          className="text-secondary-text-light dark:text-secondary-text-dark"
        />
      </Button>
    ),
    activeIcon: (
      <Button variant={"ghost"} size={"icon"}>
        <LayoutDashboard
          className="fill-current text-primary-text-light dark:text-primary-text-dark"
          size={24}
          fill="currentColor"
        />
      </Button>
    ),
    label: "Главная",
    href: "/",
  },
  {
    icon: (
      <Button variant={"ghost"} size={"icon"}>
        <Users
          size={24}
          className="text-secondary-text-light dark:text-secondary-text-dark"
        />
      </Button>
    ),
    activeIcon: (
      <Button variant={"ghost"} size={"icon"}>
        <Users
          size={24}
          fill="currentColor"
          className="fill-current text-primary-text-light dark:text-primary-text-dark"
        />
      </Button>
    ),
    label: "Контакты",
    href: "/contacts",
  },
  // {
  //   icon: (<Button variant={"ghost"} size={"icon"}>
  //     <BookOpen
  //       size={24}
  //       className="text-secondary-text-light dark:text-secondary-text-dark"
  //     /></Button>
  //   ),
  //   activeIcon: (<Button variant={"ghost"} size={"icon"}>
  //     <BookOpen
  //       size={24}
  //       className="text-primary-text-light dark:text-primary-text-dark fill-current"
  //     /></Button>
  //   ),
  //   label: "База данных",
  //   href: "/database",
  // },
];

export const secondaryRoutes = [
  {
    icon: (
      <Bell
        size={24}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <Bell
        size={24}
        fill="currentColor"
        className="fill-current text-primary-text-light dark:text-primary-text-dark"
      />
    ),
    label: "Уведомления",
    href: "/notifications",
  },
  {
    icon: (
      <Bolt
        size={24}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <Bolt
        size={24}
        fill="currentColor"
        className="fill-current text-primary-text-light dark:text-primary-text-dark"
      />
    ),
    label: "Настройки",
    href: "/settings",
  },
];
