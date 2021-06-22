import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Face Recognition</title>
        <script defer src="scripts/face-api.min.js" />
        <script defer src="scripts/script.js" />
      </Head>
      <video id="video" width="720" height="560" autoPlay muted></video>
    </main>
  );
}
