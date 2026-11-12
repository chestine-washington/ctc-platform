"use client";

import { useState } from "react";

export function InsuranceLogo({
  logo,
  name,
  abbr,
  color,
}: {
  logo: string | null;
  name: string;
  abbr: string;
  color: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <div
        className="flex h-full w-full items-center justify-center rounded-full"
        style={{ backgroundColor: color }}
      >
        <span className="text-[10px] font-bold tracking-wide text-white">{abbr}</span>
      </div>
    );
  }

  return (
    // Small bundled PNGs with a coloured-initials fallback on error; next/image adds nothing here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/insurance/${logo}.png`}
      alt={name}
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-contain p-1"
      onError={() => setFailed(true)}
    />
  );
}
