function displayModal(photographe) {
    const logo = document.querySelector(".logo")
    const main = document.querySelector("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    const photographerName = document.querySelector(".photographer_name");
    photographerName.innerHTML = '';
    const namePhotographer = document.createElement("p");
    namePhotographer.innerText = photographe.name;
    photographerName.appendChild(namePhotographer);
    main.style.display = "none";
    logo.style.display = "none";

}

//validation prenom et nom
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
function verifNomPrenom(isPrenom) {
    const regexNomPrenom = /^([a-zA-Z'àâëéèê ôùûçËÀÂÉÈÔÙÛÇ-]{2,75})$/;

    const erreurPrenom = ("Veuillez entrer 2 caractères ou plus pour le champ du Prénom.");
    const erreurNom = ("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    if (isPrenom) {
        if (regexNomPrenom.test(prenom.value)) {
            return true;
        } else {
            const spanErreur = document.querySelector(".erreurPrenom");
            let span = `<span> ${erreurPrenom} </span>`;
            spanErreur.innerHTML = span;
        }
    } else {
        if (regexNomPrenom.test(nom.value)) {
            return true;
        } else {
            const spanErreur = document.querySelector(".erreurNom");
            let span = `<span> ${erreurNom} </span>`;
            spanErreur.innerHTML = span;
        }
    }
    return false;
}

//a l'entree de l'input prenom
prenom.addEventListener("focusin", () => {
    const spanRemove = document.querySelector(".erreurPrenom");
    span = ``;
    spanRemove.innerHTML = span;
}
)
//a l'entree de l'input nom
nom.addEventListener("focusin", () => {
    const spanRemove = document.querySelector(".erreurNom");
    span = ``;
    spanRemove.innerHTML = span;
})
// a la sortie des input prenom et nom
prenom.addEventListener("focusout", () => verifNomPrenom(true));
nom.addEventListener("focusout", () => verifNomPrenom(false));

//validation email
const email = document.getElementById("email");
function verifMail() {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const erreurMail = ("Veuillez entrer un email Valide.");
    if (regexEmail.test(email.value)) {
        return true;
    } else {
        const mailErreur = document.querySelector(".erreurMail");
        let span = `<span> ${erreurMail} </span>`;
        mailErreur.innerHTML = span;
        return false;
    }
}
//a l'entree de l'input email
email.addEventListener("focusin", () => {
    const spanRemove = document.querySelector(".erreurMail");
    span = ``;
    spanRemove.innerHTML = span;
})
// a la sortie des input email
email.addEventListener("focusout", verifMail);


//validation Message
const message = document.getElementById("message");
function verifMessage() {
    const regexMessage = /^[a-zA-Z0-9.,!?:;' \n\r\t]{2,2000}$/;
    const erreurMessage = ("Veuillez entrer un message Valide.");
    if (regexMessage.test(message.value)) {
        return true;
    } else {
        const messageErreur = document.querySelector(".erreurMessage");
        let span = `<span> ${erreurMessage} </span>`;
        messageErreur.innerHTML = span;
        return false;
    }
}
//a l'entree au textarea message
message.addEventListener("focusin", () => {
    const spanRemove = document.querySelector(".erreurMessage");
    span = ``;
    spanRemove.innerHTML = span;
})
// a la sortie du textarea message
message.addEventListener("focusout", verifMessage);

function sendMessage() {
    const prenomUser = document.getElementById("prenom");
    const nomUser = document.getElementById("nom");
    const emailUser = document.getElementById("email");
    const messageUser = document.getElementById("message");
    console.log(prenomUser.value);
    console.log(nomUser.value);
    console.log(emailUser.value);
    console.log(messageUser.value);
}
// Sélection du bouton de contact
const btnContact = document.querySelector(".contact_button");
//fontion pour effacer le formulaire
function resetData() {
    document.getElementById("formulaireContact").reset();
};

btnContact.addEventListener('click', () => {
    // Appel de la fonction pour afficher la modal contact avec les détails du photographe
    displayModal(photographe);
});
//validation et envoi message via formulaire contact
const btnEnvoyer = document.getElementById("send-message");
btnEnvoyer.addEventListener("click", () => {
    if (verifNomPrenom(true) && verifNomPrenom(false) && verifMail() && verifMessage()) {
        closeModal();
        sendMessage();
        resetData();
    }
});
function closeModal() {
    const logo = document.querySelector(".logo")
    const main = document.querySelector("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.display = "block";
    logo.style.display = "block";
}

document.querySelector('#closeModal').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        closeModal()
    }
});
