const hamburger = document.querySelector(".hamburger");
const navMenu =  document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
/**
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
form.addEventListener('click',function(event){event.preventDefault();
   if(name.value===""){
      error.innerHTML ="your name is required";
   }else{
    error.innerHTML="";
   }
   if(email.value===""){
     none.innerHTML ="your email is required";
   }else{
    none.innerHTML = "";
   }
   if(message.value===""){
    work.innerHTML ="your phone number is required";
   }else{
    work.innerHTML= "";
   }
})
    */ 
