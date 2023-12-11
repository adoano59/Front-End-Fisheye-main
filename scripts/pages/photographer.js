// Récupération de l'ID du photographe depuis l'URL
const params = new URLSearchParams(window.location.search);
const photographeId = params.get('id');

const detailsPhotographe = document.querySelector(".profil");
const portraitPhotographe = document.querySelector(".portrait");
const media = document.querySelector(".media");

let photographe = null;
let mediaClicked = 0;


// Récupération des données du photographe depuis un fichier JSON 
async function getPhotographeData() {
    const reponse = await fetch('../data/photographers.json');
    const fiches = await reponse.json();
    
    // Trouver le photographe correspondant à l'ID
    
    photographe = fiches.photographers.find(p => p.id == photographeId);
    let totalLikes = 0;
    const photographerModel = photographerTemplate(photographe);
    photographerModel.displayPhotograperInfo(detailsPhotographe, portraitPhotographe);
    const photographerMedias = fiches.media.filter(m => m.photographerId == photographe.id);
    photographerMedias.forEach((currentMedia,index) => {
        const card = document.createElement("section");
        media.appendChild(card);
        //on encvoi a la factorie le tableau du photographe
        mediaTemplate(currentMedia,photographe.name,photographerMedias).displayMedia(card,index,mediaClicked);
        // Ajouter les likes de chaque média au total
        totalLikes += currentMedia.likes;
        
    });
    
    
    const boxLikePrice = document.querySelector(".globalLikes");
    const totalLike = document.createElement("p");
    totalLike.innerHTML = `<span id="totalLikes">${totalLikes}</span> <i class="fa-solid fa-heart"></i>`;
    boxLikePrice.appendChild(totalLike);
    const priceEl = document.createElement("p");
    priceEl.innerText = `${photographe.price} €/jour`;
    boxLikePrice.appendChild(priceEl);
    
    
    //fonction affichage du tri 
    function updateMediaDisplay(sortedMedia) {
        // Effacez le contenu actuel de la section media
        media.innerHTML = "";
        
        // Affichez les médias triés
        sortedMedia.forEach((currentMedia,index) => {
            const card = document.createElement("section");
            media.appendChild(card);
            mediaTemplate(currentMedia,photographe.name,sortedMedia).displayMedia(card,index,mediaClicked);
        });
    }
    
    const mediasPhotographe = fiches.media.filter(m => m.photographerId == photographe.id);
    const trier = document.querySelector("#sortSelect");
    
    
    trier.addEventListener("change", function () {
        const triChoisi = trier.value;
        if (triChoisi === 'popularity') {
            mediasPhotographe.sort(function (a, b) {
                return b.likes - a.likes;
            });
            updateMediaDisplay(mediasPhotographe);
        } else {
            if (triChoisi === 'date') {
                mediasPhotographe.sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date);
                });
                updateMediaDisplay(mediasPhotographe);
            } else {
                mediasPhotographe.sort(function (a, b) {
                    return a.title.localeCompare(b.title);
                });
                updateMediaDisplay(mediasPhotographe);
            }
        }
    });
    
}

// Appel de la fonction pour afficher les détails du photographe
getPhotographeData();


