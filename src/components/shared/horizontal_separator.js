import styled from 'styled-components'

export default function HorizontalSeparator () {
  return <Separator />
}

const Separator = styled.div`
    background: var(--dark-background);
    height: 1px;
    width: 100%;
`
