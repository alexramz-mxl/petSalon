let PetShop = {
    name:"Petshop",
    phone: "999-666-9999",
    address:{
        country:"Mexico",
        city:"Mexicali, Baja California",
        zipcode:"54321"
    },
    pets:[]
}
let inputName;
let inputAge;
let inputGender;
let inputBreed;
let inputService;
//creating constructor
function Pet(name,age,gender,service,breed){
    this.name = name;
    this.age =age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
}

function calculateAverage(){
    //display the ages
    total = total + PetShop.pets[i].age;
        document.getElementById("petAverage").innerHTML+=`<p>${total}</p>`;
}
function register(){
    //get the values from the HTML
    //create the object using the constructor
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value,inputBreed.value, inputService.value);
    if(isValid(newPet)){
    PetShop.pets.push(newPet);
    displayCards();
    displayTotalAmountPets()
    displayServiceCount()
    clearForm();
    }
}
function isValid(pet){
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    if(!pet.name || !pet.service){ 
        if(!pet.name)inputName.classList.add("alert-error");
        if(!pet.service)inputService.classList.add("alert-error");
        return false;
    }
    return true;
}
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";   
}
function init(){
    //hook events
    //initial functions
    //creating new pet
    let pet1 = new Pet("Cachito",20,"Male","Maltese");
    PetShop.pets.push(pet1)
    displayCards();
    displayTotalAmountPets();
    displayServiceCount()
    //load the input a
    inputName = document.getElementById("txtName");
    inputAge = document.getElementById("txtAge");
    inputGender = document.getElementById("txtGender");
    inputService = document.getElementById("txtService");
    inputBreed = document.getElementById("txtBreed");
}

window.onload=init;