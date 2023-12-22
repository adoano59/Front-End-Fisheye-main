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

function closeModal() {
    const logo = document.querySelector(".logo")
    const main = document.querySelector("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.display = "block";
    logo.style.display = "block";
}
