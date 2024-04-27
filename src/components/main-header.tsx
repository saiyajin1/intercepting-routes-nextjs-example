import { ModeToggle } from "@/components/mode-toggle";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-20 border-b p-2 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <h1 className="text-lg font-bold transition-all lg:text-2xl">
          Pokemon App
        </h1>
        <ModeToggle />
      </div>
    </header>
  );
}
