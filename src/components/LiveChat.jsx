import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomName, generateString } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [myMessage,setMyMessage] = useState("")

  const chatMessages = useSelector((store) => store.chat.messages);

  // API polling
  useEffect(() => {
    const timer = setInterval(() => {
      // fetch Data after 2 seconds

      dispatch(
        addMessage({
          name: generateRandomName(),
          msg: generateString(20),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="px-2 mx-2 border border-black w-[280px] h-[400px] bg-gray-100 flex flex-col-reverse rounded-lg overflow-y-scroll">
        {chatMessages.map((onemsg, index) => (
          <ChatMessage key={index} name={onemsg.name} msg={onemsg.msg} />
        ))}
      </div>
      <form className="m-2 w-full" onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
                name : "Harsh raj",
                msg : myMessage
            }))
            setMyMessage("")
        }}>
        <input
          className="p-1 border border-black bg-slate-100 rounded-lg"
          type="text"
          value={myMessage}
          onChange={(e)=>setMyMessage(e.target.value)}
          
        />
        <button className=" p-2 m-2 bg-blue-100 hover:bg-blue-300 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
