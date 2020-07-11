import Head from 'next/head'
import MainHeader from '../src/components/header/main-header'
import ComposeYmlHeader from '../src/components/header/compose-yml-header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Compoizy</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rationale&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <div>
          <MainHeader />
          <ComposeYmlHeader />
        </div>
      </main>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
          }

          * {
            box-sizing: border-box;
            font-family: 'Rationale', sans-serif;
            font-weight: normal;
          }

          main * {
            display: flex;
          }

          body {
            --background: #282A36;
            --dark-background: #20222C;
            --transparent-dark-background: rgba(32, 34, 44, 0.5);
            --blue: #8BE9FD;
            --dark-blue: #6272A4;
            --white: #E5E5E5;
            --purple: #BD93F9;
            --green: #6FCF97;
            --red: #EB5757;
          }
        `}
      </style>
    </div>
  )
}
