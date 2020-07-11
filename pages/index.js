import Head from 'next/head'
import MainHeader from '../src/components/header/main-header'
import DockerCompose from '../src/components/content/docker-compose/docker-compose'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Compoizy</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rationale&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/css/xt256.css"></link>
      </Head>

      <main>
        <div className="container">
          <div className="left-side-container">
            <MainHeader />
          </div>
          <div className="right-side-container">
            <DockerCompose />
          </div>
        </div>
      </main>

      <style jsx global>
        {`

          .container {
            display: flex;
            flex-direction: row;
          }

          .left-side-container, .right-side-container {
            display: flex;
            width: 50vw;
            max-width: 50vw;
            height: 100vh;
            background: var(--background);
          }

        `}
      </style>
    </div>
  )
}
