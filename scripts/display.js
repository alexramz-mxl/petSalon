let text;
let list;
let card;
function displayNames(){
    let list = document.getElementById("petsList");
    text ="";//clear the var
    //use a loop to travel the array
    for(let i=0;i<PetShop.pets.length;i++){
        innerHTML+=`<li>${PetShop.pets[i].name}</li>`;
    }
    list.innerHTML=text;
}

function displayCards(){
    const petsDiv = document.getElementById("pets");
    card="";
    for(let i=0;i<PetShop.pets.length;i++){
        let pet = PetShop.pets[i];
        card+=`
        <div class="petCard ${pet.service.toLowerCase()}">
            <p>${pet.name}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
        </div>
        `;
    }
    petsDiv.innerHTML=card;
}

function displayTotalAmountPets(){
    document.getElementById("totalPets").innerHTML=PetShop.pets.length;
}

function displayServiceCount(){
    //declare variables
    let grooming=0;
    let vaccine=0;
    let hotel=0;

    for(let i=0;i<PetShop.pets.length;i++){
        //travel the array
        let pet = PetShop.pets[i]; //getting the current pet
        if(pet.service.toLowerCase() == "grooming"){
            grooming++; //increase grooming count
            document.getElementById("totalGroomings").innerHTML=grooming;
        }
        else if(pet.service.toLowerCase() == "vaccine"){
            //vaccines
            vaccine++;//increase vaccines count
            document.getElementById("totalVaccines").innerHTML=vaccine;
        }else{
            //hotels
            hotel++;//increase hotels count
            document.getElementById("totalHotels").innerHTML=hotel;  
        }
    }
}

function displayPetsCount(){
    let dog=0;
    let cat=0;
    let other=0;

    for(let i=0;i<PetShop.pets.length;i++){
        let pet = PetShop.pets[i];
        if(pet.service.toLowerCase() == "dog"){
            dog++;
            document.getElementById("totalDogs").innerHTML=dog;
        }
        else if(pet.service.toLowerCase() == "cat"){
            //vaccines
            cat++;//increase vaccines count
            document.getElementById("totalCats").innerHTML=cat;
        }else{
            other++;
            document.getElementById("totalOthers").innerHTML=other;
        }
    }

}