let playerArray = [];
function display(players){
    const div = document.getElementById('players');
    div.innerHTML="";
    for(let i=0; i<players.length;i++){
       const name = players[i];
       const ul = document.createElement("ul");
       ul.innerHTML = `
       <li>${name}</li>
       `
       div.appendChild(ul);
    }
}

const items=document.getElementsByClassName('select-btn');
for(const item of items){
item.addEventListener('click',function(event){
    
// event.target.parentNode.removeChild(event.target);
const playerName = (event.target.parentNode.children[0].innerText);
playerArray.push(playerName);
display(playerArray);
})
}