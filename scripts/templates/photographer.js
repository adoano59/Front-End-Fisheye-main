// Fonction photographerTemplate qui prend un objet de données en paramètre
function photographerTemplate(data) {
    // Destructuration de l'objet de données pour extraire les propriétés pertinentes
    const { name, portrait, city, country, tagline, price, id } = data;
    // Fonction interne pour créer la carte du photographe
    function createPhotographerCard() {
        // Création d'une balise dédiée à une fiche de photographe
        const ficheElement = document.createElement("div");
        //box pour la photo du photographe
        const cardImg = document.createElement("section");
        cardImg.tabIndex = 0;
        //box pour les infos du photographe
        const cardInfo = document.createElement("section");
        cardInfo.tabIndex = 0;
        // Création des balises pour les différentes informations du photographe
        const imageDiv = document.createElement("div");
        imageDiv.className = ("image-container");
        const imageElement = document.createElement("img");
        imageElement.src = portrait;
        imageElement.alt = tagline;
        imageDiv.appendChild(imageElement);
        const nomElement = document.createElement("h2");
        nomElement.innerText = name;
        const locationElement = document.createElement("h5");
        locationElement.innerText = city + ", " + country;
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = tagline;
        const priceElement = document.createElement("h6");
        priceElement.innerText = price + "€/jour ";
        // Ajout des éléments à la fiche du photographe
        cardImg.appendChild(imageDiv);
        cardImg.appendChild(nomElement);
        cardInfo.appendChild(locationElement);
        cardInfo.appendChild(descriptionElement);
        cardInfo.appendChild(priceElement);
        ficheElement.appendChild(cardImg);
        ficheElement.appendChild(cardInfo);

        // Ajout d'un événement de clic pour rediriger ver
        //la page du photographe
        ficheElement.addEventListener("click", () => {
            openInNewTab(`photographer.html?id=${id}`);
        });
        // Ajout d'un événement de keypress par clavier pour 
        //rediriger vers la page du photographe
        ficheElement.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                openInNewTab(`photographer.html?id=${id}`);
            }
        });
        // Retourne la fiche du photographe
        return ficheElement;
    }

    // Fonction interne pour afficher les informations détaillées du photographe
    function displayPhotograperInfo(detailsPhotographe, portraitPhotographe) {
        // Affichage des détails du photographe
        const nomElement = document.createElement("h2");
        nomElement.innerText = name;
        nomElement.tabIndex = 0;
        detailsPhotographe.appendChild(nomElement);
        const detailPhotographer = document.createElement("section");
        detailPhotographer.tabIndex = 0;
        const locationElement = document.createElement("h5");
        locationElement.innerText = city + ", " + country;
        detailPhotographer.appendChild(locationElement);
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = tagline;
        detailPhotographer.appendChild(descriptionElement);
        detailsPhotographe.appendChild(detailPhotographer);
        const imageElement = document.createElement("img");
        imageElement.src = portrait;
        imageElement.tabIndex = 0;
        portraitPhotographe.appendChild(imageElement);

    }

    // Retourne un objet avec les fonctions createPhotographerCard et displayPhotograperInfo
    return { createPhotographerCard, displayPhotograperInfo };
}
