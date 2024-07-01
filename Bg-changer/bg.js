const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener('click',(e)=>{
      console.log(e);
      console.log(e.target.id);
      if(e.target.id === "grey"){
        body.style.backgroundColor=e.target.id
      }
      else if(e.target.id === "green"){
        body.style.backgroundColor=e.target.id
      }
      else if(e.target.id === "red"){
        body.style.backgroundColor=e.target.id
      }
      else if(e.target.id === "blue"){
        body.style.backgroundColor=e.target.id
      }
    })
})