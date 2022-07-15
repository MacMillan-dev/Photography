const firebaseConfig = {
  apiKey: "AIzaSyCUs6ii9vgrxouNHp4-w24rpha_dP2z0RE",
  authDomain: "photography-site-9d538.firebaseapp.com",
  databaseURL: "https://photography-site-9d538-default-rtdb.firebaseio.com",
  projectId: "photography-site-9d538",
  storageBucket: "photography-site-9d538.appspot.com",
  messagingSenderId: "573820444085",
  appId: "1:573820444085:web:6a1bcfd167a68574e28dfc"
};

//initialize firebase
firebase.initializeApp(firebaseConfig)

//reference your DB
let contactFormDB = firebase.database().ref("contactForm")

document.getElementById('bookingForm').addEventListener('submit', submitForm)

function submitForm(e){
  e.preventDefault()
  let fullName = getElementVal('name')
  let email = getElementVal('email')
  let message = getElementVal('textMsg')

  saveMessage(fullName, email, message)
}

function getElementVal(id){
  return document.getElementById(id).value
}

const saveMessage = (fullName, email, message) => {
  let newContactForm = contactFormDB.push()
  newContactForm.set({
    name: fullName,
    email: email,
    message: message,
  })
}



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

