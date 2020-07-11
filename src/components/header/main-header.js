import FavoriteIcon from '@material-ui/icons/Favorite';
import VerticalSeparator from '../models/vertical-separator';

export default function MainHeader () {
    return (
        <>

            <header>
                
                <img src="/imgs/compose-logo.png" alt="logo"/>
                
                <div className="header-text-container">
                    <h1 className="header-name">
                        Compoizy
                    </h1>

                    <h3 className="header-description">
                        Izy way to make docker-compose files
                    </h3>
                </div>

                <div className="action-icon-container">
                    <FavoriteIcon style={{ color: 'var(--red)' }} />
                </div>

                <VerticalSeparator />

            </header>

            <style jsx>
                {`
                    header {
                        background-color: var(--background);
                        height: 125px;
                        width: 100%;
                        padding-left: 25px;
                        align-items: center;
                    }

                    img {
                        height: 50px;
                    }

                    .header-text-container {
                        flex-direction: column;
                        justify-content: center;
                        padding-left: 15px;
                        width: 100%;
                    }

                    .header-name {
                        color: var(--blue);
                        margin: 0;
                    }
                    
                    .header-description {
                        color: var(--white);
                        margin: 0;
                    }

                    .action-icon-container {
                        margin: 50px;
                        cursor: pointer;
                        transition: transform 1s;  
                    }

                    .action-icon-container:hover {
                        transform: scale(2);
                    }
                `}
            </style>

        </>
    )
}