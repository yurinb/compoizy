import styled from 'styled-components'

export default function SidebarItemInfo ({ info }) {
  return (
    <InfoContainer>
      <InfoTitle>{info.name}</InfoTitle>
      <InfoDescription>{info.short_description}</InfoDescription>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 75px;
  padding: 40px;
  background: var(--dark-background);
`

const InfoTitle = styled.span`
  margin-bottom: 20px;
  font-size: 35px;
  color: var(--blue);
`

const InfoDescription = styled.span`
  color: var(--blue);
  font-size: 20px;
`
