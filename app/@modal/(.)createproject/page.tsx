"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import CreateProjectForm from "@/components/create-project-form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const CreateProjectPage = () => {
  const route = useRouter();

  const onDismiss = () => {
    const isConfirmed = confirm(
      `Вы уверены что хотите закрыть окно? Все данные будут потеряны.`
    );
    if (isConfirmed) {
      route.back();
    }
  };

  return (
    <div className="px-2">
      <Dialog
        defaultOpen
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            return onDismiss();
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px] //h-2/3">
          <CreateProjectForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProjectPage;
