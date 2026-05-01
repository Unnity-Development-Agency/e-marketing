import Head from "next/head";
import "./snapshot-project.css";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";
import Image from "next/image";
import BrandsHero from "@/components/reactBits/HeroSection";
import Link from "next/link";

export default function CaseStudies() {
  const projects = [
    // {
    //   id: 1,
    //   title: "Adplusa",
    //   image: "/adpl1.png",
    //   href: "https://architect-sigma.vercel.app/",
    // },
    {
      id: 2,
      title: "Cupid Clothings",
      image: "/cupid.png",
      href: "https://cupidclothings.com/",
    },
    {
      id: 3,
      title: "Uberlyfe",
      image: "/uber.png",
      href: "https://uberlyfe.com/",
    },
    {
      id: 4,
      title: "Devkinandan Steel",
      image: "/dev.png",
      href: "https://www.devkinandansteel.com/",
    },
    {
      id: 5,
      title: "Kryys Global",
      image: "/kryss.png",
      href: "https://www.kryysglobal.com/",
    },
    // {
    //   id: 6,
    //   title: "Aiva Jewellery",
    //   image: "/aiva.png",
    //   href: "https://aivajewellery.com/",
    // },
    {
      id: 7,
      title: "Da Urban",
      image: "/da.png",
      href: "https://daurban.com/",
    },
    {
      id: 8,
      title: "Verma Jewellers",
      image: "/verma.png",
      href: "https://vermajewellers.in/",
    },
    {
      id: 9,
      title: "Hubhawks Live",
      image: "/hubhawks.png",
      href: "https://hubhawkslive.com/",
    },
    {
      id: 10,
      title: "ISU Fashion",
      image: "/isu.png",
      href: "https://isufashion.com/",
    },
    {
      id: 11,
      title: "MiReads",
      image: "/mi.png",
      href: "https://mireads.com/",
    },
    {
      id: 12,
      title: "MacLap IT Care",
      image: "/mac.png",
      href: "https://maclapitcare.in/",
    },
    {
      id: 13,
      title: "Aqua Easy Purifier",
      image: "/aqua-d.png",
      href: "https://aquaeasypurifier.com/",
    },

    {
      id: 14,
      title: "CozyCabs",
      image: "/cozy.png",
      href: "https://cozycabs.vercel.app/",
    },

    // {
    //   id: 15,
    //   title: "Evara Matrimony",
    //   image: "/evara.png",
    //   href: "https://evaramatrimony.com/",
    // },
    {
      id: 16,
      title: "The Craft Of Architecture",
      image: "/craft.png",
      href: "https://thecraftofarchitecture.net/",
    },

    {
      id: 17,
      title: "Prateek Suri",
      image: "/prateek-suri.png",
      href: "https://author-rose.vercel.app/",
    },
  ];

  return (
    <>
      {/* Title-Description */}
      <Head>
        <title>Every Project We ve Shipped</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/case-studies.css" />
      </Head>

      <Header />
      <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60  flex items-center">
        <BrandsHero />

        <header className="absolute flex flex-col gap-1 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
          <p className=" text-sm ">
            <Link href="/">Home</Link> / All Projects
          </p>
          <h1 className="text-white text-2xl md:text-5xl font-semibold">
            All Projects
          </h1>
          <p className="text-sm sm:text-balance">
            {" "}
            Explore the complete collection of websites, funnels, and
            performance campaigns we ve executed — real projects that drove
            measurable results for our clients.
          </p>
        </header>
      </div>
      <main className="proj-container">
        <section className="proj-grid" aria-label="case study cards">
          {projects.map((p) => (
            <article className="proj-card" key={p.id}>
              <a
                className="proj-card__link"
                href={p.href}
                aria-label={`Read ${p.title}`}
                target="_blank"
              >
                <div className="proj-card__imageWrap">
                  <Image
                    className="proj-card__image"
                    src={p.image}
                    alt={p.title}
                    width="640"
                    height="420"
                    unoptimized
                  />
                </div>
                <div className="proj-card__body">
                  <h2 className="proj-card__title">{p.title}</h2>
                  {/* <span className="proj-card__cta">Read Case Study →</span> */}
                </div>
              </a>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
