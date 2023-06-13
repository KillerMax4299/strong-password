

$("#password").on("input", function() {
var name = $(this).val();
name = name.replace(/\s/g,'')
name = name.replace("_","")

$(this).val(name)
  numeric(name)
  lower(name)
  upper(name)
  special(name)
  lengths(name)
});

function numeric(e){
  let numeric = /\d/
  if(numeric.test(e)){
    document.getElementsByClassName("stat")[2].classList.add("valid")
  }
  if(!numeric.test(e)){
    document.getElementsByClassName("stat")[2].classList.remove("valid")
  }
}

function lower(e){
  let alpha = /[a-z]/
  if(alpha.test(e)){
    document.getElementsByClassName("stat")[1].classList.add("valid")
  }
  if(!alpha.test(e)){
    document.getElementsByClassName("stat")[1].classList.remove("valid")
  }
}

function upper(e){
  let alpha = /[A-Z]/
  if(alpha.test(e)){
    document.getElementsByClassName("stat")[0].classList.add("valid")
  }
  if(!alpha.test(e)){
    document.getElementsByClassName("stat")[0].classList.remove("valid")
  }

}

function special(e){
  let special = /[\W\s]/
  if(special.test(e)){
    document.getElementsByClassName("stat")[3].classList.add("valid")
  }
  if(!special.test(e)){
    document.getElementsByClassName("stat")[3].classList.remove("valid")
  }
}

function lengths(e){
  let length = /^.{8,}$/
  if(length.test(e)){
    document.getElementsByClassName("stat")[4].classList.add("valid")
  }
  if(!length.test(e)){
    document.getElementsByClassName("stat")[4].classList.remove("valid")
  }
}

