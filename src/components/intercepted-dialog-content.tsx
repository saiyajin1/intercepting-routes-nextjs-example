"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { DialogPortal, DialogContent } from "./ui/dialog";

export default function InterceptedDialogContent({
  children,
}: React.PropsWithChildren<{}>) {
  const router = useRouter();

  const onDismiss = React.useCallback(() => {
    router.back();
  }, [router]);

  return (
    <DialogPortal>
      <DialogContent
        className="max-w-72"
        onEscapeKeyDown={onDismiss}
        onPointerDownOutside={onDismiss}
        onCloseButtonClick={onDismiss}
      >
        {children}
      </DialogContent>
    </DialogPortal>
  );
}
