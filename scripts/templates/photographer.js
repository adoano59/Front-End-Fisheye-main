// Fonction photographerTemplate qui prend un objet de données en paramètre
function photographerTemplate(data) {
    // Destructuration de l'objet de données pour extraire les propriétés pertinentes
    const { name, portrait, city, country, tagline, price, id } = data;

    // Fonction interne pour créer la carte du photographe
    function createPhotographerCard() {
        // Création d'une balise dédiée à une fiche de photographe
        const ficheElement = document.createElement("div");

        // Création des balises pour les différentes informations du photographe
        const imageDiv = document.createElement("div");
        imageDiv.className = ("image-container");
        const imageElement = document.createElement("img");
        imageElement.src = portrait;
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
        ficheElement.appendChild(imageDiv);
        ficheElement.appendChild(nomElement);
        ficheElement.appendChild(locationElement);
        ficheElement.appendChild(descriptionElement);
        ficheElement.appendChild(priceElement);

        // Ajout d'un événement de clic pour rediriger vers la page du photographe
        ficheElement.addEventListener("click", () => {
            openInNewTab(`photographer.html?id=${id}`);
        });

        // Retourne la fiche du photographe
        return ficheElement;
    }

    // Fonction interne pour afficher les informations détaillées du photographe
    function displayPhotograperInfo(detailsPhotographe, portraitPhotographe) {
        // Sélection du bouton de contact
        const btnContact = document.querySelector(".contact_button");
        btnContact.addEventListener('click', () => {
            // Appel de la fonction pour afficher la modal avec les détails du photographe
            displayModal(photographe);
        });

        // Affichage des détails du photographe
        const nomElement = document.createElement("h2");
        nomElement.innerText = name;
        detailsPhotographe.appendChild(nomElement);
        const locationElement = document.createElement("h5");
        locationElement.innerText = city + ", " + country;
        detailsPhotographe.appendChild(locationElement);
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = tagline;
        detailsPhotographe.appendChild(descriptionElement);
        const imageElement = document.createElement("img");
        imageElement.src = portrait;
        portraitPhotographe.appendChild(imageElement);
    }

    // Retourne un objet avec les fonctions createPhotographerCard et displayPhotograperInfo
    return { createPhotographerCard, displayPhotograperInfo };
}
