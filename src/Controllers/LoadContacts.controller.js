import {chat5, chat2, chat3} from "../assets/whatsapp";


export function LoadContacts(){
  
  const responseBackend = {
    "contacts": [
      {
        "pp": chat5,
        "contact": "Maria",
        "telephone": "+55 75 9988-5544",
        "msg": "Ficou animal, obrigado!",
        "time": "13:15",
        "unreadMsgs": null,
      },
      {
        "pp": chat2,
        "contact": "Pedro",
        "telephone": "+55 75 9988-5544",
        "msg": "Fala, irmão!!",
        "time": "13:07",
        "unreadMsgs": 2,
      }, {
        "pp": chat3,
        "contact": "João",
        "telephone": "+55 75 9988-5544",
        "msg": "Preciso falar com você, me liga!",
        "time": "13:00",
        "unreadMsgs": null,
      } 
    ]
  };

  const contacts = responseBackend.contacts;
  

  return contacts;
}