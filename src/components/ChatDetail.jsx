import React from "react";
import RoundedBtn from "./Common/RoundedBtn";
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { FiPaperclip } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import { cs1 } from "../assets/whatsapp"

function ChatDetail() {
  return (
    // Conversa container master
    <div className="flex flex-col h-screen">
      {/* Área do contato */}
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
        {/* Contact info */}
        <div className="flex items-center">
          {/* Profile picture */}
          <img src={cs1} alt="profile_picture" className="rounded-full w-[40px] h-[40px] mr-5"/>

          {/* Info */}
          <div className="flex flex-col">
            {/* Contact */}
            <h1 className="text-white font-medium ">Dev</h1>

            {/* Status */}
            <p className="text-[#8796a1] text-xs">Online</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center w-[85px]">
          <RoundedBtn icon={<MdSearch/>}/>
          <RoundedBtn icon={<HiDotsVertical/>}/>
        </div>
      </div>

      {/* Seção de mensagens */}
      <div className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100"
      style={{ padding: "12px 7%" }}
      >
        
      </div>

      {/* seção inferior */}
      <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">
        {/* Botão emoji */}
        <RoundedBtn icon={<BiHappy />}/>

        {/* Botão upload */}
        <span className="mr-2">
          <RoundedBtn icon={<FiPaperclip />}/>
        </span>

        {/* Barra de digitação */}
        <input 
          type="text"
          placeholder="Mensagem"
          className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]"
        />

        {/* Botão Mic/Send */}
        <span className="ml-2">
          <RoundedBtn icon={<IoMdMic />}/>
          {/* <RoundedBtn icon={<MdSend />}/> */}
        </span>
      </div>
    </div>
  )
}

export default ChatDetail