import React from "react"

const BlogLoader = () => {
  return (
    <>
      <div
        className={`relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 `}
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        {/* Cover image */}
        <div className="w-full aspect-[16/9] rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

        {/* Meta row */}
        <div className="mt-4 flex items-center gap-3">
          <div className="size-9 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="h-3 w-24 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="ml-auto h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </div>

        {/* Title */}
        <div className="mt-4 h-5 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        <div className="mt-2 h-5 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

        {/* Excerpt lines */}
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="h-3 w-11/12 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="h-3 w-10/12 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </div>

        {/* CTA */}
        <div className="mt-5 h-9 w-28 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

        <span className="sr-only">Loading…</span>
      </div>
    </>
  )
}

export default BlogLoader
