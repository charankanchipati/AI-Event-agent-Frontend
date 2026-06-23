import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Sidebar(){


const navigate = useNavigate();


const userId =
localStorage.getItem("userId");



const [chats,setChats] =
useState([]);




const historyRef =
useRef();





// DARK MODE







// LOAD CHATS

const loadChats = useCallback(()=>{


return axios.get(

`http://localhost:5002/api/chats/${userId}`

)

.then((response)=>{


setChats(response.data);


})

.catch((error)=>{


console.log(
"History error:",
error
);


});


},[userId]);







// LOAD FIRST TIME

useEffect(()=>{


const run = async()=>{

await loadChats();

};


run();



window.addEventListener(
"chatUpdated",
loadChats
);



return()=>{


window.removeEventListener(
"chatUpdated",
loadChats
);


};


},[loadChats]);









// AUTO SCROLL HISTORY

useEffect(()=>{


if(historyRef.current){


historyRef.current.scrollTop =

historyRef.current.scrollHeight;


}


},[chats]);









// NEW CHAT

function newChat(){


const newId =

"chat_" + Date.now();



localStorage.setItem(

"chatId",

newId

);



window.dispatchEvent(

new Event("newChat")

);


}








// OPEN CHAT

function openChat(id){


localStorage.setItem(

"chatId",

id

);



window.dispatchEvent(

new Event("loadChat")

);


}








// LOGOUT

function logout(){


localStorage.clear();


navigate("/login");


}









return(



<div className= "sidebar">





<div className="sidebar-top">



<h2>

🤖 AI Planner

</h2>





<button onClick={newChat}>

+ New Chat

</button>










</div>









<div

className="history-container"

ref={historyRef}

>



<h3>

Chats

</h3>





{

chats.length === 0 ?


<p>

No chats yet

</p>



:


chats.map((chat,index)=>(


<div


key={index}


className="chat-item"


onClick={()=>openChat(chat.chatId)}


>



{

chat.title ||

"AI Event Planner Help"

}




</div>


))


}





</div>









<div className="logout-container">



<button onClick={logout}>


Logout


</button>




</div>





</div>


)


}



export default Sidebar;
