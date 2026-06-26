function Button({text,count,onclick}){
    return (
        <button className="px-8 py-2 m-2 border" onClick={onclick} > {text}</button>
    )
}
export default Button