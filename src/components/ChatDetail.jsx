import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import RoundedBtn from "./Common/RoundedBtn";
import { LoadMessagesController } from "../Controllers/LoadMessagesController"; 
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { FiPaperclip } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import { chat5 } from "../assets/whatsapp"
import { getTime } from "../logic/whatsapp";

const messagesData = new LoadMessagesController();

function ChatDetail() {
  const [messages, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Funções

  // adicionar mensagem
  const addMessage = (msg) => {
    const newMessages = [...messages, msg]
    setMessages(newMessages);
  };

  // mostrar botao de mic/enviar
  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  // enviar mensagem
  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  // Descer tela para mensagem enviada
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Enviar com enter
  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit(); 
    };
    
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });

  return (
    // Conversa container master
    <div className="flex flex-col h-screen">
      {/* Área do contato */}
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
        {/* Info contato */}
        <div className="flex items-center">
          {/* Foto de perfil */}
          <img src={chat5} alt="profile_picture" className="rounded-full w-[40px] h-[40px] mr-5"/>

          {/* Info */}
          <div className="flex flex-col">
            {/* Contato */}
            <h1 className="text-white font-medium ">Maria</h1>

            {/* Status */}
            <p className="text-[#8796a1] text-xs">Online</p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-between items-center w-[85px]">
          <RoundedBtn icon={<MdSearch/>}/>
          <RoundedBtn icon={<HiDotsVertical/>}/>
        </div>
      </div>

      {/* Seção de mensagens */}
      <div className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100"
      style={{ padding: "12px 7%" }}
      >
        {messages.map((msg) => (
          <Message 
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
        ))}
        <div ref={bottomRef}/>
      </div>

      {/* seção inferior */}
      <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">
        {/* Botão emoji */}
        <RoundedBtn icon={<BiHappy />} />

        {/* Botão upload */}
        <span className="mr-2">
          <RoundedBtn icon={<FiPaperclip />}/>
        </span>

        {/* Barra de digitação */}
        <input 
          type="text"
          placeholder="Mensagem"
          className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]"
          onChange={handleInputChange}
          ref={inputRef}
        />

        {/* Botão Mic/Enviar */}
        <span className="ml-2">
          {typing ? (
            <RoundedBtn icon={<MdSend /> } onClick={handleInputSubmit} />
          ) : (
            <RoundedBtn icon={<IoMdMic />} />
          )}         
        </span>
      </div>
    </div>
  )
}

export default ChatDetail