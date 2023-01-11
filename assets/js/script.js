"use strict"; //decalre strict mode. It help to prevent you from using undeclared variables

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

const preloader = document.querySelector("[data-preloader]"); //return the first element that match the selector

window.addEventListener("load", function () {
  //load event is fired when the whole page has loaded
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); } /*if visible is set remove it, otherwise add it*/

navToggler.addEventListener("click", toggleNavbar); 
/* when click button, call funtcion(toggleNavbar) to add/delete .active on <nav> section */
/* css, .navbar visibility is hidden, .navbar .active is visiable */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);