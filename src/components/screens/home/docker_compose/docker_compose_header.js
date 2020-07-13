import FilterNoneIcon from '@material-ui/icons/FilterNone'
import GetAppIcon from '@material-ui/icons/GetApp'
import styled from 'styled-components'
import HorizontalSeparator from '../../../shared/horizontal_separator'

export default function DockerComposeHeader ({ handleCopy, handleDownload }) {
  return (
    <Container>

      <Header>

        <HeaderTitleContainer>
          <HeaderTitle>
            docker-compose.yml
          </HeaderTitle>
        </HeaderTitleContainer>

        <IconContainer onClick={handleCopy}>
          <CopyIcon />
        </IconContainer>

        <IconContainer onClick={handleDownload}>
          <DownloadIcon />
        </IconContainer>

      </Header>

      <HorizontalSeparator />

    </Container>
  )
}

const Container = styled.div`
    width: 100%;
`

const Header = styled.header`
    display: flex;
    height: 125px;
    background-color: var(--background);
    padding-left: 50px;
    align-items: center;
`

const HeaderTitleContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    width: 100%;
`

const HeaderTitle = styled.h2`
    color: var(--white);
    margin: 0;
`

const IconContainer = styled.div`
    margin-right: 50px;
    line-height: 0;
    transition:all 0.3s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.25);
        svg {
            color: var(--purple) !important;
        }
    }
`

const CopyIcon = styled(FilterNoneIcon)`
  color: var(--green);
`

const DownloadIcon = styled(GetAppIcon)`
  color: var(--green);
  transform: scale(1.2);
`
