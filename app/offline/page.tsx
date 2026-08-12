export default function OfflinePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
        <svg
          className="h-10 w-10 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636a9 9 0 010 12.728M5.636 5.636a9 9 0 000 12.728M12 2v4m0 12v4"
          />
        </svg>
      </div>
      <h1 className="text-xl font-bold text-neutral-900">You&apos;re offline</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Please check your internet connection and try again.
      </p>
      <a
        href="/"
        className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white"
      >
        Retry
      </a>
    </div>
  );
}
