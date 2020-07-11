export default function VerticalSeparator () {
    return (
        <>

            <div className="separator"/>

            <style jsx>
                {`
                    .separator {
                        background: var(--dark-background);
                        width: 1px;
                        height: 100%;
                    }
                `}
            </style>

        </>
    )
}