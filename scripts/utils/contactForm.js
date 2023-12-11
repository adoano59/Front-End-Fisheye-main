function displayModal(photographe) {
    const logo = document.querySelector(".logo")
    const main = document.querySelector("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    const photographerName = document.querySelector(".photographer_name");
    photographerName.innerHTML='';
    const namePhotographer = document.createElement("p");
    namePhotographer.innerText = photographe.name;
    photographerName.appendChild(namePhotographer);
    main.style.display = "none";
    logo.style.display = "none";
   
}

function sendMessage(){
    const prenomUser=document.getElementById("prenom");
    const nomUser =document.getElementById("nom");
    const emailUser=document.getElementById("email");
    const messageUser=document.getElementById("message");
        console.log(prenomUser.value);
        console.log(nomUser.value);
        console.log(emailUser.value);
        console.log(messageUser.value);
    
}

function closeModal() {
    const logo = document.querySelector(".logo")
    const main = document.querySelector("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.display = "block";
    logo.style.display = "block";
}
