import styled from 'styled-components'

export default function VerticalSeparator () {
  return <Separator />
}

const Separator = styled.div`
    background: var(--dark-background);
    width: 1px;
    height: 100%;
`
