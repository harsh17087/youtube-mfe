
const ChatMessage=(props)=>{
    
    const {name,msg} = props
    
    return (
        <div className="flex items-center mt-2">
            <img
                className="h-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XX2IfufctCmnzXPI0a7t34Nq96NbdNTbwKMyU303Rg&s"
                alt="user-icon"
            />
            <span className="text-sm font-bold px-2">{name}</span>
            <span className="text-sm">{msg}</span>
        </div>
    )
}

export default ChatMessage