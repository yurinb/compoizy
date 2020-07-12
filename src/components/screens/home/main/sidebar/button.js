import styled from 'styled-components'

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &:hover {
    border: 1px solid var(--purple);
    transition: all 0.5s ease;
    /* transform: scale(1.2); */
    color: var(--purple) !important;
    background: var(--dark-background);
  }
`

export default function SideBarButton ({ solid, children }) {
  const DynamicButton = styled(Button)`
    background: ${solid ? 'var(--dark-background)' : 'transparent'};
  `
  return <DynamicButton>{children}</DynamicButton>
}
