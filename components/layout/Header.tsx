"use client";

import { twMerge } from "tailwind-merge";

import Image from "next/image";
import ContainerBox from './ContainerBox';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ChevronLeft } from 'lucide-react';

// import HeaderNavBlock from "./HeaderNavBlock";

interface HeaderProps {
  title: string;
  subtitle?: string;
  image?: string | null;
  className?: string;
  startDate?: string;
  addressDetails?: string;
  adjustableButton?: React.ReactNode;
}

const Header = ({
  title,
  className,
  subtitle,
  addressDetails,
  startDate,
  adjustableButton,
}: HeaderProps) => {
    const router = useRouter();

  return (
    <div
      className={twMerge(
        `
        bg-secondary-bg-light
        dark:bg-secondary-bg-dark
        rounded-b-lg
        sm:rounded-lg
        p-4
        pt-12
        md:pt-4
        flex
        flex-col
        gap-6
        justify-between
        h-fit
        w-full
        items-center
        `,
        className
      )}
    >
      <div
        className="
          flex
          w-full
          justify-between
          "
      >
        {/*//? left button block */}
        <Button
        
          size={"smallIcon"}
          variant={"ghost"}
          onClick={() => router.back()}
        >
          <ChevronLeft fontSize={24} />
        </Button>
        {/* <HeaderNavBlock /> */}
        {/*//? right button block */}
        {/* {adjustableButton} */}
      </div>
      <section
        className="
        //max-sm:hidden
        flex
        w-full
        flex-col
        "
      >
        <span
          className="
          text-left
          text-xs
          text-secondary-text-light
          dark:text-secondary-text-dark
          md:text-base
          "
        >
          {subtitle}
        </span>
        <span
          className="
            text-balance
            text-left
            text-2xl
            font-bold
            tracking-tighter
            text-primary-text-light
            dark:text-primary-text-dark
            sm:text-[5vw]/[5vw]
            md:line-clamp-2
            "
        >
          {title}
        </span>
        <span
          className="
            text-left
            text-sm
            text-primary-text-light
            dark:text-primary-text-dark
        "
        >
          {addressDetails}
        </span>
        <span
          className="
            text-left
            text-xs
            font-bold
            text-primary-text-light
            dark:text-primary-text-dark
          "
        >
          {startDate && Date.parse(startDate)}
        </span>
      </section>
    </div>
  );
};

export default Header;
