import { useState } from "react"
import FAQs from "./Components/FAQs.jsx"
import Title from "./Components/Title.jsx"
import "./index.css"
import { quiz } from "./data/QAnswers.js"
function App() {
  const [openIdex,setOpen] = useState(null)
  // const dat = html()
  const faqsitems = quiz.map((item,index)=>(
    <FAQs key={item.id} Qeustion={item.question}  Answer={item.answer} open={openIdex === index} onClick={()=>setOpen(openIdex === index? null : index)}/>     
  ))
  return (
    <div className="p-[10px] max-w-[400px] mx-auto">
      <Title text={"FAQ’s"}/>
      {faqsitems}
    </div>
  )
}

export default App
