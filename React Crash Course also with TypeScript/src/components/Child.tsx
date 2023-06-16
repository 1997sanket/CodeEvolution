type ChildProps = {

    greetParent: (message: string) => void
}

export const Child = (props : ChildProps) => {

    return (
        <div>
            <button onClick={() => props.greetParent('from Child')}>Child button</button>
        </div>
    )
}