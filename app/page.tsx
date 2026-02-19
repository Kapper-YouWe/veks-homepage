import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Gå til indhold
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <div className={styles.brandMark} aria-hidden="true">
              VEKS
            </div>
            <div className={styles.brandText}>
              Vestegnens Kraftvarmeselskab I/S
            </div>
          </div>

          <nav className={styles.nav} aria-label="Hovednavigation">
            <a href="https://www.veks.dk/fokus">Fokus</a>
            <a href="https://www.veks.dk/veks-tilbyder">VEKS tilbyder</a>
            <a href="https://www.veks.dk/om-veks">Om VEKS</a>
            <a href="https://www.veks.dk/job">Job</a>
            <a href="https://www.veks.dk/kontakt">Kontakt</a>
            <a href="https://www.veks.dk/dokumenter">Dokumenter</a>
          </nav>

          <div className={styles.headerActions}>
            <form className={styles.search} role="search">
              <label className={styles.srOnly} htmlFor="site-search">
                Søg på veks.dk
              </label>
              <input
                id="site-search"
                type="search"
                placeholder="Søg"
                aria-label="Søg"
              />
              <button type="submit">Søg</button>
            </form>
            <div className={styles.langSwitch} aria-label="Sprog">
              <a className={styles.langActive} href="https://www.veks.dk/">
                DK
              </a>
              <span aria-hidden="true">/</span>
              <a href="https://www.veks.dk/en">EN</a>
            </div>
          </div>
        </div>
      </header>

      <main id="main" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Fjernvarme til Vestegnen</p>
              <h1>Vi er en af Danmarks største fjernvarmevirksomheder</h1>
              <p>
                VEKS er et interessentskab bestående af 12 kommuner og 19
                fjernvarmeselskaber. Vi leverer varme til ca. en halv million
                borgere.
              </p>
              <div className={styles.heroMeta}>
                <div>
                  <span>12</span>
                  <small>kommuner</small>
                </div>
                <div>
                  <span>19</span>
                  <small>fjernvarmeselskaber</small>
                </div>
                <div>
                  <span>500.000</span>
                  <small>borgere</small>
                </div>
              </div>
            </div>
            <figure className={styles.heroImage}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/images/roer-besk.jpg?h=309&hash=E4D9CB9F164AF63D6FE3FF5D4D4AACE7&iar=0&w=714"
                alt="Fjernvarmerør ligger i en bunke på en græsplæne."
                width={714}
                height={309}
                className={styles.heroImg}
                priority
              />
            </figure>
          </div>
        </section>

        <section className={styles.shortcuts}>
          <div className={styles.sectionHeader}>
            <h2>Genveje</h2>
            <p>Få hurtigt adgang til de mest brugte indgange.</p>
          </div>
          <div className={styles.cardGrid}>
            <a
              className={styles.card}
              href="https://www.veks.dk/om-veks/ledelse"
            >
              <h3>Organisation/ledelse</h3>
              <p>Bestyrelse, direktion og organisering.</p>
              <span>Læs mere</span>
            </a>
            <a
              className={styles.card}
              href="https://www.veks.dk/fokus/projekter-og-aktiviteter/elexia"
            >
              <h3>Horizon Europe ELEXIA</h3>
              <p>EU-projekt om fremtidens fleksible energisystemer.</p>
              <span>Læs mere</span>
            </a>
            <a
              className={styles.card}
              href="https://www.veks.dk/fokus/projekter-og-aktiviteter/kalundborgprojektet"
            >
              <h3>Pressemeddelelse om Kalundborg-projekt</h3>
              <p>VEKS, Kalundborg og Ørsted samarbejder om grønnere varme.</p>
              <span>Læs mere</span>
            </a>
          </div>
        </section>

        <section className={styles.articles}>
          <div className={styles.sectionHeader}>
            <h2>Artikler &amp; debat</h2>
            <p>Nyheder, debat og indsigt fra VEKS.</p>
          </div>
          <div className={styles.articleGrid}>
            <article className={styles.articleCard}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/images/forsyningsplan-bl-2025-aflang2.png?h=234&hash=33D7283B86062CC9EC9B33C4AD278991&iar=0&w=468"
                alt="Forsyningsplan 2025 for Vestegnens fjernvarmesystem."
                width={468}
                height={234}
                className={styles.articleImage}
              />
              <div>
                <h3>Forsyningsplan 2025</h3>
                <p>
                  Hvor skal fremtidens varme komme fra? Forsyningsplanen 2025
                  udstikker retningen for Vestegnens fjernvarmesystem, når
                  eksisterende centrale varmeværker udfases.
                </p>
                <a href="https://www.veks.dk/fokus/nyheder/forsyningsplan-2025">
                  Læs mere
                </a>
              </div>
            </article>

            <article className={styles.articleCard}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/images/kapperr-2025dec.jpg?h=264&hash=E2927F4E3F5F3DEBBEC9E4613C1A0619&iar=0&w=400"
                alt="Fjernvarmerør ligger i en bunke på en græsplæne."
                width={400}
                height={264}
                className={styles.articleImage}
              />
              <div>
                <h3>Kapperør</h3>
                <p>
                  VEKS og Rambøll samler branchen om fælles viden om
                  fjernvarmerørs holdbarhed, når de ligger i jorden.
                </p>
                <a href="https://www.veks.dk/fokus/nyheder/kapperoer">
                  Læs mere
                </a>
              </div>
            </article>

            <article className={styles.articleCard}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/images/mufferenovering---detalje.jpg?h=264&hash=CB1CC541A4B1434952CDFE359E27C6A4&iar=0&w=400"
                alt="Mufferenovering - detalje."
                width={400}
                height={264}
                className={styles.articleImage}
              />
              <div>
                <h3>Datacentre</h3>
                <p>
                  Overskudsvarme fra Microsofts datacenter er på vej til 6.000
                  hjem.
                </p>
                <a href="https://www.veks.dk/fokus/nyheder/datacentre">
                  Læs mere
                </a>
              </div>
            </article>

            <article className={styles.articleCard}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/images/anlaegsarbejdeweb.jpg?h=264&hash=5D035792E0C6B9D98FDBB8EAD91F7527&iar=0&w=400"
                alt="Anlægsarbejde."
                width={400}
                height={264}
                className={styles.articleImage}
              />
              <div>
                <h3>Ledningsnettet</h3>
                <p>VEKS viser sit ledningsnet med NetGis.</p>
                <a href="https://veks.ledningskort.dk/">Læs mere</a>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.mapSection}>
          <div className={styles.sectionHeader}>
            <h2>Fjernvarmenettet</h2>
            <p>Klik rundt på kortet og se, hvad VEKS tilbyder.</p>
          </div>
          <div className={styles.tileGrid}>
            <div className={styles.tile}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/assets/images/veks/top-icons/fjernvarmeselskaber.png?h=70&hash=0101DA09D55468DD23282E58F8D3E091&iar=0&w=70"
                alt="Fjernvarmeselskaber."
                width={70}
                height={70}
              />
              <h3>Fjernvarmeselskaber</h3>
            </div>
            <div className={styles.tile}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/assets/images/veks/top-icons/andreselskaber.png?h=70&hash=F96DD4DAA91A278F5DC9EA9D21CC5642&iar=0&w=70"
                alt="Andre anlæg."
                width={70}
                height={70}
              />
              <h3>Andre anlæg</h3>
            </div>
            <div className={styles.tile}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/assets/images/veks/top-icons/veks.png?h=70&hash=B482A2E2FBCF9E6EF2400C104E15EACC&iar=0&w=70"
                alt="VEKS."
                width={70}
                height={70}
              />
              <h3>VEKS</h3>
            </div>
            <div className={styles.tile}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/assets/images/veks/top-icons/kraftvarme.png?h=70&hash=4E938BC9486175B23C0FAEF1F64DB92E&iar=0&w=70"
                alt="Kraftvarmeværker."
                width={70}
                height={70}
              />
              <h3>Kraftvarmeværker</h3>
            </div>
            <div className={styles.tile}>
              <Image
                src="https://www.veks.dk/-/media/veks-2019/assets/images/veks/top-icons/affalds.png?h=70&hash=D55B63E5401E5D3508A8709242CE85FF&iar=0&w=70"
                alt="Affaldsforbrændingsanlæg."
                width={70}
                height={70}
              />
              <h3>Affaldsforbrændingsanlæg</h3>
            </div>
          </div>
        </section>

        <section className={styles.distribution}>
          <div className={styles.sectionHeader}>
            <h2>VEKS Distributionsselskaber &amp; Varmelast</h2>
          </div>
          <div className={styles.distributionGrid}>
            <a
              className={styles.distributionCard}
              href="https://www.koegefjernvarme.dk"
            >
              <h3>Køge Fjernvarme</h3>
              <p>Læs mere</p>
            </a>
            <a
              className={styles.distributionCard}
              href="https://www.tranegildefjernvarme.dk"
            >
              <h3>Tranegilde Fjernvarme</h3>
              <p>Læs mere</p>
            </a>
            <a
              className={styles.distributionCard}
              href="https://www.varmelast.dk"
            >
              <h3>Varmelast</h3>
              <p>Læs mere</p>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBlock}>
            <h3>VEKS</h3>
            <p>
              Stæremosevej 10
              <br />
              3320 Skævinge
            </p>
            <p>
              Telefon: +45 48 16 40 00
              <br />
              Mail: veks@veks.dk
              <br />
              Nødtelefon: +45 70 20 93 03
            </p>
          </div>

          <div className={styles.footerBlock}>
            <h3>Fandt du ikke det du søgte?</h3>
            <a href="https://www.veks.dk/om-veks/varmeproduktion/koege-kraftvarmevaerk">
              Køge Kraftvarmeværk
            </a>
            <a href="https://www.veks.dk/job">Jobopslag</a>
            <a href="https://www.veks.dk/om-veks/ean-nummer">EAN-numre</a>
            <a href="https://www.veks.dk/om-veks/ledelse">VEKS&apos; ledelse</a>
            <a href="https://www.veks.dk/om-veks/tilgaengelighedserklaering---veks">
              Tilgængelighedserklæring
            </a>
          </div>

          <div className={styles.footerBlock}>
            <h3>Vidste du at</h3>
            <div className={styles.factBox}>
              <p>
                VEKS&apos; leverancer af varme svarer til ca. 15 % af landets
                samlede fjernvarme.
              </p>
            </div>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/veks/">LinkedIn</a>
              <a href="https://vimeo.com/veks">Vimeo</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBase}>
          <a href="https://www.veks.dk/om-veks/privatlivspolitik">
            Privatlivspolitik
          </a>
          <a href="https://www.veks.dk/om-veks/cookiepolitik">Cookiepolitik</a>
        </div>
      </footer>

      <section className={styles.cookieBanner} aria-label="Cookie-samtykke">
        <div className={styles.cookieInner}>
          <div>
            <h3>Cookies på veks.dk</h3>
            <p>
              VEKS bruger nødvendige cookies til at sikre en god oplevelse. Vi
              bruger også statistiske cookies til at forbedre indholdet.
            </p>
          </div>
          <div className={styles.cookieActions}>
            <button type="button">Kun nødvendige</button>
            <button type="button" className={styles.cookiePrimary}>
              Accepter alle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
