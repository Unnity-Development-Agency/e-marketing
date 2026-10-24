import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";
import posts from "@/data/blogPosts.json";
import TocSpy from "./TocSpy";
import ShareLinks from "./ShareLinks";
import "./article.css";

/* ---------- data helpers ---------- */
const getPost = (slug) => posts.find((p) => p.slug === slug);

/** Same category pehle, phir baaki. Sirf wahi jo JSON mein exist karte hain, to koi 404 nahi. */
const getRelated = (post, n = 3) => {
  const others = posts.filter((p) => p.slug !== post.slug);
  return [
    ...others.filter((p) => p.catKey === post.catKey),
    ...others.filter((p) => p.catKey !== post.catKey),
  ].slice(0, n);
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Unnity Blog`, description: post.dek };
}

/* ---------- helpers ---------- */
const pad = (n) => String(n).padStart(2, "0");
const rich = (t) => t.split("**").map((s, i) => (i % 2 ? <strong key={i}>{s}</strong> : s));

const Arrow = ({ size = 16 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------- cover art (dark background ke liye) ---------- */
function Cover({ name }) {
  switch (name) {
    case "seo":
      return (
        <svg className="sm" viewBox="0 0 240 160" fill="none" aria-hidden="true">
          <circle cx="110" cy="70" r="44" stroke="#fff" strokeWidth="10" />
          <path d="M142 102 L182 142" stroke="#9DB8E8" strokeWidth="14" strokeLinecap="round" />
          <text x="110" y="82" textAnchor="middle" fontWeight="700" fontSize="30" fill="#fff" style={{ fontFamily: "var(--display)" }}>SEO</text>
          <circle className="pulse" cx="206" cy="24" r="6" fill="#9DB8E8" />
        </svg>
      );
    case "meta":
      return (
        <svg className="sm" viewBox="0 0 240 140" fill="none" aria-hidden="true">
          <rect x="16" y="30" width="80" height="80" rx="22" fill="#fff" />
          <path d="M34 80 C34 52 52 52 58 66 C64 80 70 86 80 86 C88 86 88 58 76 54" stroke="#1E3A6E" strokeWidth="7" strokeLinecap="round" />
          <text x="120" y="76" textAnchor="middle" fontWeight="600" fontSize="20" fill="#9DB8E8" style={{ fontFamily: "var(--text)" }}>vs</text>
          <rect x="144" y="30" width="80" height="80" rx="22" fill="#fff" />
          <path d="M200 70 H182 M200 70 A19 19 0 1 1 194 54" stroke="#B4541A" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );
    case "perf":
      return (
        <svg className="sm" viewBox="0 0 240 150" fill="none" aria-hidden="true">
          <path d="M10 130 H230" stroke="rgba(255,255,255,.18)" strokeWidth="2" />
          <path d="M16 112 L60 90 L96 100 L140 58 L176 66 L216 22" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M196 20 L218 20 L218 42" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path className="march" d="M16 112 L60 90 L96 100 L140 58 L176 66 L216 22" stroke="#9DB8E8" strokeWidth="3" strokeLinecap="round" transform="translate(0 14)" />
        </svg>
      );
    case "browser":
      return (
        <svg className="sm" viewBox="0 0 240 160" fill="none" aria-hidden="true">
          <rect x="20" y="16" width="200" height="128" rx="14" stroke="#E8A26B" strokeWidth="6" />
          <path d="M20 44 H220" stroke="#E8A26B" strokeWidth="6" />
          <circle cx="38" cy="30" r="4" fill="#E8A26B" />
          <circle cx="52" cy="30" r="4" fill="#E8A26B" />
          <rect x="40" y="62" width="88" height="12" rx="6" fill="#fff" />
          <rect x="40" y="84" width="64" height="8" rx="4" fill="#9DB8E8" />
          <rect className="pulse" x="40" y="104" width="52" height="18" rx="9" fill="#E8A26B" />
          <rect x="146" y="62" width="56" height="60" rx="8" fill="rgba(255,255,255,.12)" />
        </svg>
      );
    default: // chart
      return (
        <svg viewBox="0 0 560 240" fill="none" aria-hidden="true">
          <path d="M20 220 H540" stroke="rgba(255,255,255,.15)" strokeWidth="2" />
          <rect className="bar" x="50" y="170" width="56" height="50" rx="10" fill="#22365C" />
          <rect className="bar" x="150" y="140" width="56" height="80" rx="10" fill="#33508A" />
          <rect className="bar" x="250" y="110" width="56" height="110" rx="10" fill="#4A6AA8" />
          <rect className="bar" x="350" y="70" width="56" height="150" rx="10" fill="#6F92D0" />
          <rect className="bar" x="450" y="28" width="56" height="192" rx="10" fill="#9DB8E8" />
          <path className="march" d="M78 150 L178 122 L278 92 L378 52 L478 12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <circle className="pulse" cx="478" cy="12" r="8" fill="#fff" />
        </svg>
      );
  }
}

const tipIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
  </svg>
);
const warnIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
  </svg>
);

/* ---------- content blocks ---------- */
function Block({ b }) {
  switch (b.t) {
    case "p":
      return <p>{rich(b.text)}</p>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "ul":
      return <ul>{b.items.map((x, i) => <li key={i}>{rich(x)}</li>)}</ul>;
    case "ol":
      return <ol>{b.items.map((x, i) => <li key={i}>{rich(x)}</li>)}</ol>;
    case "quote":
      return (
        <div className="quote reveal">
          {b.text}
          <cite>— {b.by || "Unnity Growth Team"}</cite>
        </div>
      );
    case "callout":
      return (
        <div className={`callout reveal${b.kind === "warn" ? " warn" : ""}`}>
          <span className="ic" aria-hidden="true">{b.kind === "warn" ? warnIcon : tipIcon}</span>
          <div><b>{b.title}</b>{b.text}</div>
        </div>
      );
    case "table":
      return (
        <div className="table-wrap reveal">
          <table>
            <thead><tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => {
                    const m = /^(ok|no):(.*)$/.exec(c);
                    return <td key={j}>{m ? <span className={`chip-s ${m[1]}`}>{m[2]}</span> : c}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "checklist":
      return (
        <div className="checklist ck reveal">
          {b.items.map((x, i) => (
            <label key={i}><input type="checkbox" /><span>{x}</span></label>
          ))}
          <div className="check-meta">
            <span className="ck-count" data-total={b.items.length} />
            <span className="ck-bar" aria-hidden="true">{b.items.map((_, i) => <i key={i} />)}</span>
          </div>
        </div>
      );
    case "cta":
      return (
        <aside className="cta-box reveal">
          <div><h3>{b.title}</h3><p>{b.text}</p></div>
          <Link href="/contact" className="btn-light">{b.label}<Arrow /></Link>
        </aside>
      );
    default:
      return null;
  }
}

/* ======================== PAGE ======================== */
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelated(post);
  const toc = [
    ...post.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: "takeaways", title: "Key takeaways" },
    { id: "faq", title: "FAQs" },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..700&family=DM+Sans:wght@400;500;600&display=swap"
      />

      <Header />

      <main className="ua" id="top">
        <div className="progress" aria-hidden="true"><i /></div>

        {/* ---------- ARTICLE HEADER ---------- */}
        <header className="a-head">
          <div className="a-head-wrap">
            <div className="a-head-in">
              <nav className="crumb hero-in" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span aria-hidden="true">/</span>
                <Link href="/blog">Blog</Link><span aria-hidden="true">/</span>
                <span aria-current="page">{post.cat}</span>
              </nav>
              <span className={`cat-pill hero-in${post.amber ? " amber" : ""}`} style={{ "--d": ".05s" }}>{post.cat}</span>
              <h1 className="hero-in" style={{ "--d": ".1s" }}>{post.title}</h1>
              <p className="dek hero-in" style={{ "--d": ".16s" }}>{post.dek}</p>
              <div className="byline hero-in" style={{ "--d": ".22s" }}>
                <span className="author"><span className="avatar" aria-hidden="true">U</span>Unnity Growth Team</span>
                <span className="dotsep" aria-hidden="true" />
                <span className="m"><time dateTime={post.iso}>{post.date}</time></span>
                <span className="dotsep" aria-hidden="true" />
                <span className="m">{post.minutes} min read</span>
              </div>
            </div>

            <figure className="cover hero-in" style={{ "--d": ".3s" }} aria-label={post.title}>
              <div className="orb" aria-hidden="true" />
              <Cover name={post.cover} />
            </figure>
          </div>
        </header>

        {/* ---------- BODY ---------- */}
        <div className="a-main">
          <div className="a-grid">
            {/* TOC (active link: TocSpy) */}
            <aside className="toc" aria-label="Table of contents">
              <div className="toc-label">On this page</div>
              <TocSpy items={toc} />
              <div className="toc-time"><b>{post.minutes} min</b> read</div>
            </aside>

            <article id="article">
              <details className="toc-mobile">
                <summary>
                  On this page
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                </summary>
                <ol>
                  {toc.map((t) => (
                    <li key={t.id}><a href={`#${t.id}`}>{t.title}</a></li>
                  ))}
                </ol>
              </details>

              <div className="art-prose">
                <p className="lead">{post.lead}</p>

                {post.sections.map((s, i) => (
                  <section key={s.id} className="sec">
                    <h2 id={s.id}><span className="n">{pad(i + 1)}</span>{s.title}</h2>
                    {s.blocks.map((b, k) => <Block key={k} b={b} />)}
                  </section>
                ))}

                <section className="takeaways reveal" aria-labelledby="takeaways">
                  <h2 id="takeaways">Key takeaways</h2>
                  <ul>{post.takeaways.map((x, i) => <li key={i}>{x}</li>)}</ul>
                </section>

                <h2 id="faq"><span className="n">?</span>Frequently asked questions</h2>
                <div className="faq">
                  {post.faqs.map((f) => (
                    <details key={f.q} name="faq">
                      <summary>
                        {f.q}
                        <span className="plus" aria-hidden="true">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                        </span>
                      </summary>
                      <div className="ans">{f.a}</div>
                    </details>
                  ))}
                </div>
              </div>

              {/* ---------- END OF ARTICLE ---------- */}
              <div className="a-foot">
                <div className="tags-row">
                  <div className="tags" aria-label="Tags">
                    {post.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="share-row">
                    <span>Share</span>
                    <ShareLinks title={post.title} />
                  </div>
                </div>

                {/* Helpful vote: CSS-only (radio + :has) */}
                <div className="helpful">
                  <p className="h-q">Was this article helpful?</p>
                  <p className="h-yes">Thanks for the feedback!</p>
                  <p className="h-no">Thanks — we’ll work on making it better.</p>
                  <div className="btns">
                    <label><input type="radio" name="helpful" value="yes" /><span>Yes</span></label>
                    <label><input type="radio" name="helpful" value="no" /><span>No</span></label>
                  </div>
                </div>

                <div className="bio">
                  <span className="avatar" aria-hidden="true">U</span>
                  <div>
                    <h3>Unnity Growth Team</h3>
                    <div className="role">Performance marketing · Web development · Shopify</div>
                    <p>We plan, build and optimise websites and paid campaigns for growing brands, and share what we learn here.</p>
                    <Link href="/about">More about Unnity <Arrow size={14} /></Link>
                  </div>
                </div>
              </div>
            </article>

            {/* <aside className="share" aria-label="Share this article">
              <span className="share-label">Share</span>
              <ShareLinks title={post.title} />
            </aside> */}
          </div>
        </div>

        {/* ---------- RELATED ---------- */}
        <section className="related" aria-labelledby="rel-title">
          <div className="rel-in">
            <div className="rel-head reveal">
              <div>
                <div className="eyebrow">Keep reading</div>
                <h2 id="rel-title">Related articles</h2>
              </div>
              <Link href="/blog" className="view-all">View all articles <Arrow /></Link>
            </div>
            <div className="rel-grid">
              {related.map((r) => (
                <article key={r.slug} className="rcard reveal">
                  <div className="rthumb" aria-hidden="true"><Cover name={r.cover} /></div>
                  <div className="rbody">
                    <span className={`rcat${r.amber ? " amber" : ""}`}>{r.cat}</span>
                    <h3><Link href={`/blog/${r.slug}`} className="title-link">{r.title}</Link></h3>
                    <div className="rmeta"><span>{r.minutes} min read</span><b>Read <Arrow size={14} /></b></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <a href="#top" className="to-top" aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
        </a>
      </main>

      <Footer />
    </>
  );
}