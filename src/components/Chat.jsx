import React from "react";

function Chat({ pp, contact, msg, time, unreadMsgs, active }) {
  return (
    // Chat container 
    <div className={`flex justify-between items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33] ${
      active ? "bg-[#202d33]" : ""
    }`}>
      {/* Foto de perfil */}
      <img src={pp} alt="profile_picture" className="rounded-full w-[50px] mr-5"/>

      {/* Info container */}
      <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">
        {/* Nome e mensagem do contato */}
        <div className="flex flex-col justify-between text-white">
          {/* Nome do contato */}
          <h1 className="font-medium mb-1">{contact}</h1>

          {/* Mensagem */}
          <p className={`text-sm ${!unreadMsgs ? "text-neutral-400" : ""}`}>
            {msg}
          </p>
        </div>

        {/* Hora e número de mensagens */}
        <div className="flex flex-col justify-between items-end h-100 text-xs">
          {/* Hora */}
          <p className="flex justify-end items-end text-emerald-500 min-w-[55px]">{time}</p>

          {/* Número de mensagens */}
          {unreadMsgs && (
            <div className="flex justify-center items-center bg-emerald-500 rounded-full w-[20px] h-[20px]">
              <p className="text-emerald-900">{unreadMsgs}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Chat