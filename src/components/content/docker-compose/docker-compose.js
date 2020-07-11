import { useEffect } from 'react'
import Highlight from 'react-highlight'
import YAML from 'yaml'
import ComposeYmlHeader from '../../header/compose-yml-header'

const file = {
    version: "3.7",
    invisible_space_1: "invisible_space",
    services: {
            invisible_space_2: "invisible_space",
            api: {
                build: '.',
                ports: [
                    "3000\:3000"
                ],
                depends_on: [
                    'redis', "database"
                ],
                volumes: [
                    './src:/code'
                ]
            },
            invisible_space_3: "invisible_space",
            web: {
                image: 'nginx:alpine',
                ports: [
                    "5000:5000"
                ],
                volumes: [
                    "./docker/config/:/etc/nginx/",
                    "./client:/var/www"
                ]
            },
            invisible_space_4: "invisible_space",
            redis: {
                image: "redis:apline"
            },
            

            invisible_space_22: "invisible_space",
            api2: {
                build: '.',
                ports: [
                    "3000\:3000"
                ],
                depends_on: [
                    'redis', "database"
                ],
                volumes: [
                    './src:/code'
                ]
            },
            invisible_space_32: "invisible_space",
            web2: {
                image: 'nginx:alpine',
                ports: [
                    "5000:5000"
                ],
                volumes: [
                    "./docker/config/:/etc/nginx/",
                    "./client:/var/www"
                ]
            },
            invisible_space_42: "invisible_space",
            redis2: {
                image: "redis:apline"
            },
            
        },
    invisible_space_5: "invisible_space",
    invisible_space_6: "invisible_space",
    volumes: {
        logvolume01: {}
    }
}

// {`version: '3.7'

//             services:

//             api:
//                 build: .
//                 ports:
//                 - "3000:3000"
//                 depends_on:
//                 - redis
//                 volumes:
//                 - ./src:/code

//             web:
//                 image: nginx:alpine
//                 ports:
//                 - "5000:5000"
//                 volumes:
//                 - ./docker/config/:/etc/nginx/
//                 - ./client:/var/www
            
//             redis:
//                 image: redis:alpine

//             volumes:
//                 logvolume01: {}`}


export default function DockerCompose() {

    useEffect(() => {
        hideSpaces()
    }, [file])
    
    function hideSpaces() {
        const searchText = "invisible_space";
        if (typeof document == 'undefined') return

        const aTags = [...document.getElementsByTagName("span")];

        const found = aTags.filter(el => !el.textContent.startsWith(searchText))
        
        found.forEach(el => {
            el.style.visibility = 'visible';
        })

        if (found.length == 0) {
            setTimeout(() => {
                hideSpaces()
            }, 500)
        }
    }

    console.log(YAML.stringify(file))

  return (
    <>
        <div className="container">
            
            <ComposeYmlHeader />
            
            <div className="compose-container">

                <Highlight className="YAML highlight">
                    {YAML.stringify(file)}
                </Highlight>

            </div>

            {/* {hideSpaces()} */}

        </div>


        <style jsx>
            {`
                .container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .compose-container {
                    background: var(--dark-background);
                    height: 100%;
                    padding: 35px;
                    overflow: auto;
                }

                .highlight {
                    width: 50vw;
                }

                pre {
                    letter-spacing: 2px;
                    font-size: 1.25em;
                }
                
            `}
        </style>

        <style jsx global>
            {`
                span {
                    visibility: hidden;
                }

                pre {
                    letter-spacing: 2px;
                    font-size: 2.2vh;
                }
            `}
        </style>
    </>
  )
}
