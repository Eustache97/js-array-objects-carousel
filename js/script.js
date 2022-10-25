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

const invertAutoplayBtn = document.getElementById("invert");
const startAutoplayBtn = document.getElementById("start");
const stopAutoplayBtn = document.getElementById("stop");
stopAutoplayBtn.classList.add("d-none");
console.log(invertAutoplayBtn, startAutoplayBtn, stopAutoplayBtn);




//inizializziamo la posizione iniziale dell'active
let activePosition = 0;
setVisible();
//Inizializziamo la descrizione del primo elemento 
sliderWrapper.append(descriptionDiv);
descriptionDiv.append(imageTitle);
descriptionDiv.append(imageText);
setInfo();
//andiamo a defire il click sui thumbs
for(let i = 0; i < containerThumb.length; i++){
        const thisThumb = containerThumb[i];
        thisThumb.addEventListener("click", function() {
            /*Cancelliamo active  dal thumb e aggiungiamo obscured
            calcelliamo d-block dallo slider e aggiungiamo d-none*/
            setInvisible();
            // Aggiorniamo la posizione attuale
            activePosition = i;
            /* Aggiungeriamo active e rimuoviamo obscured alla nuova posizione del thumb
             Aggiungeriamo d-block e rimuoviamo d-none alla nuova posizione dello slider*/
            setVisible();
            //modifichiamo la descrizione dell'immagine
            setInfo();
        });
};
//Al click del bottone next
nextBtn.addEventListener("click", function(){
    
   mouveNextActiveAndChangeDescription();
  
})

//Al click de  bottone prev
prevBtn.addEventListener("click", function(){
    
    mouvePrevActiveAndChangeDescription();
   
 })
//Gestione click startautoplay
let myAutoPlay = "";
let myAutoPlayInverted = "";
//al click
startAutoplayBtn.addEventListener("click", function(){
    //nascondiamo il bottone
    this.classList.add("d-none");
    //rimuoviamo il display none e mostriamo il bottone stopautoplay
    stopAutoplayBtn.classList.remove("d-none");
    stopAutoplayBtn.classList.add("d-block");
    //ogni 3 secodi eseguiamo la funzione autoplay
    myAutoPlay = setInterval(mouveNextActiveAndChangeDescription, 2000) ;
});
//Al click del bottone invertAutoplay
invertAutoplayBtn.addEventListener("click", function(){
    if(myAutoPlay){
        console.log(myAutoPlay);
    //annulliamo la funzione autoplay
    clearInterval(myAutoPlay);
    //rimuoviamo il display block e nascondiamo il bottone startAutoplay 
    startAutoplayBtn.classList.remove("d-block");
    startAutoplayBtn.classList.add("d-none");
    //rimuoviamo il display none e mostriamo il bottone stopautoplay
    stopAutoplayBtn.classList.remove("d-none");
    stopAutoplayBtn.classList.add("d-block");
    //ogni 3 secodi eseguiamo la funzione autoplayInvert
    myAutoPlayInverted = setInterval(mouvePrevActiveAndChangeDescription, 2000);
    myAutoPlay = !myAutoPlay;
    console.log(myAutoPlay);
   } else{
    //annulliamo la funzione autoplayInvert
    clearInterval(myAutoPlayInverted);
    //rimuoviamo il display block e nascondiamo il bottone startAutoplay 
    startAutoplayBtn.classList.remove("d-block");
    startAutoplayBtn.classList.add("d-none");
    //rimuoviamo il display none e mostriamo il bottone stopautoplay
    stopAutoplayBtn.classList.remove("d-none");
    stopAutoplayBtn.classList.add("d-block");
    //ogni 3 secodi eseguiamo la funzione autoplay
    myAutoPlay = setInterval(mouveNextActiveAndChangeDescription, 2000)
   }
})
//Al click del bottone stopAutoplay
stopAutoplayBtn.addEventListener("click", function(){
    //Nascondiamo il bottone
    this.classList.add("d-none");
    //rimuoviamo il display none e mostriamo il bottone startAutoplay
    startAutoplayBtn.classList.remove("d-none");
    startAutoplayBtn.classList.add("d-block");
    //annulliamo la funzione autoplay e la funzione autoplayInvert
    clearInterval(myAutoPlay);
    clearInterval(myAutoPlayInverted);
});


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
function mouveNextActiveAndChangeDescription(){
   
    //Se la posizione attuale è minore della lunghezza dell' array
    if(activePosition < containerThumb.length){
        /*rimuoviamo la classe active aggiungiamo obscured 
        rimuoviamo la classe d-block aggiungiamo d-none */
        setInvisible();
        //Inscrementiamo di posizione
        activePosition++;
        //Se la nuova posizione attuale è uguale alla lunghezza dell'array lo resettiamo a 0
        if(activePosition == containerThumb.length){
        activePosition = 0;
        }
        /*rimuoviamo la classe obscured aggiungiamo active nella nuova attuale posizione
        rimuoviamo la classe d-none aggiungiamo dblock nella nuova attuale posizione*/
        setVisible();
        //all'inteno degli elementi di descrizione andiamo a scrivere a sua volta il titolo e la descrizione corrispondente
        setInfo();
    }
}

//funzione per gestire l'active su prevBtn
function mouvePrevActiveAndChangeDescription(){
   
     //Se la posizione attuale è maggiore uguale di 0
    if(activePosition >= 0){
        /*rimuoviamo la classe active e aggiungiamo obscured
        rimuoviamo la classe d-block aggiungiamo d-none*/
        setInvisible();
        // se la posizione attuale è ugualè a 0  lo riinizializziamo alla lunghezza dell' array
        if(activePosition == 0){
            activePosition = containerThumb.length;
            }
        
        //decrementiamo di posizione
        activePosition--;
        /*rimuoviamo la classe hidden aggiungiamo active nell nuova attuale posizione
        rimuoviamo la classe d-none aggiungiamo dblock nella nuova attuale posizione*/
        setVisible();
        //all'inteno dei quali andiamo a scrivere as sua volta il titolo e la descrizionr corrispondente
        setInfo();
    }
}
function setVisible(){
    //rimuoviamo la classe hidden aggiungiamo active nell nuova attuale posizione
    containerThumb[activePosition].classList.remove("obscured");
    containerThumb[activePosition].classList.add("active");
    //rimuoviamo la classe d-none aggiungiamo dblock nella nuova attuale posizione
    containerSlider[activePosition].classList.remove("d-none");
    containerSlider[activePosition].classList.add("d-block");

}
function setInvisible(){
    //rimuoviamo la classe active e aggiungiamo obscured
    containerThumb[activePosition].classList.remove("active");
    containerThumb[activePosition].classList.add("obscured");
    //rimuoviamo la classe d-block aggiungiamo d-none
    containerSlider[activePosition].classList.remove("d-block");
    containerSlider[activePosition].classList.add("d-none");
}
function setInfo(){
    imageTitle.innerHTML = `${images[activePosition].title}`;
    imageText.innerHTML = `${images[activePosition].text}`;
}
