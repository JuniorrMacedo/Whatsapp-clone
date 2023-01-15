import React from "react";
import LeftMenu from "../components/LeftMenu"
import ChatDetail from "../components/ChatDetail"
//TODO: LoadingScreen component

function WhatsApp() {
  return (
    // container master
    <div className="w-screen h-screen overflow-hidden">
      {/* 2 componentes no container */}
      <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
        {/* Menu esquerdo */}
        <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-100 h-100">
          <LeftMenu />
        </div>

        {/* Conversa */}
        <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100">
          <ChatDetail />
        </div>
      </div>
    </div>
  )
}
export default WhatsApp