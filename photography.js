
const swiper = new Swiper('.swiper', {
    // Optional parameters
    
  
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
        delay: 6500,
      },
      effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
    
  });
  function reveal(){
      let reveals=document.querySelectorAll(".reveal");
      for (let i=0; i<reveals.length; i++){
          let windowHeight=window.innerHeight;
          let elementTop=reveals[i].getBoundingClientRect().top
          let elementVisible=150
          if(elementTop<windowHeight-elementVisible){
              reveals[i].classList.add("active")
          }else{
              reveals[i].classlist.remove("active")
          }
      }
  }
  window.addEventListener("scroll", reveal)