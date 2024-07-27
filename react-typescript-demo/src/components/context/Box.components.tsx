import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.contexts";

const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>Theme Context</div>
    )
}

export default Box;