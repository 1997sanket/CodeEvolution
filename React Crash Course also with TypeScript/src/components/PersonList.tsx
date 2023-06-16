type PersonListProps = {
    names: {
        id: number,
        firstName: string,
        lastName: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.names.map((name) => {
                    return (
                        //key is used to give unique identifier to each element for React to efficiently modify the list if required
                        <h2 key={name.id}>{name.firstName} {name.lastName}</h2>   
                    )
                })
            }
        </div>
    )
}