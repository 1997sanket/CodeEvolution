
// Usually use types for building applications and interfaces for building libraries
type GreetProps = {
    name: string;
    messageCount?: number;  // messageCount is optional
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {

    //giving default value of 0 to messageCount
    //this is called object destructuring, we are getting props.messageCount in a variable messageCount
    const {messageCount = 0} = props;   
    
    return (
        <div>
            <h2> {props.isLoggedIn ? `Welcome ${props.name} you have ${messageCount} unread messages !!` : `Welcome Guest !!` } </h2> 
        </div>
    )
}

