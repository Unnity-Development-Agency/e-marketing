"use client";

const icons = {
  linkedin: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z" /></svg>,
  x: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.8L4.3 21H1l7.7-8.8L.8 3h6.8l4.7 6.2zm-1.2 16h1.8L6.8 4.9H4.9z" /></svg>,
  whatsapp: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.7-4.9A9 9 0 1 1 8 19.6z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" /></svg>,
  copy: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></svg>,
};

const labels = {
  linkedin: "Share on LinkedIn",
  x: "Share on X",
  whatsapp: "Share on WhatsApp",
  copy: "Copy link",
};

export default function ShareLinks({ title }) {
  const share = (kind) => () => {
    const u = encodeURIComponent(window.location.href);
    const t = encodeURIComponent(title);
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      x: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      whatsapp: `https://wa.me/?text=${t}%20${u}`,
    };
    window.open(urls[kind], "_blank", "noopener,width=600,height=560");
  };

  const copy = async (e) => {
    const btn = e.currentTarget;
    try {
      await navigator.clipboard.writeText(window.location.href);
      btn.dataset.copied = "1"; // CSS tooltip dikhata hai
      setTimeout(() => delete btn.dataset.copied, 1800);
    } catch {}
  };

  return (
    <>
      {["linkedin", "x", "whatsapp"].map((k) => (
        <button key={k} type="button" aria-label={labels[k]} onClick={share(k)}>
          {icons[k]}
        </button>
      ))}
      <button type="button" aria-label={labels.copy} onClick={copy}>
        {icons.copy}
      </button>
    </>
  );
}