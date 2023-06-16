type OscarProps = {
    children : React.ReactNode  // Because Oscar has a child Heading
}

export const Oscar = (props : OscarProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}