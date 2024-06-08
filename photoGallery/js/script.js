const imageOverlays = document.querySelectorAll('.image-overlay');
const foxBtnMore=document.querySelector('.fox-btn-more');
const whaleBtnMore=document.querySelector('.whale-btn-more');
const baboonBtnMore=document.querySelector('.baboon-btn-more');
const deerBtnMore=document.querySelector('.deer-btn-more');

    imageOverlays.forEach(overlay => {
      const divTextName = overlay.querySelector('.div-text-name');
      const divTextLoc = overlay.querySelector('.div-text-loc');
      
    //   const textMore=document.querySelector('.div-text-more');
   

      overlay.addEventListener('mouseover', () => {
        //  imageText.style.transform = `translateY(${ - 8}px)`; // Move up 10px
        divTextName.style.transform = `translateY(${ - 30}px)`; 
        divTextLoc.style.transform = `translateY(${ - 30}px)`; 
        // textMore.classList.add("show");
         
      });

      overlay.addEventListener('mouseout', () => {
        divTextName.style.transform = 'translateY(0px)'; // Reset to initial position
        divTextLoc.style.transform = 'translateY(0px)'; // Reset to initial position
        // textMore.classList.remove("show");
        
   
      });
    });

    //hover effect on fox image

    const fox =document.querySelector('.fox');
    fox.addEventListener('mouseover',()=>{
        foxBtnMore.style.display='flex';
    });
    fox.addEventListener('mouseout',()=>{
        foxBtnMore.style.display='none';
    });

    //hover effect on whale image

    const  whale =document.querySelector('.whale');
    whale.addEventListener('mouseover',()=>{
        whaleBtnMore.style.display='flex';
    });
    whale.addEventListener('mouseout',()=>{
        whaleBtnMore.style.display='none';
    });

    //hover effect on baboon image

    const  baboon =document.querySelector('.baboon');
    baboon.addEventListener('mouseover',()=>{
        baboonBtnMore.style.display='flex';
    });
    baboon.addEventListener('mouseout',()=>{
        baboonBtnMore.style.display='none';
    });

    
    //hover effect on deer image

    const  deer =document.querySelector('.deer');
    deer.addEventListener('mouseover',()=>{
        deerBtnMore.style.display='flex';
    });
    deer.addEventListener('mouseout',()=>{
        deerBtnMore.style.display='none';
    });