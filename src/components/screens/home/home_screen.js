import Head from 'next/head'
import styled from 'styled-components'
import DockerComposeScreen from './docker_compose/docker_compose_screen'
import MainScreen from './main/main_screen'
import { Resizable } from 're-resizable'

export default function HomeScreen () {
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

          <HalfScreenContainerResizable
            defaultSize={{
              width: '50vw'
            }}
            enabled={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false
            }}
          >
            <MainScreen />
          </HalfScreenContainerResizable>

          <HalfScreenContainer>
            <DockerComposeScreen />
          </HalfScreenContainer>

        </RowContainer>
      </main>

    </RowContainer>
  )
}

const RowContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  max-height: 100vh;
`

const HalfScreenContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(100% - 475px);
  min-width: 475px;
  height: 100vh;
  background: var(--background);
`
const HalfScreenContainerResizable = styled(Resizable)`
  display: flex;
  max-width: calc(100% - 475px);
  min-width: 475px;
  height: 100vh;
  background: var(--background);
`
