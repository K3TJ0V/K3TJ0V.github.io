import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

fetch("https://api.github.com/users/K3TJ0V/repos")
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp){
        const {name, html_url, homepage, description} = repo;
        const container = document.querySelector('.projects__grid');
        const myTemplate = `<div class="test">
        <article class="projects__window">
          <div class="projects__window--frame">
            <span class="projects__window--circle"></span>
            <span class="projects__window--circle"></span>
            <span class="projects__window--circle"></span>
          </div>
          <div class="projects__window--content">
          <img src="img/Github_projects.503bd179.svg" alt="" class="projects__window--icon">
          <h3 class="window__grid window__title">
            <span class="projects__window--text">project : </span><span class="window__title--color">${name}</span>
          </h3>
            <p class="window__grid">
            <span class="projects__window--text">description : </span><span>${description}</span>
            </p>
            <p class="window__grid">
              <span class="projects__window--text">demo : </span><span>&lt;<a href="${homepage}" title="podlaski git">link</a>&gt;</span>
            </p>
            <p class="window__grid">
              <span class="projects__window--text">github : </span><span>&lt;<a href="${html_url}" title="podlaski git">link</a>&gt;</span>
            </p></div>
          `;
        container.innerHTML += myTemplate;
    }
})
.catch(error =>{
    console.log("Nie udało się pobrać listy repozytoriów");
})