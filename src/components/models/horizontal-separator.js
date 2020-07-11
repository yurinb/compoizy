export default function HorizontalSeparator () {
    return (
        <>

            <div className="separator"/>

            <style jsx>
                {`
                    .separator {
                        background: var(--dark-background);
                        height: 1px;
                        width: 100%;
                    }
                `}
            </style>

        </>
    )
}