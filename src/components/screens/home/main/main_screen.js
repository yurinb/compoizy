import styled from 'styled-components'
import Header from './main_header'
import MainSideBar from './sidebar/sidebar'

export default function MainScreen () {
  return (
    <Container>

      <Header />

      <MainSideBar />

    </Container>
  )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    min-width: 475px;
    background: var(--dark-background);
`
