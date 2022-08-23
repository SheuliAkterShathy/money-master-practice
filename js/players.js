let playerArray = [];
function display(players){
    const div = document.getElementById('players');
        
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
    if(playerArray.length<5){
        playerArray.push(playerName);
         
    }
    else{
        alert('You can not choose more than 5 players.')
        return;
    }
    
    document.getElementById('favourites').innerText=playerArray.length;
    display(playerArray);
     element.disabled=true;
   
 
}