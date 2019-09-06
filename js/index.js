const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navMenu = document.querySelectorAll('a');
navMenu[0].textContent = 'Services';
navMenu[1].textContent = 'Product';
navMenu[2].textContent = 'Vision';
navMenu[3].textContent = 'Features';
navMenu[4].textContent = 'About';
navMenu[5].textContent = 'Contact';



const companyLogo = document.querySelector('section img');
companyLogo.setAttribute('src', 'img/header-img.png')
console.log(companyLogo);


//use inner HTML
const mainHead = document.querySelector('h1');
mainHead.textContent = 'DOM Is Awsome';
mainHead.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br/> ');
console.log(mainHead);


const mainBttn = document.querySelector('button');
mainBttn.textContent = 'Get Started';
console.log(mainBttn);

const headers = document.querySelectorAll('h4');
headers[0].textContent = 'Features';
headers[1].textContent = 'About';
headers[2].textContent = 'Services';
headers[3].textContent = 'Product';
headers[4].textContent = 'Vision';
headers[5].textContent = 'Contact';
console.log(headers);

const topPara = document.querySelectorAll('.main-content .top-content .text-content p');
topPara[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topPara[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
console.log(topPara);

//trying a different way to add a image
const snippet = document.getElementById('middle-img');
snippet.setAttribute('src', siteContent["main-content"]["middle-img-src"])



const bottomPara = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomPara[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomPara[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomPara[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
console.log(bottomPara);


const troubleMaker = document.querySelector('.contact p');
troubleMaker.textContent = '123 Way 456 Street Somewhere, USA'
troubleMaker.innerHTML = siteContent["contact"]["address"].split(' ').join('<br/>');


const foot = document.querySelectorAll('.contact p');
foot[1].textContent = '1 (888) 888-8888';
foot[2].textContent = 'sales@greatidea.io';

const copy = document.querySelector('footer p');
copy.textContent = 'Copyright Great Idea! 2018'


navMenu.forEach((ele) => {
  navMenu.style.color = 'green';
})




