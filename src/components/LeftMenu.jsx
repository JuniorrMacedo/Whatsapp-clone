import React, {useState} from "react";
import Chats from "./Chats";
import RoundedBtn from "./Common/RoundedBtn";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/whatsapp";

function LeftMenu() {

  const [filter, setFilter] = useState(false);

  return (
    // Menu esquerdo container
    <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
      {/* Área do perfil */}
      <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">
        {/* Foto de perfil */}
        <img src={pp} alt="profile_picture" className="rounded-full w-[40px]" />

        {/* Botões da área do perfil */}
        <div className="flex justify-between w-[150px]">
          <RoundedBtn icon={<TbCircleDashed />}/>
          <RoundedBtn icon={<BsFillChatLeftTextFill />}/>
          <RoundedBtn icon={<HiDotsVertical />}/>
        </div>
      </div>
      
      {/* Pesquisar e filtrar */}
      <div className="flex justify-between items-center h-[60px] p-2">
        {/* Entrada de pesquisa */}
        <input 
          type="text"
          placeholder="Pesquisar ou começar uma nova conversa"
          className="rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
        />

        {/* Botão de filtro */}
        <button 
            className={`text-2xl m-2 p-1 rounded-full ${
              filter 
                ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700" 
                : "text-[#8796a1] hover:bg-[#3c454c]"
            }`}
            onClick={() => setFilter(!filter)}
          >
            <BiFilter />
        </button>
      </div>

      {/* Chats */}
      <Chats filter={filter}/>
    </div>
  )
}

export default LeftMenu