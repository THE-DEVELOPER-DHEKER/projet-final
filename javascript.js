// *********************************NAME validation***************************************
let name = document.getElementById("name");
//check empty
name.addEventListener('blur',function(){
    if(name.value=="") { 
        document.getElementById("messageForName").innerHTML = "Fill your Name please !" ;
    }
    else{
        document.getElementById("messageForName").innerHTML="";
    }
})

name.addEventListener("change" , function(){
    if(name.value.length < 5){
        name.setAttribute('class','form-control is-invalid');
        name.focus() ;
    }
    else{
        name.setAttribute('class','form-control is-valid') ;
    }
})

// *********************************EMAIL validation***************************************
let mail = document.getElementById("email");
var regexEmail = /\S+@\S+\.\S+/; //regular expression
//check empty
mail.addEventListener('blur',function(){
    if(mail.value=="") { 
        document.getElementById("messageForEmail").innerHTML = "Fill your Email please !" ;
    }
    else{
        document.getElementById("messageForEmail").innerHTML="";
    }
})

mail.addEventListener('change', function(){
    if(!mail.value.match(regexEmail) || mail.value==""){
        email.setAttribute('class','form-control is-invalid');
        email.focus();
    }
    else{
        mail.setAttribute('class','form-control is-valid') ;
    }
    
})
// *********************************PASSWORD validation***************************************
var pw=document.getElementById("password");
var regexPass =/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,})/ ;
//check empty
pw.addEventListener('blur',function(){
    if(pw.value=="") { 
        document.getElementById("messageForPassword").innerHTML = "Fill the password please !" ;
    }
    else{
        document.getElementById("messageForPassword").innerHTML="";
    }
})
pw.addEventListener('change' , function(){
    if(!pw.value.match(regexPass) || pw.value==""){
        pw.setAttribute('class','form-control is-invalid');
        pw.focus();
    }
    else{
        pw.setAttribute('class','form-control is-valid') ;
    }
})
// *********************************PHONE NUMBER validation***************************************
number = document.querySelector("#number");
var regexPhone= /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/; //contains only digits
//check empty
number.addEventListener('blur',function(){
    if(number.value=="") { 
        document.getElementById("messageForNumber").innerHTML = "Fill your Number please !" ;
    }
    else{
        document.getElementById("messageForNumber").innerHTML="";
    }
})
number.addEventListener("change" , function(){
    if(!number.value.match(regexPhone) || number.value.length != 8){
        number.setAttribute('class','form-control is-invalid');
        number.focus();
    }
    else{
        number.setAttribute('class','form-control is-valid') ;
    }
})
