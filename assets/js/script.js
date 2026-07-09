"use strict";

document.addEventListener("DOMContentLoaded", init);

function alsLinkGeklikt(){
  console.log("Ja, er is op geklikt.");
}

function init() {
  document.querySelector("a").addEventListener("click", alsLinkGeklikt);
  console.log("Hallo 2");
  console.log("Hallo");
}

