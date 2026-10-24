"use client";

import { useEffect, useState } from "react";

export default function TocSpy({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((t) => document.getElementById(t.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-130px 0px -65% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <ol>
      {items.map((t) => (
        <li key={t.id}>
          <a href={`#${t.id}`} className={active === t.id ? "active" : undefined}>
            {t.title}
          </a>
        </li>
      ))}
    </ol>
  );
}