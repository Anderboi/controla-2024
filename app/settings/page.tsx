import React from "react";
import { UserButton, SignedIn, SignedOut, SignInButton, UserProfile } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';

const SettingsPage = () => {
  return (
    <>
      Settings block
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Войти</Button>
        </SignInButton>
      </SignedOut>
      <div className='max-sm:hidden'>
      <UserProfile/>

      </div>
      {/* <ModeToggle /> */}
      {/* <SignOutBlock /> */}
    </>
  );
};

export default SettingsPage;
