const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const thumbsContainer = document.querySelector(".slider-container");

//Con un ciclo for svolgiamo la funzione per creare la thumb e lo appendiamo in pagina
images.forEach(element => {
    const thumb = createthumb(images);  
    thumb.innerHTML += ` <img src="${element.image}" alt="">`;
    thumbsContainer.append(thumb);
});
//Prendiamo dal DOM gli elementi che ci servono
const sliderThumb = document.querySelectorAll(".slider-item");
console.log(sliderThumb);
const sliderWrapper = document.querySelector(".slider-wrapper");
console.log(sliderWrapper);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
console.log(prevBtn, nextBtn);

//Creiamo dinamicamente gli elementi per la descrizione dell'immagine corrente
let descriptionDiv = document.createElement("div");
descriptionDiv.classList.add("description");
const imageTitle = document.createElement("h3");
console.log(imageTitle);
const imageText = document.createElement("p");
console.log(imageText);

//inizializziamo la posizione iniziale dell'active
let activePosition = 0;
sliderThumb[activePosition].classList.remove("obscured");
sliderThumb[activePosition].classList.add("active");
sliderWrapper.innerHTML = `<img src="${images[activePosition].image}" alt="">`;
sliderWrapper.append(descriptionDiv);
descriptionDiv.append(imageTitle);
descriptionDiv.append(imageText);
imageTitle.innerHTML = `${images[activePosition].title}`;
imageText.innerHTML = `${images[activePosition].text}`;

//Al click del bottone next
nextBtn.addEventListener("click", function(){
    
   mouveNextActiveAndChangeDescription(sliderThumb, images, imageTitle, imageText, sliderWrapper);
  
})

//Al click de  bottone prev
prevBtn.addEventListener("click", function(){
    
    mouvePrevActiveAndChangeDescription(sliderThumb, images, imageTitle, imageText, sliderWrapper);
   
 })

//funzione per creare una thumb
function createthumb(array){
    //Creiamo l'elemento div
    const thumb = document.createElement("div");
    //Gli aggiungiamo le classi slide-item e obscured
    thumb.classList.add("slider-item");
    thumb.classList.add("obscured");
    return thumb;   
}
//funzione per gestire l'active su nextBtn
function mouveNextActiveAndChangeDescription(array,array1, htmlElement1, htmlElement2,wrapper){
    
   
    //Se la posizione attuale è minore della lunghezza dell' array
    if(activePosition < array.length){
        //rimuoviamo la classe active aggiungiamo obscured nella nuova attuale posizione
        array[activePosition].classList.remove("active");
        array[activePosition].classList.add("obscured");

        //Inscrementiamo di posizione
        activePosition++;

        //Se la nuova posizione attuale è uguale alla lunghezza dell'array lo resettiamo a 0
        if(activePosition == array.length){
        activePosition = 0;
        }

        //rimuoviamo la classe hidden aggiungiamo active nell nuova attuale posizione
        array[activePosition].classList.remove("obscured");
        array[activePosition].classList.add("active");
        //inseriamo in pagina  l'immagine corrente
        wrapper.innerHTML = `<img src="${array1[activePosition].image}" alt="">`;
        //appendiamo in seguito il div per la descrizione
        wrapper.append(descriptionDiv);
        //in cui appendiamo gli elementi semantici
        descriptionDiv.append(htmlElement1);
        descriptionDiv.append(htmlElement2);
        //all'inteno dei quali andiamo a scrivere as sua volta il titolo e la descrizionr corrispondente
        htmlElement1.innerHTML = `${array1[activePosition].title}`;
        htmlElement2.innerHTML = `${array1[activePosition].text}`;
    }
}

//funzione per gestire l'active su prevBtn
function mouvePrevActiveAndChangeDescription(array,array1, htmlElement1, htmlElement2,wrapper){
    
   
     //Se la posizione attuale è maggiore uguale di 0
    if(activePosition >= 0){
        //rimuoviamo la classe active e aggiungiamo obscured
        array[activePosition].classList.remove("active");
        array[activePosition].classList.add("obscured");

        // se la posizione attuale è ugualè a 0  lo riinizializziamo alla lunghezza dell' array
        if(activePosition == 0){
            activePosition = array.length;
            }
        
        //decrementiamo di posizione
        activePosition--;

        
        //rimuoviamo la classe hidden aggiungiamo active nell nuova attuale posizione
        array[activePosition].classList.remove("obscured");
        array[activePosition].classList.add("active");
        //inseriamo in pagina  l'immagine corrente
        wrapper.innerHTML = `<img src="${array1[activePosition].image}" alt="">`;
        //appendiamo in seguito il div per la descrizione
        wrapper.append(descriptionDiv);
        //in cui appendiamo gli elementi semantici
        descriptionDiv.append(htmlElement1);
        descriptionDiv.append(htmlElement2);
        //all'inteno dei quali andiamo a scrivere as sua volta il titolo e la descrizionr corrispondente
        htmlElement1.innerHTML = `${array1[activePosition].title}`;
        htmlElement2.innerHTML = `${array1[activePosition].text}`;
    }
}
    
