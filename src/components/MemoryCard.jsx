function MemoryCard({memory}){


return(


<div className="memory-card">


<h3>
🧠 Agent Memory
</h3>



<p>
🎉 Event: {memory.event}
</p> 


<p>
👥 Guests: {memory.guests}
</p>


<p>
💰 Budget: {memory.budget}
</p>


<p>
📍 Location: {memory.location}
</p>



</div>


)


}


export default MemoryCard;