import React, { MouseEventHandler, forwardRef } from "react";

interface Props {
  children?: React.ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
}

export type Ref = HTMLDialogElement;

export default forwardRef<Ref, Props>(function Modal(
  { children, onClose },
  ref
) {
  return (
    <dialog
      ref={ref}
      className="
      bg-secondary-bg-light 
      dark:bg-secondary-bg-dark 
      rounded-lg 
      shadow 
      w-1/4
      h-1/4"
    >
      {children}
    </dialog>
  );
});
