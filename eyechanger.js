function eyeclicked(e){
  iconchange()
  typechange(e.previousElementSibling)
}

function iconchange(){
  let a = document.getElementById("visible").innerHTML
  if(a=="visibility"){
    document.getElementById("visible").innerHTML = "visibility_off"
  }
  else if(a!= "visibility"){
    document.getElementById("visible").innerHTML = "visibility"
  }
}
function makevisible(e){
  if(e.value.length >0){
    e.nextElementSibling.style.visibility = "visible";
  }
  else if(e.value.length === 0){
    e.nextElementSibling.style.visibility = "hidden";
  }
  document.getElementById("lengths").innerHTML = `length remaining<span><b> ${30-e.value.length}</b></span>`

}


function typechange(e){
  if(e.type == "text"){
    e.type = "password";
  }
  else if(e.type == "password"){
    e.type = "text";
  }
}