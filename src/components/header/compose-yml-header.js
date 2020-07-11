import FilterNoneIcon from '@material-ui/icons/FilterNone';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function ComposeYmlHeader () {
    return (
        <>

            <header>
                
                <div className="header-text-container">
                    <h1 className="header-title">
                        docker-compose.yml
                    </h1>
                </div>

                <div className="action-icon-container">
                    <FilterNoneIcon style={{ color: 'var(--green)' }} />
                </div>
                
                <div className="action-icon-container">
                    <GetAppIcon style={{ color: 'var(--green)' }} />
                </div>

            </header>

            <style jsx>
                {`
                    header {
                        background-color: var(--background);
                        height: 125px;
                        width: 100%;
                        padding-left: 50px;
                        align-items: center;
                    }

                    .header-text-container {
                        flex-direction: column;
                        justify-content: center;
                        padding-left: 15px;
                        width: 100%;
                    }

                    .header-title {
                        color: var(--white);
                        margin: 0;
                    }

                    .action-icon-container {
                        margin-right: 50px;
                        cursor: pointer;
                        transition: transform .1s;  
                    }

                    .action-icon-container:hover {
                        transform: scale(1.5);
                    }
                `}
            </style>

        </>
    )
}