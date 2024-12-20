import ChatHeader from "./components/chat-header"
import MessageBar from "./components/message-bar"

const ChatContainer = () => {
  return (
    <div className="fixed top-0 h-[100vw] w-[100vw] bg-[#1c1d25] flex flex-col md:static md:flex-1">
        <ChatHeader/>
        <ChatContainer/>
        <MessageBar/>
     </div>
  )
}

export default ChatContainer