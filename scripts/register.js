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
            gender:"Male"
        },
        {
            name:"Slinky",
            age:"40",
            gender:"Male"
        },
        {
            name:"Coqueta",
            age:"25",
            gender:"Female"
        },
        {
            name:"Linda",
            age:"50",
            gender:"Female"
        }
    ]
}

function displayNames(){
    document.getElementById("petList").innerHTML=`<li>${PetShop.pets[0].name}</li>`;
}

displayNames();