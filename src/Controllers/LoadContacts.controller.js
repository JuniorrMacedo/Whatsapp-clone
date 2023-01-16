import {chat1, chat2, chat3} from "../assets/whatsapp";


export function LoadContacts(){
  
  const responseBackend = {
    "contacts": [
    {
      "pp": chat1,
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
      "msg": "Ficou animal, obrigado!",
      "time": "13:15",
      "unreadMsgs": 2,
    }, {
      "pp": chat3,
      "contact": "João",
      "telephone": "+55 75 9988-5544",
      "msg": "Ficou animal, obrigado!",
      "time": "13:15",
      "unreadMsgs": null,
    }
    
  ]};

  const contacts = responseBackend.contacts;
  

  return contacts;
}