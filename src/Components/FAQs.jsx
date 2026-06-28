import { useState ,useRef } from "react"
import plusSvg from "../assets/plus.svg"
import minusSvg from "../assets/minus.svg"
console.log(plusSvg)
function FAQs({btnText,Qeustion,Answer}){
    const [open,setOpen]=useState(true)
    const AnswerHeight = useRef(null)
    return (
        <div className={` ${open ?"bg-[#FAFAFA]":"bg-[#FFFFFF]"} border border-[#FAFAFA] rounded-[10px] mb-[30px] p-3 text-xs`}>
            <div className="flex gap-2">
                <button onClick={(e)=>{
                    setOpen(!open)
                    console.log(open,"open")
                    console.log(e.currentTarget)
                    }} ><img className="w-5" src={open ? plusSvg: minusSvg} alt="" />
                </button>
                <p>{Qeustion}</p>
            </div>
            <div className={`pl-[28px] overflow-hidden ${open ? "h-0" : AnswerHeight.scrollHeight}`}>
                <p ref={AnswerHeight}>{Answer}</p>
            </div>
        </div>
    )
}
export default FAQs