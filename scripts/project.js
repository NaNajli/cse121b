const rooomsElement = document.querySelector("#rooms");
let bethroomList = [];

const displayBethrooms = (bethrooms) => {

    bethrooms.forEach(bethroom=>{
           
           

           let titleprice =" PRICE: $";
           let titleamenities = "AMENITIES: ";
           let titlefacilities = "FACILITIES: ";
           let article = document.createElement("article");
           let room = document.createElement("h3");
           let img = document.createElement("img");
           let price = document.createElement("p");
           let amenities = document.createElement("p");
           let  facilities = document.createElement("p");   
           img.setAttribute("src",bethroom.imageUrl);
           img.setAttribute("alt",bethroom.room);
           img.setAttribute("alt",bethroom.price);
           article.appendChild(room);
           article.appendChild(img);
           article.appendChild(price);
           article.appendChild(amenities);
           article.appendChild(facilities);   
           room.textContent = bethroom.room;
           price.textContent = bethroom.price;
           amenities.textContent = bethroom.amenities;
           facilities.textContent = bethroom.facilities;
           rooomsElement.appendChild(article);
           price.prepend(titleprice);
           amenities.prepend(titleamenities);
           facilities.prepend(titlefacilities);
           
          
          

           
           

    })};

        
     

      const getBethRooms = async ()=>{
      
       const response = await fetch("https://run.mocky.io/v3/a7a34c96-e286-4e77-b830-a7e000cbf622");
       bethroomList = await response.json(); 
       displayBethrooms(bethroomList);
      
        };   
  
      const reset = () =>{
      rooomsElement.innerHTML="";
}; 

        const sortByroom = (bethrooms) =>{
            reset();
        
            switch(document.querySelector("#sortByroom").value){
                case "one":      
                displayBethrooms(bethrooms.filter((bethroom) => bethroom.guess.includes("one")));
                break;
                case "two":
                displayBethrooms(bethrooms.filter(bethroom =>bethroom.guess.includes("two")));
                break;
                case "three":
                displayBethrooms(bethrooms.filter(bethroom =>bethroom.guess.includes("three")));   
                    break;
                case "four":
                    displayBethrooms(bethrooms.filter(bethroom =>bethroom.guess.includes("four")));   
                        break;           
            }
        };
         
        getBethRooms();
     
            
        /* Event Listener */
        document.querySelector("#sortByroom").addEventListener("change",()=>{sortByroom(bethroomList)});
        
       
        


