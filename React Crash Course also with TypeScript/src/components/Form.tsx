import { useState } from "react";

export const Form = () => {

    const [userName, setUserName] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        
        // To avoid page refreshing
        event.preventDefault();

        alert(`Form data is: ${userName}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input 
                    type="text"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    />

                <button type="submit">Submit</button>
            </div>
        </form>
    );
}