import { Child } from "./Child"

export const Parent = () => {

    const greetParent = (message: string) => {
        alert(message);
    }

    return (
        <div>
            <Child greetParent={greetParent}></Child>
        </div>
    )
}