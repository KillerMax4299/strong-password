
  document.getElementById("password").onfocus = ()=>{
    document.querySelector("#passfield").style.borderColor = "Dodgerblue"
    document.querySelector("#passfield").style.boxShadow = "0px 0px 10px 0px rgba(30,144,255,0.59)"
  }
  document.getElementById("password").onblur = ()=>{
    document.querySelector("#passfield").style.borderColor = "grey"
    document.querySelector("#passfield").style.boxShadow = "0px 0px 0px 0px rgba(30,144,255,0.59)"
  }
  // box-shadow: 0px 0px 10px 0px rgba(30,144,255,0.59);
