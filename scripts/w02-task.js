/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Nadia Rodriguez";
let currentYear = "2023";
let profilePicture = "../images/nadiaphoto.jpg"

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Photo Nadia");

const favoriteFoods = [];
favoriteFoods.push("Salad","Pizza","Ice-cream","Rice","Salmon")
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
favoriteFoods.push("chicken legs");
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;








/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






