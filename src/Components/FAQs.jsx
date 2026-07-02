import { useState ,useRef } from "react"
import plusSvg from "../assets/plus.svg"
import minusSvg from "../assets/minus.svg"
console.log(plusSvg)
function FAQs({Qeustion,Answer,onClick,open}){
    console.log(open, "open")
    const AnswerHeight = useRef(null)
    return (
        <div className={` ${open ?"bg-[#FFFFFF]":"bg-[#FAFAFA]"} border border-[#FAFAFA] rounded-[10px] mb-[30px] p-3 text-xs md:text-sm lg:text-base`}>
            <div className="flex gap-2 mb-1">
                <button onClick={onClick} ><img className="w-5" src={open ? minusSvg: plusSvg} alt="" />
                </button>
                <p>{Qeustion}</p>
            </div>
            <div className={`pl-[28px] overflow-hidden transition-all ease-in duration-200 `}
             style={{height: open? `${AnswerHeight.current?.scrollHeight}px`: "0px" }}>
                <p ref={AnswerHeight}>{Answer}</p>
            </div>
        </div>
    )
}
export default FAQs
