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
navMenu[0].textContent = siteContent["nav"]["nav-item-1"];
navMenu[1].textContent = siteContent["nav"]["nav-item-2"];
navMenu[2].textContent = siteContent["nav"]["nav-item-3"];
navMenu[3].textContent = siteContent["nav"]["nav-item-4"];
navMenu[4].textContent = siteContent["nav"]["nav-item-5"];
navMenu[5].textContent = siteContent["nav"]["nav-item-6"];
//navMenu[0].textContent =  siteContent["nav"]["nav-item-1"]; ???

const companyImg = document.getElementById('cta-img');
companyImg.setAttribute('src', siteContent["cta"]["img-src"])

// const companyImg = document.querySelector('section img');
// companyImg.setAttribute('src', 'img/header-img.png')
// above code also works


//use inner HTML
const mainHead = document.querySelector('h1');
mainHead.textContent = 'DOM Is Awesome';
mainHead.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br/>');
mainHead.style.textShadow = '3px 3px #26DAF5';
console.log(mainHead);


const mainBttn = document.querySelector('button');
mainBttn.textContent = 'Get Started';
console.log(mainBttn);

const headers = document.querySelectorAll('h4');
headers[0].textContent = siteContent["main-content"]["features-h4"];
headers[1].textContent = siteContent["main-content"]["about-h4"];
headers[2].textContent = siteContent["main-content"]["services-h4"];
headers[3].textContent = siteContent["main-content"]["product-h4"];
headers[4].textContent = siteContent["main-content"]["vision-h4"];
console.log(headers);

// Stretch
headers[0].style.fontSize = '25px';
headers[0].style.textShadow = '2px 2px #26DAF5';
headers[1].style.fontSize = '25px';
headers[1].style.textShadow = '2px 2px #26DAF5';
headers[2].style.fontSize = '25px';
headers[2].style.textShadow = '2px 2px #26DAF5';
headers[3].style.fontSize = '25px';
headers[3].style.textShadow = '2px 2px #26DAF5';
headers[4].style.fontSize = '25px';
headers[4].style.textShadow = '2px 2px #26DAF5';
// Stretch


const topPara = document.querySelectorAll('.main-content .top-content .text-content p');
topPara[0].textContent = siteContent["main-content"]["features-content"];
topPara[1].textContent = siteContent["main-content"]["about-content"];
console.log(topPara);

//trying a different way to add a imagee
const snippet = document.getElementById('middle-img');
snippet.setAttribute('src', siteContent["main-content"]["middle-img-src"])



const bottomPara = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomPara[0].textContent = siteContent["main-content"]["services-content"];
bottomPara[1].textContent = siteContent["main-content"]["product-content"];
bottomPara[2].textContent = siteContent["main-content"]["vision-content"];
console.log(bottomPara);


const breakLine = document.querySelector('.contact p');
breakLine.textContent = '123 Way 456 Street Somewhere, USA';
const breakLit = siteContent.contact.address.split(' ');
breakLine.innerHTML = `${breakLit[0]}  ${breakLit[1]}  ${breakLit[2]}  ${breakLit[3]} <br> ${breakLit[4]}  ${breakLit[5]}`;



const foot = document.querySelectorAll('.contact p');
foot[1].textContent = '1 (888) 888-8888';
foot[2].textContent = 'sales@greatidea.io';

const copy = document.querySelector('footer p');
copy.textContent = 'Copyright Great Idea! 2018'

//task 3
navMenu.forEach((ele) => {
  ele.style.color = 'green';
})

const lastNav = document.createElement('a');
lastNav.textContent = 'Investors';

const newTag = document.querySelector('nav');
newTag.appendChild(lastNav);

const firstNav = document.createElement('a');
firstNav.textContent = 'Careers';

const anoTag = document.querySelector('nav');
anoTag.prepend(firstNav);
