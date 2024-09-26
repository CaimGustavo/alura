const formulario = document.querySelector("#formulario")
  const botao =document.querySelector("#botao")
  const senha = document.querySelector("#senha")
  const senhadois=document.querySelector("#se hadois")
  const div_horas = document.querySelector("#div_horas")
  const lista = document.querySelector("#nav-list")
  const line = document.querySelectorAll(".line")
  const barra =document.querySelector("#X")
  
const menu = document.querySelector(".mobile-menu")
 const imagem =document.querySelector("#imagem") 
 
line.forEach((el)=>{
el.addEventListener("click",(evt)=>{
 lista.style.display="block"
 barra.style.display="block"
menu.style.display="none"
lista.classList.add("class","active")
})  
})

barra.addEventListener("click",(evt)=>{
lista.style.display="none" 
barra.style.display="none"
menu.style.display="block"
lista.classList.remove("class","active")
})

formulario.addEventListener("submit",(evt)=>{
evt.preventDefault(); 

if(senha.value !== senhadois.value){
alert("As senhas não coincidem. Por favor, verifique e tente novamente."); 
senha.focus()
return;
}
  
})

const intervalo=setInterval(function hor() {
const data = new Date()
 let hora=data.getHours()
 let min =data.getMinutes()
 let segundos =data.getSeconds()
 
 div_horas.innerHTML=hora+":"+min+":"+segundos  
  
  
}, 10);
 
  