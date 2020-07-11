export default function VerticalSeparator () {
    return (
        <>

            <div className="separator"/>

            <style jsx>
                {`
                    .separator {
                        background: var(--dark-background);
                        width: 2px;
                        height: 100%;
                    }
                `}
            </style>

        </>
    )
}