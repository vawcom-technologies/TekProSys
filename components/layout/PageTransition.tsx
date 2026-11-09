"use client";

import { useEffect, useState } from "react";

// Skip the wipe on the very first page load so the hero paints instantly.
let firstLoad = true;

/**
 * The Diagonal: an ember panel with a true 45° edge (the logomark's cut)
 * sweeps off-screen whenever a new route mounts (via app/template.tsx).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => !firstLoad);

  useEffect(() => {
    firstLoad = false;
  }, []);

  return (
    <>
      {animate && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[70] overflow-hidden">
          <div className="page-wipe-panel bg-ember" />
          <span className="page-wipe-mark absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-ivory font-display text-3xl text-ember">
            T
          </span>
        </div>
      )}
      <div className={animate ? "page-enter" : undefined}>{children}</div>
    </>
  );
}
