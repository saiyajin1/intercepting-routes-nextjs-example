import InterceptedDialogContent from "@/components/intercepted-dialog-content";
import { Dialog } from "@/components/ui/dialog";

export default async function InterceptedPageAsModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog open>
      <InterceptedDialogContent>{children}</InterceptedDialogContent>
    </Dialog>
  );
}
