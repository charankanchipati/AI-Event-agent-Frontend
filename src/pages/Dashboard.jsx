import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";

import "../styles/clay.css";


function Dashboard(){


return(


<div className="dashboard">


<Sidebar />



<div className="main-area">


<ChatBox />


</div>


</div>


)


}


export default Dashboard;
// // import { useState } from "react";

// import Sidebar from "../components/Sidebar";
// // import ChatBox from "../components/ChatBox";
// // import MemoryCard from "../components/MemoryCard";

// import "../styles/clay.css";



// function Dashboard(){


// // const [memory,setMemory] = useState({

// // event:"Not selected",

// // guests:"Not selected",

// // budget:"Not selected",

// // location:"Not selected"

// // });



// return(


// <div className="dashboard">


// <Sidebar />



// <div className="main-area">



// {/* <div className="top-card">


// <h1>
// 🤖 AI Event Planner Agent
// </h1>


// <p>
// Status: 🟢 Ready
// </p>



// </div> */}




// {/* <MemoryCard memory={memory} />




// <ChatBox setMemory={setMemory}/> */}



// </div>


// </div>


// )


// }


// export default Dashboard;