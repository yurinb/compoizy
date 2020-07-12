import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components'
import HorizontalSeparator from '../../../shared/horizontal_separator'
import VerticalSeparator from '../../../shared/vertical_separator';

export default function MainHeader () {
    return (
        <Container>

            <Header>
                
                <ComposeLogo src="/imgs/compose_logo.png" alt="logo"/>
                
                <HeaderTextContainer>
                    <HeaderTitle>
                        Compoizy
                    </HeaderTitle>

                    <HeaderSubtitle>
                        Izy way to make docker-compose files
                    </HeaderSubtitle>
                </HeaderTextContainer>

                <IconContainer>
                    <FavoriteIcon style={{ color: 'var(--red)' }} />
                </IconContainer>

                <VerticalSeparator />

            </Header>

            <HorizontalSeparator />
                
        </Container>
    )
}

const Container = styled.div`
    background-color: var(--background);
    height: 125px;
    max-height: 125px;
    width: 100%;
`

const Header = styled.header`
    height: 100%;
    display: flex;
    padding-left: 25px;
    align-items: center;
`

const ComposeLogo = styled.img`
    height: 50px;
`

const HeaderTextContainer = styled.div`
    justify-content: center;
    padding-left: 15px;
    width: 100%;
`

const HeaderTitle = styled.h1`
    color: var(--blue);
    margin: 0;
`

const HeaderSubtitle = styled.h3`
    color: var(--white);
    margin: 0;
`

const IconContainer = styled.div`
    margin: 50px;
    cursor: pointer;
    transition: transform 1.5s; 
    &:hover {
        transform: scale(2.25);
    }
`
