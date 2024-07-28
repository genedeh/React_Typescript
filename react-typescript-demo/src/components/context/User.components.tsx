import { useContext } from "react"
import { UserContext } from "./UserContext.contexts"
const User = () => {
    const { setUser, user } = useContext(UserContext)
    const handleLogin = () => {
        setUser({
            name: 'Genesis',
            email: 'genesis.enedeh@gmail.com',
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}

export default User;