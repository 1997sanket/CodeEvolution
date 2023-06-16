import { useState } from "react"

export const State = () => {

    // Array destructuring syntax.
    // Basically we are giving initial value to useState hook, and getting that value in the message variable, setMessage is a function which is used to change message variable value
    const [message, setMessage] = useState('Welcome Visitor');

    return (
        <div>
            <h2>
                {message}
            </h2>


            <button onClick={() => setMessage('Welcome to our website')}>Subscribe</button>
        </div>
    )
}