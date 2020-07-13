import { Tooltip, withStyles, Zoom } from '@material-ui/core'
import styled from 'styled-components'
import SidebarItemInfo from './sidebar_item_info'

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${(props) =>
    props.solid ? 'var(--dark-background)' : 'transparent'};
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &:hover {
    border: 1px solid var(--purple);
    transition: all 0.5s ease;
    color: var(--purple) !important;
    background: var(--dark-background);
  }
`

export default function SidebarItem ({ solid, children, info }) {
  return (
    <StyledTooltip
      placement="right"
      TransitionComponent={Zoom}
      title={info && <SidebarItemInfo info={info} />}
    >
      <Button solid={solid}>{children}</Button>
    </StyledTooltip>
  )
}

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'transparent'
  }
}))(Tooltip)
