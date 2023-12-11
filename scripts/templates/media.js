// Fonction mediaTemplate qui prend un objet de données en paramètre
function mediaTemplate(data, photographerName, medias) {
    // Destructuration de l'objet de données pour extraire les propriétés pertinentes
    const { image, video, title, likes } = data;

    // Fonction interne displayMedia qui prend un élément card en paramètre
    function displayMedia(card, index, mediaClicked) {

        // Sélectionne l'URL de l'image ou de la vidéo
        const url = `/Sample Photos/${photographerName}/${image || video}`;

        // Vérifie si l'URL se termine par ".mp4", ce qui indique une vidéo
        if (url && url.endsWith(".mp4")) {
            // Crée un élément <a> pour la vidéo avec des contrôles et l'ajoute à la carte
            const video = document.createElement("a");
            video.href = url;
            video.controls = true;
            const vidElement = document.createElement("video");
            vidElement.src = url;
            vidElement.id = `${video}`;
            vidElement.addEventListener("click", () => {
                console.log("efefze")
            });
            video.appendChild(vidElement);
            card.appendChild(video);
        } else if (url) {
            const image = document.createElement("a");
            image.href = url;
            const imgElement = document.createElement("img");
            imgElement.src = url;
            imgElement.id = `${image}`;
            const modalLightbox = document.getElementById("lightbox-Modal");
            const modalImage = document.getElementById("modalImage");
            // Ajoute un événement de clic pour ouvrir la modale
            imgElement.addEventListener("click", (event) => {
                event.preventDefault(); // Empêche le comportement par défaut du lien


                // Définir la source de l'image dans la modale
                modalImage.src = url;
                mediaClicked=index;
                // Afficher la modale
                modalLightbox.style.display = 'flex';
            });

            const flecheDroite = document.querySelector(".next");
            flecheDroite.addEventListener("click", () => {
                console.log(index);
                mediaClicked++
                console.log(medias);
                modalImage.src=`/Sample Photos/${photographerName}/${medias[mediaClicked].image || medias[mediaClicked].video}`;

            })
            const flecheGauche = document.querySelector(".previous");
            flecheGauche.addEventListener("click", () => {
                console.log(index);
                mediaClicked--
                console.log(medias);
                modalImage.src=`/Sample Photos/${photographerName}/${medias[mediaClicked].image || medias[mediaClicked].video}`;

            })
            const close=document.querySelector(".close-modalLightBox");
            close.addEventListener("click", () => {
                // Cacher la modal lightbox
                modalLightbox.style.display = 'none';
            });

            image.appendChild(imgElement);
            card.appendChild(image);
        }

        // Crée un conteneur pour la description et l'ajoute à la carte
        const descripCard = document.createElement("div");
        card.appendChild(descripCard);

        // Crée un titre <h5> avec le texte du titre et l'ajoute à la description
        const titleH5 = document.createElement("h5");
        titleH5.innerText = title;
        descripCard.appendChild(titleH5);

        // Crée un bouton de like et un paragraphe pour afficher les likes
        const btnLike = document.createElement("button");
        btnLike.className = 'bouton-like';
        const likesP = document.createElement("p");
        likesP.innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`;
        descripCard.appendChild(btnLike);
        btnLike.appendChild(likesP);

        // Ajoute un écouteur d'événements au bouton de like pour incrémenter le nombre de likes
        btnLike.addEventListener('click', () => {
            // Incrémente le nombre de likes
            data.likes++;
            let totalLikes = document.getElementById("totalLikes");
            let newLike = parseInt(totalLikes.innerText) + 1;
            totalLikes.innerHTML = newLike;

            // Met à jour le contenu du paragraphe avec le nouveau nombre de likes
            likesP.innerHTML = `${data.likes} <i class="fa-solid fa-heart"></i>`;
        });

    }

    // Retourne un objet avec la fonction displayMedia
    return { displayMedia };
}