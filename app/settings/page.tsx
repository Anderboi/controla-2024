import React from "react";
import { UserButton } from '@clerk/nextjs';

const SettingsPage = () => {
  return (
    <>
      Settings block
      <UserButton/>
      {/* <ModeToggle /> */}
      {/* <SignOutBlock /> */}
    </>
  );
};

export default SettingsPage;
