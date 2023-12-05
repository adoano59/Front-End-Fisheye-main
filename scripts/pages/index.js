function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
}
async function recupData() {
    // Récupération des pièces depuis le fichier JSON
    const reponse = await fetch('../data/photographers.json');
    const fiches = await reponse.json();
    const sectionFiches = document.querySelector(".photographer_section");

    for (let i = 0; i < fiches.photographers.length; i++) {
        const carte = fiches.photographers[i];
        const photographerModel = photographerTemplate(carte);
        const ficheElement = photographerModel.createPhotographerCard();
        sectionFiches.appendChild(ficheElement);

    }
}
recupData();
