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
    console.log(namePhotographer);
    main.style.display = "none";
    logo.style.display = "none";

}

function closeModal() {
    const logo = document.querySelector(".logo")
    const main = document.querySelector("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.display = "block";
    logo.style.display = "block";
}
