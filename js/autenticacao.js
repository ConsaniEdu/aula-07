const nome= document.getElementById("nome");
const senha= document.getElementById("senha");

document.getElementsByClassName("formLogin")[0].addEventListener("submit", function (e) {
    e.preventDefault();
    
    if(nome.value.trim()==""||senha.value.trim()==""){
        alert("preencha os campos");
    }
    
    else{
        alert("login bem-sucedido");
        window.location.href ="https://www.youtube.com/";
    }
});