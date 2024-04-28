"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-2">
      <h2>Something went wrong!</h2>
      <p className="text-sm text-gray-500">
        {error.message} {error.digest}
      </p>
    </div>
  );
}
