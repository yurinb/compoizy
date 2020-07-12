import Highlight from 'react-highlight'
import YAML from 'yaml'
import styled from 'styled-components'
import Header from './docker_compose_header'
import { useEffect } from 'react'

const example = {
    version: "3.7",
    invisible_space_11: "invisible_space",
    services: {
            invisible_space_21: "invisible_space",
            api: {
                build: '.',
                ports: [
                    "3000:3000"
                ],
                depends_on: [
                    'redis', "database"
                ],
                volumes: [
                    '.:/code',
                ],
                networks: [
                    'backend'
                ]
            },
            invisible_space_22: "invisible_space",
            web: {
                image: 'nginx:alpine',
                ports: [
                    "5000:5000"
                ],
                volumes: [
                    "./docker/config/:/etc/nginx/",
                    "./client:/var/www"
                ],
                networks: [
                    'frontend'
                ]
            },
            invisible_space_23: "invisible_space",
            database: {
                image: 'postgres',
                environment: {
                    POSTGRES_USER: 'postgres',
                    POSTGRES_PASSWORD: 'postgres'
                },
                volumes: [
                    'db-data:/var/lib/postgresql/data'
                ],
                networks: [
                    'backend'
                ]
            },
            invisible_space_24: "invisible_space",
            redis: {
                image: "redis:apline",
                networks: [
                    'backend'
                ]
            },
        },
    invisible_space_12: "invisible_space",
    invisible_space_13: "invisible_space",
    volumes: {
        'db-data': {
            driver: 'local'
        }
    },
    invisible_space_14: "invisible_space",
    networks: {
        frontend: {
            driver: 'bridge'
        },
        backend: {
            driver: 'bridge'
        }
    }
}

export default function DockerComposeScreen({ ymlObject = example }) {

    useEffect(() => {
        hideSpaces()
    })

    const dockerComposeYml = YAML.stringify(ymlObject)

    const removeSeparatorsFromYml = (yml) => {
        const lines = yml.split('\n');
        return lines.map(line => line.trim().startsWith('invisible_space') ? '' : line).join('\n');
    }

    const copyDockerComposeToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = removeSeparatorsFromYml(dockerComposeYml);
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

    const downloadDockerCompose = () => {
        const element = document.createElement("a");
        const file = new Blob([removeSeparatorsFromYml(dockerComposeYml)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "docker-compose.yml";
        document.body.appendChild(element);
        element.click();
    }

    function hideSpaces() {
        if (typeof document == 'undefined') return

        const searchText = "invisible_space";

        const aTags = [...document.getElementsByTagName("span")];

        aTags.forEach(el => {
            el.classList.add("unselectable");
        })

        const found = aTags.filter(el => !el.textContent.startsWith(searchText))
        
        found.forEach(el => {
            el.style.visibility = 'visible';
            el.classList.remove("unselectable");
        })

        if (found.length == 0) {
            setTimeout(() => {
                hideSpaces()
            }, 0)
        }
    }

    console.log(YAML.stringify(dockerComposeYml))

  return (
    <Container>
        
        <Header 
            handleDownload={() => downloadDockerCompose()} 
            handleCopy={() => copyDockerComposeToClipboard()} 
        />
        
        <ComposeContainer>

            <StyledHighlight className="YAML">
                {dockerComposeYml}
            </StyledHighlight>

        </ComposeContainer>

    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ComposeContainer = styled.div`
    background: var(--dark-background);
    height: 100%;
    overflow: auto;
    
    pre {
        letter-spacing: 2px;
        font-size: 1.5rem;
    }
    span  {
        visibility: hidden;
    }
`

const StyledHighlight = styled(Highlight)`
    width: 50vw;
    padding: 35px;

`
