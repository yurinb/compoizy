import Head from 'next/head'
import styled from 'styled-components'
import MainHeader from '../src/components/header/main-header'
import DockerCompose from '../src/components/content/docker-compose/docker-compose'

export default function Home() {
  
  return (
    <RowContainer>

      <Head>
        <title>Compoizy</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rationale&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/css/xt256.css"></link>
      </Head>

      <main>
        <RowContainer>

          <HalfScreenContainer>
            <MainHeader />
          </HalfScreenContainer>

          <HalfScreenContainer>
            <DockerCompose />
          </HalfScreenContainer>

        </RowContainer>
      </main>

    </RowContainer>
  )
}

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const HalfScreenContainer = styled.div`
  display: flex;
  width: 50vw;
  max-width: 50vw;
  height: 100vh;
  background: var(--background);
`

