/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = { 
    name : "Nadia Rodriguez",
    photo : {
        imagePath : "images/nadiaphoto.png",
        photoName : "Photo Nadia "},
        
    favoriteFoods : [ "Salad", "Pizza", "Ice-cream"],
    hobbies : ["Play Guitar", "walk", "swim"],
    placesLived : [],
}


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place:"Rio Ceballos",
        length : "21 years",
    }
);

myProfile.placesLived.push(
    {
        place:"Cordoba",
        length : "1 year",
    }
);


/* DOM Manipulation - Output */
/* Name */
 document.querySelector("#name").textContent = myProfile.name;

 /* Photo with attributes */
 const imageElement = document.querySelector("#photo");
 imageElement.setAttribute("src",myProfile.photo.imagePath);
 imageElement.setAttribute("alt",myProfile.photo.photoName);

/* Favorite Foods List*/
   myProfile.favoriteFoods.forEach(food => {
   let li = document.createElement('li');
   li.textContent = food;
   document.querySelector("#favorite-foods").appendChild(li);
   });

/* Hobbies List */   

   myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
   });
   
/* Places Lived DataList */  
   myProfile.placesLived.forEach(placelived =>{
    
        let dt = document.createElement("dt");
        dt.innerHTML =` <strong> ${placelived.place}`;
        document.querySelector("#places-lived").appendChild(dt);
        let dd = document.createElement("dd");
        dd.innerHTML = placelived.length;
        document.querySelector("#places-lived").appendChild(dd);   
    })
    
   
        

 


 

 














