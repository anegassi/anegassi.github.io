"use strict";

const library = {
    libraryDB: []
};
library.libraryDB = [
    ];

     function add() {
       let productNameInput= document.getElementById("computers")
       productNameInput=productNameInput.value
       //alert(productNameInput)
       if(productNameInput== null)
         return alert("Re-enter Item Name: ");
         //alert(productNameInput)
       let categoryInput= document.getElementById("category").value
         if(categoryInput== null)
           return alert("Re-enter Item Category: ")  

        let quantityInput= document.getElementById("quantity").value
           if(quantityInput== null)
             return alert("Re-enter Item Quantity: ")
             
        let ratingInput=  document.getElementById("ratings").value     
             
        const itemList= {productName:productNameInput, cateory:categoryInput,quantity:quantityInput,rating:ratingInput}     
        alert(itemList)
        alert(library.libraryDB.push(itemList));
        
    };
    alert(library.libraryDB)