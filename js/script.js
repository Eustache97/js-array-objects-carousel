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

//Creiamo dinamicamente gli elementi per la descrizione dell'immagine corrente
let descriptionDiv = document.createElement("div");
descriptionDiv.classList.add("description");
const imageTitle = document.createElement("h3");
console.log(imageTitle);
const imageText = document.createElement("p");
console.log(imageText);
const sliderWrapper = document.querySelector(".slider-wrapper");
console.log(sliderWrapper);
/*Con un ciclo for svolgiamo la funzione per creare la thumb e quella per creare lo slider
 e li appendiamo in pagina*/
images.forEach(element => {
    const thumb = createthumb();
    const slider = createSlider();
    thumb.innerHTML += ` <img src="${element.image}" alt="">`;
    slider.innerHTML += `<img src="${element.image}" alt="">`;
    thumbsContainer.append(thumb);
    sliderWrapper.append(slider);
});
//Prendiamo dal DOM gli elementi che ci servono
const containerThumb = document.querySelectorAll(".slider-item");
console.log(containerThumb);
const containerSlider = document.querySelectorAll(".slider");
console.log(containerSlider);

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
console.log(prevBtn, nextBtn);



//inizializziamo la posizione iniziale dell'active
let activePosition = 0;
containerThumb[activePosition].classList.remove("obscured");
containerThumb[activePosition].classList.add("active");
containerSlider[activePosition].classList.remove("d-none");
containerSlider[activePosition].classList.add("d-block");
//Inizializziamo la descrizione del primo elemento 
sliderWrapper.append(descriptionDiv);
descriptionDiv.append(imageTitle);
descriptionDiv.append(imageText);
imageTitle.innerHTML = `${images[activePosition].title}`;
imageText.innerHTML = `${images[activePosition].text}`;
//andiamo a defire il click sui thumbs
for(let i = 0; i < containerThumb.length; i++){
        const thisThumb = containerThumb[i];
        thisThumb.addEventListener("click", function() {
            //Cancelliamo active  dal thumb e aggiungiamo obscured
            containerThumb[activePosition].classList.remove("active");
            containerThumb[activePosition].classList.add("obscured");
            //calcelliamo d-block dallo slider e aggiungiamo d-none
            containerSlider[activePosition].classList.remove("d-block");
            containerSlider[activePosition].classList.add("d-none");
    
            // Aggiorniamo la posizione attuale
            activePosition = i;
    
            // Aggiungere active e rimuoviamo obscured alla nuova posizione del thumb
            containerThumb[activePosition].classList.add("active");
            containerThumb[activePosition].classList.remove("obscured");
            // Aggiungere d-block e rimuoviamo d-none alla nuova posizione dello slider
            containerSlider[activePosition].classList.add("d-block");
            containerSlider[activePosition].classList.remove("d-none");
            //modifichiamo la descrizione dell'immagine
            imageTitle.innerHTML = `${images[activePosition].title}`;
            imageText.innerHTML = `${images[activePosition].text}`;
        });
};
//Al click del bottone next
nextBtn.addEventListener("click", function(){
    
   mouveNextActiveAndChangeDescription(containerThumb, containerSlider, images, imageTitle, imageText, sliderWrapper);
  
})

//Al click de  bottone prev
prevBtn.addEventListener("click", function(){
    
    mouvePrevActiveAndChangeDescription(containerThumb, containerSlider,images, imageTitle, imageText);
   
 })

//funzione per creare una thumb
function createthumb(){
    //Creiamo l'elemento div
    const thumb = document.createElement("div");
    //Gli aggiungiamo le classi slide-item e obscured
    thumb.classList.add("slider-item");
    thumb.classList.add("obscured");
    return thumb;   
}
function createSlider(){
    //Creiamo l'elemento div
    const slider = document.createElement("div");
    //Gli aggiungiamo la classe slider
    slider.classList.add("slider");
    slider.classList.add("d-none");
    return slider;   
}
//funzione per gestire l'active su nextBtn
function mouveNextActiveAndChangeDescription(array,array1,array2, htmlElement1, htmlElement2){
    
   
    //Se la posizione attuale è minore della lunghezza dell' array
    if(activePosition < array.length){
        //rimuoviamo la classe active aggiungiamo obscured 
        array[activePosition].classList.remove("active");
        array[activePosition].classList.add("obscured");
        //rimuoviamo la classe d-block aggiungiamo d-none 
        array1[activePosition].classList.remove("d-block");
        array1[activePosition].classList.add("d-none");

        //Inscrementiamo di posizione
        activePosition++;

        //Se la nuova posizione attuale è uguale alla lunghezza dell'array lo resettiamo a 0
        if(activePosition == array.length){
        activePosition = 0;
        }

        //rimuoviamo la classe obscured aggiungiamo active nella nuova attuale posizione
        array[activePosition].classList.remove("obscured");
        array[activePosition].classList.add("active");
        //rimuoviamo la classe d-none aggiungiamo dblock nella nuova attuale posizione
        array1[activePosition].classList.remove("d-none");
        array1[activePosition].classList.add("d-block");
        
        //all'inteno degli elementi di descrizione andiamo a scrivere a sua volta il titolo e la descrizione corrispondente
        htmlElement1.innerHTML = `${array2[activePosition].title}`;
        htmlElement2.innerHTML = `${array2[activePosition].text}`;
    }
}

//funzione per gestire l'active su prevBtn
function mouvePrevActiveAndChangeDescription(array,array1,array2, htmlElement1, htmlElement2){
    
   
     //Se la posizione attuale è maggiore uguale di 0
    if(activePosition >= 0){
        //rimuoviamo la classe active e aggiungiamo obscured
        array[activePosition].classList.remove("active");
        array[activePosition].classList.add("obscured");
        //rimuoviamo la classe d-block aggiungiamo d-none
        array1[activePosition].classList.remove("d-block");
        array1[activePosition].classList.add("d-none");

        // se la posizione attuale è ugualè a 0  lo riinizializziamo alla lunghezza dell' array
        if(activePosition == 0){
            activePosition = array.length;
            }
        
        //decrementiamo di posizione
        activePosition--;

        
        //rimuoviamo la classe hidden aggiungiamo active nell nuova attuale posizione
        array[activePosition].classList.remove("obscured");
        array[activePosition].classList.add("active");
        //rimuoviamo la classe d-none aggiungiamo dblock nella nuova attuale posizione
        array1[activePosition].classList.remove("d-none");
        array1[activePosition].classList.add("d-block");

        
        //all'inteno dei quali andiamo a scrivere as sua volta il titolo e la descrizionr corrispondente
        htmlElement1.innerHTML = `${array2[activePosition].title}`;
        htmlElement2.innerHTML = `${array2[activePosition].text}`;
    }
}
    
