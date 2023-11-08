async function recupData() {


    // Récupération des pièces depuis le fichier JSON
    const reponse = await fetch('../data/photographers.json');
    const fiches = await reponse.json();
    console.log(fiches);
    const sectionFiches = document.querySelector(".photographer_section"); 

    for (let i = 0; i < fiches.photographers.length; i++) {
        const carte = fiches.photographers[i];

        // Création d’une balise dédiée à une fiche de Photographe (remplacement de "carte" par "div")
        const ficheElement = document.createElement("div");

        // Création des balises
        const imageElement = document.createElement("img");
        imageElement.src = carte.portrait;

        const nomElement = document.createElement("h2");
        nomElement.innerText = carte.name;

        const locationElement = document.createElement("h5");
        locationElement.innerText = carte.city + ", " + carte.country;
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = carte.tagline;
        const priceElement = document.createElement("h6");
        priceElement.innerText = carte.price + "€/jour ";

        // On rattache la balise ficheElement à la section Fiches
        sectionFiches.appendChild(ficheElement);

        // On rattache l’image à ficheElement (la balise carte)
        ficheElement.appendChild(imageElement);
        ficheElement.appendChild(nomElement);
        ficheElement.appendChild(locationElement);
        ficheElement.appendChild(descriptionElement);
        ficheElement.appendChild(priceElement);
    }

    // au choix d'une fiche de photographe
    const ficheClick = document.querySelector(".photographer_section div");
    ficheClick.addEventListener("click",()=>{
        let message = prompt("merci");
    })
}
recupData();


/*
async function getPhotographers() {
        // et bien retourner le tableau photographers seulement une fois récupéré
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();*/

