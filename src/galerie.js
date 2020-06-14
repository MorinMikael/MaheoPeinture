import {_mesCreation} from './mescreations'
import {_intuitive} from './intuitives'

const creatContainer = document.querySelector("#creat-container");
const creatintContainer = document.querySelector('#intuit-container');

function createGalerie(){
    while(creatContainer.hasChildNodes()){
        creatContainer.removeChild(creatContainer.lastChild);
    }
    while(creatintContainer.hasChildNodes()){
        creatintContainer.removeChild(creatintContainer.lastChild);
    }
    _mesCreation.forEach(createCreaGalerie);
    _intuitive.forEach(createIntGalerie);
}

function createCreaGalerie(expo){
    const creatElement = document.createElement("div");
    creatElement.setAttribute("class" , "col-sm-2 item");
    creatElement.innerHTML = `
                <a class="lightbox" href="${expo.imagelist}">
                    <img class="img-fluid image scale-on-hover" src="${expo.imagelist}" alt="">
                </a>
    `;
    creatContainer.appendChild(creatElement);
}

function createIntGalerie(expo){
    const creatElement = document.createElement("div");
    creatElement.setAttribute("class" , "col-sm-2 item");
    creatElement.innerHTML = `
                <a class="lightbox" href="${expo.imageint}">
                    <img class="img-fluid image scale-on-hover" src="${expo.imageint}" alt="">
                </a>
    `;
    creatintContainer.appendChild(creatElement);
}

export {createGalerie};