import { useState } from "react"
import Button from "./Components/Button.jsx"
import Count from "./Components/Paragraph.jsx"
import "./index.css"
function App() {
  const [count ,setCount] = useState(0)
  //
  function increment(){
    console.log("increment")
    setCount(pre=>pre + 1)
  }
  //
  function dicrement(){
    console.log("dicrement")
    setCount(pre=>pre - 1)
  }
  return (<div>
    {/* <p>hello world</p> */}
    <Count count={count}/>
    <Button count={count} text={"increment"} onclick={increment}/>
    <Button count={count} text={"dicrement"} onclick={dicrement}/>    
  </div>
  )
}

export default App
