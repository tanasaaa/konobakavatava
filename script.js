// Vratiti na vrh stranice odmah nakon učitavanja stranice
window.onload = function() {
    window.scrollTo(0, 0);  // Pomakni stranicu na vrh
};


// Funkcija za prikazivanje/uklanjanje menija
function toggleMenu() {
  var menu = document.getElementById('menu');
  var hamburger = document.querySelector('.hamburger-menu');
  
  // Dodajemo/uklanjamo klasu za prikazivanje menija
  menu.classList.toggle('hidden');
  hamburger.classList.toggle('active');
  
  // Ako je meni otvoren, omogućujemo da klikom na pozadinu zatvori meni
  if (!menu.classList.contains('hidden')) {
    // Kada se klikne izvan menija, meni se zatvori
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.add('hidden');
        hamburger.classList.remove('active');
      }
    });
  }
}


// Funkcija za pomjeranje sekcije "O nama" u centar ekrana
document.querySelector('a[href="#o-nama"]').addEventListener('click', function (e) {
  e.preventDefault(); // Sprečava standardno ponašanje linka
  
  // Pomeranje na sekciju sa ID-em "o-nama"
  const section = document.querySelector('#o-nama');
  section.scrollIntoView({
      behavior: 'smooth', // Glatko pomeranje
      block: 'center' // Centriranje sekcije u sredinu ekrana
  });
});

// Slideshow funkcija 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Mijenjamo sliku svakih 5 sekundi 
}

// JELOVNIK!!! Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Klikom na dugme otvara se modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Klikom na <span> (x), Zatvaranje modala
span.onclick = function() {
  modal.style.display = "none";
}

// Klikom bilo gdje van modala, zatvaranje 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Collapsible functionality for h3 elements
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(collapsible => {
  collapsible.addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});


// Funkcija za pomicanje na vrh stranice
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Glatko pomicanje na vrh
    });
}

// Prikazivanje dugmeta kada korisnik skrola
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Ako korisnik skrola prema dolje više od 300px, dugme će se pojaviti
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// ENGLESKI PREVOD 
document.getElementById('toggleLang').addEventListener('click', function() {
  var translateElement = document.getElementById('google_translate_element');

  // Ako je Google Translate već prikazan, sakrij ga; inače, prikaži ga
  if (translateElement.style.display === 'none' || translateElement.style.display === '') {
      translateElement.style.display = 'block';
      // Inicijalizacija Google Translate
      new google.translate.TranslateElement({
          pageLanguage: 'sr', // Postavi početni jezik
          includedLanguages: 'en,hr', // Dodaj jezike koje podržavaš
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
  } else {
      translateElement.style.display = 'none';
  }
});

// Google Translate script za učitavanje
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'sr',
      includedLanguages: 'en,hr',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Učitaj Google Translate API
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.head.appendChild(script);


















