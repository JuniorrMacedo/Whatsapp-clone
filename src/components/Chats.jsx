import React, {useState, useEffect} from "react";
import Chat from "./Chat";
import { BiArchiveIn } from "react-icons/bi";
import { chatsData } from "../data/whatsapp";

function Chats({ filter }) {
  const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter ? chatsData.filter((chat) => chat.unreadMsgs) : chatsData;
    setChats(newChats);
  }, [filter]);

  return (
    // Chats container master
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {/* Arquivadas container */}
      <div className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]">
        {/* Ícone e texto container */}
        <div className="flex justify-around items-center w-[150px]">
          {/* Ícone */}
          <span className="text-emerald-500 text-lg">
            <BiArchiveIn />
          </span>

          {/* Arquivadas */}
          <h1 className="text-white">Arquivadas</h1>
        </div>
      </div>

      {/* Chats */}
      {chats.map((chat, i) => {
        return (
          <Chat 
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={i === 0}
          />
        );
      })}
    </div>
  );
}

export default Chats