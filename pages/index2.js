import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <div class={styles.container}>
          <div class={styles.row}>
            <div class={styles.colSm3}>&nbsp;</div>
            <div class={styles.colSm6}>
              <center>
                <img
                  src="logo.png"
                  width="50%"
                  height="50%"
                  class={styles.imgResponsive}
                  alt="Makmal Kesihatan Awam Kebangsaan"
                />
                https://simka-outbreak.moh.gov.my
              </center>
            </div>
            <div class={styles.colSm3}>&nbsp;</div>
          </div>

          <form class={styles.formHorizontal}>
            <div class={styles.row}>
              <div class={styles.colSm3}>&nbsp;</div>
              <div class={styles.colSm6}>
                <div class={styles.formGroup}>
                  <label class={styles.controlLabelColSm4} for="param2">
                    Nama Pesakit / <i>Patient Name</i> :{' '}
                  </label>
                  <div class={styles.colSm8}>
                    <input
                      type="email"
                      class={styles.formControl}
                      value="SHANNA GALLIVAN"
                      readonly
                    />
                  </div>
                </div>
                <div class={styles.formGroup}>
                  <label class={styles.controlLabelColSm4} for="param3">
                    ID Pemohon / <i>Patient ID</i> :{' '}
                  </label>
                  <div class={styles.colSm8}>
                    <input
                      type="text"
                      class={styles.formControl}
                      value="530569 ******* (6 digit pertama / first 6 digits)"
                      readonly
                    />
                  </div>
                </div>
                <div class={styles.formGroup}>
                  <label class={styles.controlLabelColSm4} for="param3">
                    Makmal Rujukan / <i>Reference Laboratory</i> :{' '}
                  </label>
                  <div class={styles.colSm8}>
                    <textarea class={styles.formControl2} readonly>
                      KLINIK PRO MEDIC (KOTA KEMUNING)
                    </textarea>
                  </div>
                </div>
                <div class={styles.formGroup}>
                  <label class={styles.controlLabelColSm4} for="param1">
                    No. Rujukan Makmal / <i>Lab Reference No.</i> :{' '}
                  </label>
                  <div class={styles.colSm8}>
                    <input
                      type="email"
                      class={styles.formControl}
                      value="KPM/APRL26/MYEGS15"
                      readonly
                    />
                  </div>
                </div>
                <div class={styles.formGroup}>
                  <label class={styles.controlLabelColSm4} for="param3">
                    Tarikh Makmal Terima Spesimen /{' '}
                    <i>Date Received Specimen in Lab (dd-mm-yyyy)</i> :{' '}
                  </label>
                  <div class={styles.colSm8}>
                    <input
                      type="text"
                      class={styles.formControl}
                      value="26-04-2022"
                      readonly
                    />
                  </div>
                </div>
                <div class={styles.formGroup}>
                  <label class={styles.controlLabelColSm4} for="param3">
                    Nama Ujian / <i>Test Name</i> :{' '}
                  </label>
                  <div class={styles.colSm8}>
                    <input
                      type="text"
                      class={styles.formControl}
                      value="Rapid Antigen Test"
                      readonly
                    />
                  </div>
                </div>
                <div class={styles.formGroup}>
                  <label class={styles.controlLabelColSm4} for="param3">
                    Keputusan Ujian / <i>Test Result</i> :{' '}
                  </label>
                  <div class={styles.colSm8}>
                    <input
                      type="text"
                      class={styles.formControl}
                      value="Negative"
                      readonly
                    />
                  </div>
                </div>
                Sebarang semakan lanjut atau aduan boleh dikemukakan kepada
                makmal rujukan diatas.
                <br />
                <i>
                  Any further review or complaint can be submitted to the above
                  reference laboratory.
                </i>
              </div>
              <div class={styles.colSm3}>&nbsp;</div>
            </div>
          </form>
        </div>
      </body>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  );
}
