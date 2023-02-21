function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar! </b>";
}

function redirecionar(){
    window.open("https://globallabs.academy");
    window.location.href = "https://globallabs.academy";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado! "
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui! "
}

function trocar2(elemento){
    elemento.innerHTML = "Obrigado! "
}

function voltar2(elemento){
    elemento.innerHTML = "Passe o mouse aqui! "
}

function load(){
    alert("página carregada!")
}

function funcaoChange(elemento){
    alert(elemento.value)
}