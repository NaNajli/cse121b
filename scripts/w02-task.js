/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Nadia Rodriguez";
let currentYear = "2023";
let profilePicture = "images/nadiaphoto.png"

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Photo Nadia");



/* Step 5 - Array */


const favoriteFoods = [];
favoriteFoods.push("Salad","Pizza","Ice-cream","Rice","Salmon")
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
favoriteFoods.push("chicken legs");
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;


























