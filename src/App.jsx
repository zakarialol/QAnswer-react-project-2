import { useState } from "react"
import FAQs from "./Components/FAQs.jsx"
import Title from "./Components/Title.jsx"
import "./index.css"
import { quiz } from "./data/QAnswers.js"
function App() {
  // const dat = html()
  const faqsitems = quiz.map((item,index)=>(
    <FAQs key={item.id} Qeustion={item.question}  Answer={item.answer}/>     
  ))
  return (
    <div className="p-[10px]">
      <Title text={"FAQ’s"}/>
      {faqsitems}
    </div>
  )
}

export default App
