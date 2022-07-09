// ==UserScript==
// @name         Fast Character Editor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes all elements of generated Fast Character editable
// @author       conorfh92
// @match        https://fastcharacter.com/results.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

const allElements = document.getElementsByTagName('*');


// Loop through all elements in body
const allInBody = document.querySelectorAll('body > *');
for (const element of allInBody) {
  element.setAttribute("contenteditable", "true");
}

// Fix elements with formatting broken from making content editable
let element = document.getElementById("labelArmorClass");
element.style.width = "50px";
element.style.left = "296px";

element = document.getElementById("labelInitiative");
element.style.width = "65px";
element.style.left = "350px";

element = document.getElementById("labelPassivePerception");
element.style.width = "180px";
element.style.left = "145px";


// Replace contents of page 2 with blank note space
element = document.getElementById('charsheet02');
while (element.firstChild) {
    element.removeChild(element.firstChild);
  }


// Remove ads and junk from footer
element = document.getElementById('footer');
element.parentNode.removeChild(element);
