import styled from 'styled-components'
import Header from './main_header'

export default function MainScreen () {
  return (
    <Container>

      <Header />

    </Container>
  )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    background: var(--red);
`
