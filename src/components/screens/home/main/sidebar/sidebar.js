import styled from 'styled-components'
import SideBarItem from './sidebar_item'
import AddIcon from '@material-ui/icons/Add'
import { useEffect, useState } from 'react'

export default function MainSideBar () {
  const [dockerhubImages, setDockerhubImages] = useState([])
  useEffect(() => {
    fetch('dockerhub_images_dump.json').then(async (response) => {
      setDockerhubImages(await response.json())
    })
  }, [])

  return (
    <Container>
      <SideBarItem solid>
        <AddServiceButton />
      </SideBarItem>

      <ImagesContainer>
        {dockerhubImages.map((image) => (
          <SideBarItem info={image} key={image.slug}>
            <DockerhubImageLogo
              src={
                image.logo_url.large ||
                image.logo_url.small ||
                '/imgs/default_image_logo.png'
              }
            />
          </SideBarItem>
        ))}
      </ImagesContainer>
    </Container>
  )
}

const Container = styled.div`
  height: calc(100% - 125px);
  max-height: calc(100% - 125px);
  width: 75px;
  background: var(--background);
  overflow: auto;
  overflow-x: hidden;
  transition: all 0.5s ease;
`

const AddServiceButton = styled(AddIcon)`
  color: var(--green);
  transform: scale(1.5);
  &:hover {
    -webkit-filter: drop-shadow(0px 0px 5px var(--purple));
    filter: drop-shadow(0px 0px 5px var(--purple));
  }
`

const ImagesContainer = styled.div`
  width: 100%;
  max-height: calc(100% - 75px);
  overflow: auto;
  overflow-x: hidden;
`

const DockerhubImageLogo = styled.img`
  width: 60%;
  transition: all 0.1s ease;
  &:hover {
    -webkit-filter: drop-shadow(0px 0px 5px var(--purple));
    filter: drop-shadow(0px 0px 5px var(--purple));
  }
`
