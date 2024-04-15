import { Users, LayoutDashboard, BookOpen, Bell, Bolt } from "lucide-react";

export const routes = [
  {
    icon: (
      <LayoutDashboard
        size={24}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <LayoutDashboard
        className="fill-current text-primary-text-light dark:text-primary-text-dark"
        size={24}
      />
    ),
    label: "Проекты",
    href: "/projects",
  },
  {
    icon: (
      <Users
        size={24}
        className="text-secondary-text-light dark:text-secondary-text-dark"
      />
    ),
    activeIcon: (
      <Users
        size={24}
        className="fill-current text-primary-text-light dark:text-primary-text-dark"
      />
    ),
    label: "Контакты",
    href: "/contacts",
  },
  // {
  //   icon: (
  //     <BookOpen
  //       size={24}
  //       className="text-secondary-text-light dark:text-secondary-text-dark"
  //     />
  //   ),
  //   activeIcon: (
  //     <BookOpen
  //       size={24}
  //       className="text-primary-text-light dark:text-primary-text-dark fill-current"
  //     />
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
        className="fill-current text-primary-text-light dark:text-primary-text-dark"
      />
    ),
    label: "Настройки",
    href: "/settings",
  },
];
