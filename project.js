//========================
// Read Project Name
//========================

const params = new URLSearchParams(window.location.search);

const projectName = params.get("project") || "portfolio";

const project = projects[projectName];
console.log(projectName);
console.log(project);

//========================
// HTML Elements
//========================

const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const techContainer = document.getElementById("project-tech");
const featureContainer = document.getElementById("project-features");
const githubBtn = document.getElementById("github-link");
const demoBtn = document.getElementById("website-link");

const sliderImage = document.getElementById("slider-image");
const dotsContainer = document.getElementById("dots");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

//========================
// Put Project Data
//========================

const lang = localStorage.getItem("language") || "en";

title.textContent = project.title[lang];

description.textContent = project.description[lang];

githubBtn.href = project.github;

demoBtn.href = project.demo;

//========================
// Technologies
//========================

project.technologies.forEach(item=>{

    const span=document.createElement("span");

    span.textContent=item;

    techContainer.appendChild(span);

});

//========================
// Features
//========================

project.features[lang].forEach(item=>{

    const li=document.createElement("li");

    li.textContent=item;

    featureContainer.appendChild(li);

});

//========================
// Slider
//========================

let current=0;

function createDots(){

    dotsContainer.innerHTML="";

    project.images.forEach((img,index)=>{

        const dot=document.createElement("span");

        dot.classList.add("dot");

        if(index===0){

            dot.classList.add("active");

        }

        dot.onclick=()=>{

            current=index;

            showImage();

        }

        dotsContainer.appendChild(dot);

    });

}

function showImage(){

    sliderImage.src=project.images[current];

    const dots=document.querySelectorAll(".dot");

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    dots[current].classList.add("active");

}

next.onclick=()=>{

    current++;

    if(current>=project.images.length){

        current=0;

    }

    showImage();

}

prev.onclick=()=>{

    current--;

    if(current<0){

        current=project.images.length-1;

    }

    showImage();

}

createDots();

showImage();

//========================
// Lightbox
//========================

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const closeBtn=document.getElementById("close-lightbox");

sliderImage.onclick=()=>{

    lightbox.style.display="flex";

    lightboxImg.src=sliderImage.src;

}

closeBtn.onclick=()=>{

    lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}