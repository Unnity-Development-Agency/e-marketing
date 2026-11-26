"use client";

const icons = {
  linkedin: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z" /></svg>,
  x: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.8L4.3 21H1l7.7-8.8L.8 3h6.8l4.7 6.2zm-1.2 16h1.8L6.8 4.9H4.9z" /></svg>,
  whatsapp: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.7-4.9A9 9 0 1 1 8 19.6z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" /></svg>,
  instagram: (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
),
};

const labels = {
  linkedin: "Open Unnity on LinkedIn",
  x: "Open on X",
  whatsapp: "Chat on WhatsApp",
  instagram: "Open Unnity on Instagram",
};

const urls = {
  linkedin: "https://www.linkedin.com/company/unnityglobal/posts/",
  x: "https://x.com/SayamJa92667175",
  whatsapp: "https://wa.me/919910187451",
  instagram: "https://www.instagram.com/_unnity/",
};

export default function ShareLinks({ title }) {
  return (
    <>
      {["linkedin", "x", "whatsapp", "instagram"].map((k) => (
        <a
          key={k}
          href={urls[k]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels[k]}
          title={labels[k]}
        >
          {icons[k]}
        </a>
      ))}
    </>
  );
}