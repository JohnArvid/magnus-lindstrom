'use strict';
let year = new Date().getFullYear();
let span = document.createElement("span");
span.textContent = ` ${year}`;
let footerHead = document.querySelector("footer h3");
footerHead.appendChild(span);
