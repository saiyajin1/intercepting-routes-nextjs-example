export function MainFooter() {
  return (
    <footer className="border-t p-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <p className="text-sm">© {new Date().getFullYear()} Pokemon App</p>
      </div>
    </footer>
  );
}
