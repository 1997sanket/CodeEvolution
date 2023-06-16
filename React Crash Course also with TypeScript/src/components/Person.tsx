type PersonProps = {
    personName: {
        firstName: string,
        lastName: string
    }
}

export const Person = (props: PersonProps) => {

    return (
        <div>
            <h2>{props.personName.firstName}  {props.personName.lastName}</h2>
        </div>
    )
}