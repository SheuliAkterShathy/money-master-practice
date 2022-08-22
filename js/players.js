let playerArray = [];
function display(players){
    const div = document.getElementById('players');
         if(players.length>5){
             alert('players will not be more than 5');
           return;
}
div.innerHTML="";
   
   for(let i=0; i<players.length;i++){
       
         const name = players[i];  
         const ul = document.createElement("ul");
         ul.innerHTML = `
         <li class="list-group-numbered me-1">${i+1}.  ${name}</li>
         `
         div.appendChild(ul);     
      }
}
function addPlayers(element){
   
    
    const playerName = (element.parentNode.children[0].innerText);
    playerArray.push(playerName);
    display(playerArray);
    element.disabled=true;
    
}