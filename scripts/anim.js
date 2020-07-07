const squirtle = document.getElementById('squirtle');
const charmander = document.getElementById('charmander');
const bulbasaur = document.getElementById('bulbasaur');
const squirtleScreen = document.querySelector('.gridcontainerSquirtle');
const charmanderScreen = document.querySelector('.gridcontainerCharmander');
const bulbasaurScreen = document.querySelector('.gridcontainerBulbasaur');
const content = document.querySelector('.container');
const button = document.querySelector('.button');
const banner = document.querySelector('.whitemark');
const blueBlock = document.querySelector('.blueblock');
const redBlock = document.querySelector('.redblock');
const logo = document.querySelector('.imagem');
const back = document.querySelector('.buttonback');

/// Animação inicial

button.addEventListener('click', ()=> {
    if (!haveBeenClicked) {
        haveBeenClicked = true;
        setTimeout(() => banner.style.animation = "faixafora 1s forwards", 1);
        setTimeout(() => back.style.animation = "back 1s forwards", 1);
        setTimeout(() => button.style.animation = "buttonzero 1s forwards", 1000);
        setTimeout(() => blueBlock.style.animation = "Blockanimation 1s forwards", 1000);
        setTimeout(() => redBlock.style.animation = "Blockanimation 1s forwards", 1000);
        setTimeout(() => logo.style.animation = "logosobe 1s forwards", 1000);
        setTimeout(() => startAudio.volume = 0, 1000);
        setTimeout(() => menuAudio.play(), 1000);
        setTimeout(() => haveBeenClicked = false, 2000);
    }
});


/// Passa a Home pra frente
back.addEventListener('click', ()=> {
    if (!haveBeenClicked) {
        haveBeenClicked = true;
        setTimeout(() => blueBlock.style.animation = "BlockanimationFechar 1s forwards", 1);
        setTimeout(() => redBlock.style.animation = "BlockanimationFechar 1s forwards", 1);
        setTimeout(() => logo.style.animation = "logodesce 1s forwards", 500);
        setTimeout(() => content.style.animation = "front 1s forwards", 1000);
        setTimeout(() => back.style.animation = "back 1s forwards", 1);
        setTimeout(() => squirtleScreen.style.animation = "back 1s forwards", 1000);
        setTimeout(() => bulbasaurScreen.style.animation = "back 1s forwards", 1000);
        setTimeout(() => charmanderScreen.style.animation = "back 1s forwards", 1000);
        setTimeout(() => logo.style.animation = "logosobe 1s forwards", 2000);
        setTimeout(() => blueBlock.style.animation = "Blockanimation 1s forwards", 2000);
        setTimeout(() => redBlock.style.animation = "Blockanimation 1s forwards", 2000);
        if (!haveBeenClicked) {
            setTimeout(() => menuAudio.play(), 1000);
        }
        setTimeout(() => haveBeenClicked = false, 2000);
        }
    });

/// Passa squirtleScreen pra frente

squirtle.addEventListener('click', function click(e) {
    if (!haveBeenClicked) {
        haveBeenClicked = true;
        setTimeout(() => blueBlock.style.animation = "BlockanimationFechar 1s forwards", 1);
        setTimeout(() => redBlock.style.animation = "BlockanimationFechar 1s forwards", 1);
        setTimeout(() => squirtleaudio.play(), 1);
        setTimeout(() => logo.style.animation = "logodesce 1s forwards", 500);
        setTimeout(() => content.style.animation = "back 1s forwards", 1000); 
        setTimeout(() => charmanderScreen.style.animation = "back 1s forwards", 1000); 
        setTimeout(() => bulbasaurScreen.style.animation = "back 1s forwards", 1000); 
        setTimeout(() => back.style.animation = "front 1s forwards", 1000); 
        setTimeout(() => squirtleScreen.style.animation = "front 1s forwards", 1000); 
        setTimeout(() => logo.style.animation = "logosobe 1s forwards", 2000);
        setTimeout(() => blueBlock.style.animation = "Blockanimation 1s forwards", 2000);
        setTimeout(() => redBlock.style.animation = "Blockanimation 1s forwards", 2000);
        setTimeout(() => haveBeenClicked = false, 2000);
      }
    });

/// Passa bulbasaurScreen pra frente

bulbasaur.addEventListener('click', ()=> {
    if (!haveBeenClicked) {
        haveBeenClicked = true;
        setTimeout(() => blueBlock.style.animation = "BlockanimationFechar 1s forwards", 1);
        setTimeout(() => redBlock.style.animation = "BlockanimationFechar 1s forwards", 1);
        setTimeout(() => bulbasauraudio.play(), 1);
        setTimeout(() => logo.style.animation = "logodesce 1s forwards", 500);
        setTimeout(() => bulbasaurScreen.style.animation = "front 1s forwards", 1000); 
        setTimeout(() => content.style.animation = "back 1s forwards", 1000); 
        setTimeout(() => charmanderScreen.style.animation = "back 1s forwards", 1000); 
        setTimeout(() => back.style.animation = "front 1s forwards", 1000); 
        setTimeout(() => squirtleScreen.style.animation = "front 1s forwards", 1000); 
        setTimeout(() => logo.style.animation = "logosobe 1s forwards", 2000);
        setTimeout(() => blueBlock.style.animation = "Blockanimation 1s forwards", 2000);
        setTimeout(() => redBlock.style.animation = "Blockanimation 1s forwards", 2000);
        setTimeout(() => haveBeenClicked = false, 2000);
    }
});


/// Passa charmanderScreen pra frente
charmander.addEventListener('click', ()=> {
    if (!haveBeenClicked) {
        haveBeenClicked = true;
        setTimeout(() => blueBlock.style.animation = "BlockanimationFechar 1s forwards", 1);
        setTimeout(() => redBlock.style.animation = "BlockanimationFechar 1s forwards", 1);
        setTimeout(() => charmanderaudio.play(), 1);
        setTimeout(() => logo.style.animation = "logodesce 1s forwards", 500);
        setTimeout(() => squirtleScreen.style.animation = "back 1s forwards", 1000);
        setTimeout(() => bulbasaurScreen.style.animation = "back 1s forwards", 1000);
        setTimeout(() => content.style.animation = "back 1s forwards", 1000);
        setTimeout(() => back.style.animation = "front 1s forwards", 1000); 
        setTimeout(() => charmanderScreen.style.animation = "front 1s forwards", 1000);
        setTimeout(() => logo.style.animation = "logosobe 1s forwards", 2000);
        setTimeout(() => blueBlock.style.animation = "Blockanimation 1s forwards", 2000);
        setTimeout(() => redBlock.style.animation = "Blockanimation 1s forwards", 2000);
        setTimeout(() => haveBeenClicked = false, 2000);
    }   
});





