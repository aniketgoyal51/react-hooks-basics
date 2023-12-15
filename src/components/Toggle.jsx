import { useContext ,useState , useEffect} from "react";
import {ToggleTheme} from "../App";

function UseContext(){
    const [count, setCount] = useState(0)
    const theme = useContext(ToggleTheme);
    const[content,setcontent]=useState(false)

    const themeStyle = {
        backgroundColor: theme?"black":"lightgrey",
        color:theme?"white":"black",
    }

    function handlelike(){
        setCount(count+1)
    }

    function handlecontent(){
        setcontent(content=>!content)
    }

    useEffect(()=>{
        alert('Content button is clicked')
    },[content])

    return(
        <div style={themeStyle} className="container">
            {content?<p>In this lab we will try to work with hooks in react. You can use a single component or create one component for each progression. This lab is just for your reference and kinldy explore the power of react hooks.</p>:<p></p>}
            <button onClick={handlecontent}>content</button>
            <p>{count}</p>
            <button onClick={handlelike}>like</button>
        </div>
    )
}

export default UseContext;