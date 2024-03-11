let PetShop = {
    name:"Petshop",
    phone: "999-666-9999",
    address:{
        country:"Mexico",
        city:"Mexicali, Baja California",
        zipcode:"54321"
    },
    pets:[
        {
            name:"Cachito",
            age:"20",
            gender:"Male",
            service:"unable",
            breed:"maltese"
        },
        {
            name:"Slinky",
            age:"40",
            gender:"Male",
            service:"unable",
            breed:"maltese"
        },
        {
            name:"Coqueta",
            age:"25",
            gender:"Female",
            service:"unable",
            breed:"maltese"
        },
        {
            name:"Linda",
            age:"50",
            gender:"Female",
            service:"unable",
            breed:"maltese"
        }
    ]
}

function displayNames(){
    for(var i=0;i<PetShop.pets.length;i++){
    document.getElementById("petList").innerHTML+=`<li>${PetShop.pets[i].name}</li>`;
    }
}
displayNames();

function calculateAverage(){
    //display the ages
    let total=0;
    for(let i=0;i<PetShop.pets.length;i++){
        total = total + PetShop.pets[i].age;
        }
        document.getElementById("petAverage").innerHTML+=`<p>${total}</p>`;
    }
calculateAverage();