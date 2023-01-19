import React from "react";

function Message({ msg, time, isLink, img, sent }) {
  return (
    //Messagem container
    <div 
      className={`flex justify-center items-center rounded-md w-fit my-2  ${
        sent ? "bg-[#005c4b] ml-auto" : "bg-[#202d33] mr-auto"
      }`}
    >
      {/* Messagem com imagem */}
      {img ? (
        <div className="relative w-100 p-2">
          {/* Imagem */}
          <img 
            src={img} 
            alt="image_chat" 
            className="rounded-md max-w-[270px] w-100" 
          />
          {/* Hora */}
          <p className="absolute flex justify-end right-2 bottom-3 text-[#8796a1] text-[10px] min-w-[50px] mr-1">{time}</p>
        </div>
      ) : (
        // Mensagem de texto (link/normal)
        <div 
        className="flex justify-between items-end max-w-[410px] p-2"
        style={{ wordBreak: "break-word" }}
        >
          {isLink ? (
            // Texto link
            <a 
              href={msg}
              target="blank"
              className="text-[#53beec] hover:text-[#53beec] focus:text-[#53beec] active:text-[#53beec] text-sm underline hover:underline mr-2"
            >
              {msg}
            </a>
          ) : (
            // Texto normal
            <p className="text-white text-sm mr-2">
              {msg}
            </p>
          )}
          {/* Hora */}
          <p className="flex justify-end items-end text-[#8796a1] text-[10px] min-w-[50px]">
            {time}
          </p>
        </div>
      )}
    </div>
  )
}


export default Message;