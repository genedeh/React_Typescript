type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            
            <h2>
                {
                    props.isLoggedIn ? `Welcome ${props.name}! You Have ${props.messageCount} unread messages.` : "Welcome Guest"
                }
                </h2>
        </div>
    )
}
export default Greet;